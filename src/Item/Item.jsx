import { ItemText, Li } from "./Item.styled";

export function Item({ title, text, onClick, id, isShown }) {
const isShownClass = isShown ? "shown" : "";
  return (
//     isShown ? (
//     <ShownLi data-id={id} onClick={onClick}>
//       <p>{title}</p>
//       <ItemText>{text}</ItemText>
//     </ShownLi>
//   ) : (
    <Li data-id={id} onClick={onClick} className={isShownClass} isShown={isShown}>
      <p>{title}</p>
      <ItemText>{text}</ItemText>
    </Li>
//   );
)
}
