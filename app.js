import React from "react";
import ReactDOM from "react-dom/client";


//React.createElement => creates an Object  => HTMLElement(render)
//Emoji shortcut CTRL+CMD+SPACE

//syntax using React Core
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React 🚀"
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// Using JSX
// JSX code is transpiled before it reaches the JS engine - means it converts the ES6 compliant code to browser compliant standards
// JSX => React.createElement => JavaScript Object => HTMLElement(render)
const jsxHeading = <h1 id="jsxHeading">Namaste React using JSX 🚀</h1>;
const jsxHeading2 = (<h2 id="jsxHeading2">
    Heading2
</h2>);

console.log(jsxHeading);

root.render(jsxHeading);