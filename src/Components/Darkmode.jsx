
function Darkmode(){
    const darkmodeenable = ()=>{
        var root = document.getElementById("test")
        root.style.backgroundColor ="blue"
    }
    const darkmodedisable = ()=>{
        var root = document.getElementById("test")
        root.style.backgroundColor ="white"
    }
    return(
        <>
        <h1>hiii</h1>
        <button onClick={()=>darkmodeenable()}>Set dark mode</button>
        <button onClick={()=>darkmodedisable()}>Remove dark mode</button>
        
        </>
    )
}
export default Darkmode;