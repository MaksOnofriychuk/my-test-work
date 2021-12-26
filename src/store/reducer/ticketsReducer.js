const SET_TICKETS = "SET_REPOS";
const SET_SEARCH_ID = "SET_SEARCH_ID";
const ADD_MORE_TICKETS = "ADD_MORE_TICKETS";
const ADD_FILTER = "ADD_FILTER";
const REMOVE_FILTER = "REMOVE_FILTER";
const SORT_BY = "SORT_BY";

export const FILTERS = {
  ALL: {
    id: "ALL",
    value: "all",
  },
  NO_STOPS: {
    id: "NO_STOPS",
    value: 0,
  },
  ONE_STOP: {
    id: "ONE_STOP",
    value: 1,
  },
  TWO_STOPS: {
    id: "TWO_STOPS",
    value: 2,
  },
  THREE_STOPS: {
    id: "THREE_STOPS",
    value: 3,
  },
};

export const defaultState = {
  tickets: [],
  searchId: "",
  visibleTickets: 5,
  filteredTickets: [],
  filters: [
    {
      id: "ALL",
      value: "all",
    },
  ],
  sortBy: "price",
};

export default function ticketsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_TICKETS:
      return {
        ...state,
        tickets: action.payload,
      };

    case SET_SEARCH_ID:
      return { ...state, searchId: action.searchId };

    case ADD_MORE_TICKETS:
      return {
        ...state,
        visibleTickets: state.visibleTickets + action.payload,
      };

    case ADD_FILTER:
      return {
        ...state,
        filters: [...state.filters, action.payload],
      };

    case REMOVE_FILTER:
      return {
        ...state,
        filters: state.filters.filter((f) => f.id !== action.payload),
      };

    case SORT_BY:
      return { ...state, sortBy: action.payload };

    default:
      return state;
  }
}

export const setTickets = (tickets) => ({
  type: SET_TICKETS,
  payload: tickets,
});

export const setSearchId = (searchId) => ({
  type: SET_SEARCH_ID,
  searchId,
});

export const setVisibleTickets = (number) => ({
  type: ADD_MORE_TICKETS,
  payload: number,
});

export const addFilter = (id) => ({ type: ADD_FILTER, payload: id });

export const removeFilter = (id) => ({ type: REMOVE_FILTER, payload: id });

export const sortByAC = (sortBy) => ({ type: SORT_BY, payload: sortBy });
