const heading = React.createElement("h1",
    {
        id: "heading"
    },
    "Hello world from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

const parent = [React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" },
        [
            React.createElement("h1", { id: "heading1" }, "This is an H1 Tag"),
            React.createElement("h2", { id: "heading2" }, "This is an H2 Tag")
        ])),
React.createElement("div2", { id: "parent2" }, React.createElement("div2", { id: "child2" },
    [
        React.createElement("h1", { id: "heading1" }, "This is an H1 Tag"),
        React.createElement("h2", { id: "heading2" }, "This is an H2 Tag")
    ]))];
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent);



