import React from 'react';

function Toggle() {
    const ToggleDarkMode = () => {
        var root = document.getElementById("test");
        var currentBackgroundColor = root.style.backgroundColor;


        // by using ternary operator
        // root.style.backgroundColor = root.style.backgroundColor === "blue" ? "white" : "blue";

        // Check if it's dark mode, change to light mode
        if (currentBackgroundColor === "black") {
            root.style.backgroundColor = "white";
        }
        else {
            // It's light mode, change to dark mode
            root.style.backgroundColor = "black";
        }
    };

    return (
        <>
            <h1>Toggle dark mode</h1>
            <button onClick={ToggleDarkMode}>Toggle Dark Mode</button>
        </>
    );
}

export default Toggle;



