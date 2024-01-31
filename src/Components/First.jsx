import Second from "./Second";

const First = ()=>{
   const a = 10;
   const name = "Rahul";

   const add = (b,c)=>{
   console.log("add function",b,c)
   }

   const data = {name:"Raginee", age: "21",city:"Rewa"}
    return(
        <>
        {a}{name}
        {/* use inline css */}
         <h1 style={{color: "blue"}}>first function</h1>

         

         {/* use onclick event handler  */}
         <button onClick={()=>add(10,20)}>Show result</button>
        
        <Second data = {data}/>
        </>
       
    )
}
export default First;
