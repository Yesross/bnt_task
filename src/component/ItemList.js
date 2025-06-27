import { useState } from "react";

function ItemList() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

  const handleDelete = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item}{" "}
            <button onClick={() => handleDelete(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;