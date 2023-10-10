import "./App.css";
import { useState } from "react";

const Products = [
  { title: "Cabbage", id: 1, isFruit: false },
  { title: "Garlic", id: 2, isFruit: false },
  { title: "Potato", id: 3, isFruit: false },
  { title: "Apple", id: 4, isFruit: true },
];

const [count, setCount] = useState[0];

function handleClick() {
  alert("You clicked me!");
  setCount(count + 1);
}

function App() {
  const listItems = Products.map((Products) => (
    <li
      key={Products.id}
      style={{
        color: Products.isFruit ? "magenta" : "darkgreen",
        textAlign: "left",
      }}
    >
      {Products.title}
    </li>
  ));

  return (
    <div className="App">
      <h1>Welcome to new React tutorial</h1>
      <ul>{listItems}</ul>
      <button onClick={handleClick} type="submit">
        Clicked {count} times
      </button>
    </div>
  );
}

export default App;
