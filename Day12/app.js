import React from "react";
import ReactDOM from "react-dom/client";


const Greeting = (props) => {
    return (
        <>
            <h1>{props.name}</h1>
            <h3>The name is printed above!</h3>
            
        </>
    );
  };

const App = () => {
//   return React.createElement("div", {}, "Hello World");

    return(
        <div>
            <h1>Hello</h1>
            <Greeting name="myName"/>
            <Greeting name="yourName"/>
            <Greeting name="hisName"/>
            {Greeting({name:"anotherName"})}
        </div>
    )

};
const domroot = document.getElementById("root");
const reactRoot=ReactDOM.createRoot(domroot);
reactRoot.render(<App />);