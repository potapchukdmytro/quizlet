import React from "react";
import "./App.css";

const headerStyles: React.CSSProperties = {
    height: "64px",
    left: "0px",
    right: "0px",
    position: "fixed",
};

function App() {
    return (
        <div>
            <header style={headerStyles}></header>
        </div>
    );
}

export default App;
