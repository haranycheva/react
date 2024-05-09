import { Item } from "Item/Item";
import { List } from "Mult.styled";
import { useState } from "react";
import { data } from "data";

export function Mult() {
  const [shownEl, setShownEl] = useState(null);
  const [mult, setMult] = useState([])
  const[ enableMult, setEnableMult] = useState(false)
  function handleMult() {
    setEnableMult(state => !state)
  }
  function handleSingleClick(id) {
    setShownEl(shownEl === id ? null : id);
  }
  function handleMultClick(id){
    const isActive = mult.includes(id)
    if(!isActive){
      setMult(state => [...state, id])
      return;
    }
    const filterMult = mult.filter((el) => el !== id)
    setMult(filterMult)
  }
  return (
    <>
      <button onClick={handleMult}>Mult</button>
      <List>
        {data.map((el) => (
          <Item
            card={el}
            isShown={enableMult ? mult.includes(el.id) : shownEl === el.id }
            handleClick={() => enableMult ? handleMultClick(el.id) :  handleSingleClick(el.id)}
            key={el.id}
          ></Item>
        ))}
      </List>
    </>
  );
}
