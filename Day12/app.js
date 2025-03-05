import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

const Greeting = ({ name }) => {
    return (
        <div className="greeting-card">
            <h1>{name}</h1>
            <h3>The name is printed above!</h3>
        </div>
    );
};

const Button = ({children}) => {
    return <button>{children}</button>
}

const App = () => {
    return (
        <div className="app-container">
            <h1 style={{ fontSize: "36px", color: "#333" }}>Hello</h1>
            <Greeting name="myName" />
            <Greeting name="yourName" />
            <Greeting name="hisName" />
            <Greeting name="anotherName" />
            <Button>Butt</Button>
        </div>
    );
};

const domroot = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(domroot);
reactRoot.render(<App />);
