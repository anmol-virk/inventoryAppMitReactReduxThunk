export const addEntry = (entry) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/add-to-store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      }
    );
    const data = await response.json();
    if (data.success === true) {
      console.log(data);
      dispatch({ type: "ADD_ENTRY_SUCCESS", payload: data.data });
    }
  } catch (error) {
    console.log("Error adding entry", error);
  }
};

export const removeEntry = (entry) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/remove-from-store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entry),
      }
    );
    const data = await response.json();
    if (data.success === true) {
      console.log(data);
      dispatch({ type: "ADD_ENTRY_SUCCESS", payload: data.data });
    }
  } catch (error) {
    console.log("Error removing entry", error);
  }
};

export const fetchAddItems = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/storage-items"
    );
    const data = await response.json();
    console.log("Fetched items:", data);
    if (data) {
      dispatch({ type: "FETCH_ADDITEM_SUCCESS", payload: data });
    }
  } catch (error) {
    console.log("Error fetching items", error);
  }
};

export const fetchRemovedItems = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/dispatched-from-store"
    );
    const data = await response.json();
    if (data) {
      dispatch({ type: "FETCH_REMOVEDITEM_SUCCESS", payload: data });
    }
  } catch (error) {
    console.log("Error fetching Removed items", error);
  }
};
