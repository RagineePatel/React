import Key from "./Key";
const Event = ()=>{
    function Click(){

        alert("function called");
    }
    
    return (
        <div>
            <button onClick={Click}>Click me</button>

            {/* Use arrow function */}
            {/* <button onClick= {()=>alert("hello")}>Click me</button> */}


            <Key></Key>
        </div>
    );
};

export default Event;



