import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRemovedItems } from "../actions";

const RemovedItems = () => {
  const dispatch = useDispatch();
  const removedItems = useSelector((state) => state.removedItem);
  console.log(removedItems);

  const totalItems = removedItems.reduce(
    (acc, curr) => acc + curr.itemQuantity,
    0
  );

  useEffect(() => {
    dispatch(fetchRemovedItems());
  }, []);

  return (
    <div>
      <h1>Removed Items from Inventory</h1>
      <ul>
        {removedItems.map((item, index) => (
          <li key={index}>
            {item.itemName}: {item.itemQuantity}
          </li>
        ))}
      </ul>
      <h2>Removed Items Total: {totalItems}</h2>
    </div>
  );
};

export default RemovedItems;
