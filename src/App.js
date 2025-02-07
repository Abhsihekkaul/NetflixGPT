import React from "react";
import ReactDOM from "react-dom/client"

const AppRoute = () => {
    return(
        <>

            <h1 className="text-3xl text-green-500">Hello world!</h1>
        
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppRoute />)