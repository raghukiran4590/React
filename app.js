import React from "react";
import ReactDOM from "react-dom/client";


//React.createElement => creates an Object  => HTMLElement(render)
//Emoji shortcut CTRL+CMD+SPACE

//syntax using React Core
/* const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React 🚀"
); */

/* console.log(heading);

root.render(heading); */

// Using JSX
// JSX code is transpiled before it reaches the JS engine - means it converts the ES6 compliant code to browser compliant standards
// JSX => React.createElement => JavaScript Object => HTMLElement(render)
/* const jsxHeading = <h1 id="jsxHeading">Namaste React using JSX 🚀</h1>;
const jsxHeading2 = (<h2 id="jsxHeading2">
    Heading2
</h2>); */

// console.log(jsxHeading);

//React Functional Component
const Title = () => (
    <div>
        <h1>Title Heading in React</h1>
        <p>Title Para</p>
        <h2 id = "heading2">Title Heading 2</h2>
        {"Hello World"}
        <br></br>
        {100+200}
        {console.log("Logging")}
    </div>
    
);

const Func = () => (
    <div>
        <h1>Func Heading</h1>
        {console.log("func testing")}
    </div>
);

const HeadingComponent = () => (
    <div id="container">
    {<Title/>}
    {<Func/>}
    <h1 className="heading">Namaste React using Functional Component 🚀</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);


// If the const is declared with () => {}, it will not render any html code. We can't JSX code if function is within the curly {} braces
// If the const is declared with () => (), it will render it as JSX code. We can enclose the JS code within curly {} braces.