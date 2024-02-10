import React, { useState, useEffect } from 'react';
import Data from './Data-api';

function Apidataget(){
    const [url, setUrl]=useState()
     const [data, setData]=useState()

    useEffect(()=>{

        fetch(url)
            .then(response => response.json())
            .then(json => setData(json))


    },[url])

    return(
        <>
        <button onClick={()=>setUrl('https://jsonplaceholder.typicode.com/users')}>Show users</button>
        <button onClick={()=>setUrl('https://jsonplaceholder.typicode.com/posts')}>Show posts</button>
        
     {data && <Data data={data}/>}
       </>
    );
}

export default Apidataget;
