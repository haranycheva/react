import { Item } from "Item";
import "./List.css";
import { data } from "data";

export function List() {
  return <ul className="list">{createItems(data)}</ul>;
}

function createItems(data) {
  return data.map((e) => (
    <Item key={e.id} image={e.image} title={e.title} text={e.text} />
  ));
}
