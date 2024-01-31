const Sum = ()=>{
    let sum = 0;
    const Add = (a)=>{
        for(let i=0; i<a.length; i++){
            sum = sum+a[i];
        }
        alert("Addition is " +sum);
    }
    return (
        <div>
            <button onClick={()=>Add([2,3,4,5,6,7])}>show result</button>
        </div>
    )

}
export default Sum;