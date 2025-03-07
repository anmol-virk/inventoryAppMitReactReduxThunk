import { useSelector, useDispatch } from "react-redux";
import { fetchAddItems, fetchRemovedItems } from "../actions";
import { useEffect } from "react";

const Remaining = () => {
  const dispatch = useDispatch();
  const addItem = useSelector((state) => state.addItem);
  const removedItems = useSelector((state) => state.removedItem);
  // console.log(addItem);

  const totalAddItems = addItem.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0
  );
  const totalRemoved = removedItems.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0
  );
  const totalRemaining = totalAddItems - totalRemoved;

  useEffect(() => {
    dispatch(fetchAddItems());
  }, []);

  useEffect(() => {
    dispatch(fetchRemovedItems());
  }, []);
  console.log(totalRemaining);

  return (
    <div>
      <h1>Remaining Items in Inventory</h1>
      <h2>Inventory Total: {totalRemaining}</h2>
    </div>
  );
};

export default Remaining;
