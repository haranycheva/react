import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import img from "./img/nya.jpg"

class App extends React.Component {
  text = "blablabla";
  render() {
    return (
      <div className="box">
        <Header title="headerH"/>
        <Image image={img} />
        <input placeholder={this.text} onClick={this.onClick} />
        <p>{5 + "m"}</p>
      </div>
    );
  }
  onClick(){
    console.log(1)
  }
}
export default App