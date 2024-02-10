import "./Item.css";

export function Item({ image, title, text }) {
  return (
    <li className="item">
      <img src={image} alt="noImage" />
      <h3 className="title">{title}</h3>
      <p className="text">{text}</p>
    </li>
  );
}
