import { ItemText, Li } from "./Item.styled";

export function Item({ card, handleClick, id, isShown }) {
  return (
    <Li data-id={id} onClick={handleClick} isShown={isShown}>
      <p>{card.title}</p>
      {isShown && <ItemText>{card.text}</ItemText>}
    </Li>

)
}
