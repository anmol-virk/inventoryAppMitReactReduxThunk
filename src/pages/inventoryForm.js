import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry, removeEntry } from "../actions";

function InventoryForm() {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [entryType, setEntryType] = useState("");

  const handelAddEntry = (e) => {
    e.preventDefault();
    if (entryType === "add") {
      dispatch(
        addEntry({
          itemName,
          itemQuantity: parseFloat(itemQuantity),
          entryType,
        })
      );
    } else {
      dispatch(
        removeEntry({
          itemName,
          itemQuantity: parseFloat(itemQuantity),
          entryType,
        })
      );
    }
    setItemName("");
    setItemQuantity("");
    setEntryType("");
  };

  return (
    <div>
      <h1>Inventory Admin App</h1>
      <form>
        <div>
          <label>Item Name:</label>
          <br />
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <br />
          <label>Item Quantity: </label>
          <br />
          <input
            type="number"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
          />
          <br />
          <br />
          <label>Entry Type:</label>
          <br />
          <select
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
          >
            <option value="add">Add to Storage</option>
            <option value="remove">Remove from Storage</option>
          </select>
        </div>
        <br />
        <button onClick={handelAddEntry}>Add Item Data</button>
      </form>
    </div>
  );
}

export default InventoryForm;
