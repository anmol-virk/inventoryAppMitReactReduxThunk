import "./styles.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Inventory from "./pages/inventory";
import RemovedItems from "./pages/removedItems";
import Remaining from "./pages/remaining";
import InventoryForm from "./pages/inventoryForm";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/addItem">Inventory</Link>
              </li>
              <li>
                <Link to="/removedItem">Removed Items</Link>
              </li>
              <li>
                <Link to="/remaining">Remaining Items</Link>
              </li>
              <li>
                <Link to="/">Add New Items</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/addItem" element={<Inventory />} />
            <Route path="/removedItem" element={<RemovedItems />} />
            <Route path="/remaining" element={<Remaining />} />
            <Route path="/" element={<InventoryForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}
