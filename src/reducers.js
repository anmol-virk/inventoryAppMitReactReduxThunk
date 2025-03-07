const initialState = { addItem: [], removedItem: [], remaining: [] };

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ADDITEM_SUCCESS":
      console.log("Reducer payload:", action.payload);
      return { ...state, addItem: action.payload };
    case "FETCH_REMOVEDITEM_SUCCESS":
      return { ...state, removedItem: action.payload };
    case "FETCH_REMAINING_SUCCESS":
      return { ...state, remaining: action.payload };
    case "ADD_ENTRY_SUCCESS":
      if (action.payload.type === "add") {
        return { ...state, addItem: [...state.addItem, action.payload] };
      } else if (action.payload.type === "remove") {
        return {
          ...state,
          removedItem: [...state.removedItem, action.payload],
        };
      }
    default:
      return state;
  }
};

export default inventoryReducer;
