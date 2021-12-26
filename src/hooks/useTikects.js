import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSearchId } from "../store/actions/search";
import { getTickets } from "../store/actions/tickets";
import { setVisibleTickets } from "../store/reducer/ticketsReducer";

export const useTickects = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const { tickets, searchId, visibleTickets, filters, sortBy } = useSelector(
    (state) => state.tickets
  );

  const filteredTickets = filters.some((f) => f.value === "all")
    ? tickets
    : tickets.filter((ticket) =>
        filters.every((filter) =>
          ticket.segments.some(
            (segment) => segment.stops.length === filter.value
          )
        )
      );

  let sortedTickets;

  const sortByPrice = (arr) => arr.sort((a, b) => a.price - b.price);
  const sortByDuration = (arr) =>
    arr.sort(
      (a, b) =>
        a.segments[0].duration +
        a.segments[1].duration -
        (b.segments[0].duration + b.segments[1].duration)
    );

  if (sortBy === "optimal") {
    sortedTickets = sortByPrice(sortByDuration(filteredTickets));
  } else if (sortBy === "duration") {
    sortedTickets = sortByDuration(filteredTickets);
  } else if (sortBy === "price") {
    sortedTickets = sortByPrice(filteredTickets);
  }

  const showMoreTickets = () => {
    dispatch(setVisibleTickets(5));
  };

  useEffect(() => {
    async function fetchTickets() {
      if (!searchId) {
        await dispatch(getSearchId());
      } else {
        await dispatch(getTickets(searchId));
        setLoading(false);
      }
    }
    fetchTickets();
  }, [searchId, dispatch]);

  return {
    loading,
    tickets: sortedTickets.slice(0, visibleTickets),
    showMoreTickets,
  };
};
