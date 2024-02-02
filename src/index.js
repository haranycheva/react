import React from "react";
import ReactDOMClient from "react-dom";
import App from "./App";
import "./css/style.css"

const app = ReactDOMClient.createRoot(document.querySelector("#root"));
app.render(<App />);
// ReactDOM.render(
//   <div className="box">
//     <input placeholder={text} onClick={() => console.log(1)} />
//     <p>{5 + "m"}</p>
//   </div>,
//   document.querySelector("#root")
// );

// ReactDOM.render(React.createElement("input", {
//     placeholder: "blablabla",
//     onClick: () => console.log(1),
// }), document.querySelector("#wrapper"))
