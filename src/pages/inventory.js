import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAddItems } from "../actions";

const Inventory = () => {
  const dispatch = useDispatch();
  const addItem = useSelector((state) => state.addItem);
  //addItem.forEach((item) => console.log(item));
  const totalItems = addItem.reduce((acc, curr) => acc + curr.itemQuantity, 0);
  console.log(totalItems);

  useEffect(() => {
    dispatch(fetchAddItems());
  }, [dispatch]);

  return (
    <div>
      <h1>Added Items in Inventory</h1>
      <ul>
        {addItem.map((item, index) => (
          <li key={index}>
            {item.itemName}: {item.itemQuantity}
          </li>
        ))}
      </ul>
      <h2>Total Added Items: {totalItems}</h2>
    </div>
  );
};

export default Inventory;
