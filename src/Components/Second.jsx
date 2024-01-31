const Second =({data})=>{
    console.log(data)

    // use internal css
    const css = {
        color:"orange",
        backgroundColor:"pink",
        fontSize:"50px" 
    }

    return(
        <>
        <h1 style={css}>second function</h1>
        {/* use external css */}
        <h2 className="One">{data.name}</h2>
        <h3>{data.age}</h3>
        <h3>{data.city}</h3>
        </>
    )
}
export default Second;