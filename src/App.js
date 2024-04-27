import { Item } from "Item/Item";
import "./index.css";
import { List } from "App.styled";
import { useState } from "react";
import { data } from "data";

export function App() {
  const [shownEl, setShownEl] = useState(null);
  function handleClick(e) {
    if(shownEl === e.currentTarget.dataset.id){
      setShownEl(null);
      return
    }
    setShownEl(e.currentTarget.dataset.id);
  }
  return (
    <List>
      {data.map((el) => (
        <Item
          isShown={shownEl === el.id}
          onClick={handleClick}
          id={el.id}
          key={el.id}
          title={el.title}
          text={el.text}
        ></Item>
      ))}
    </List>
  );
}
