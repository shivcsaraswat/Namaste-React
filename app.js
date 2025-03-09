// Create An Element
const h1 = React.createElement(
            "h1",
             { id : "heading-1"}, 
             "Namaste React.js"                      
)




const parent = React.createElement(
    "div", 
    {id : "parent"},
    [
    React.createElement("h2", {}, "This is the h2 tag"),
    React.createElement("h3", {}, "This is the h3 tag")
   ]
);



// Create Root 
const Root = ReactDOM.createRoot(document.getElementById("root"));

// Render Root 
Root.render(parent);


