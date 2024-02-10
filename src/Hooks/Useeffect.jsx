import React, { useState, useEffect } from 'react';


function Effect() {
    const [name, setName] = useState("sam")
    const [count, setCount] = useState(1)
    const [data, setData] = useState()
    const [post, setPost] = useState()


    // ----GETTING DATA IN PAGE LOADING

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(json => setData(json))

    // }, [count]);


    // ------GETTING DATA BY PARTICULAR ACTION----ONCLICK BUTTON

    const getusers = ()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))


    }

    const getposts = ()=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPost(json))


    }

       return (
        <>
        {console.log(post && post)}
        <h1>Number is ==={count}</h1>
        <h2>name is {name}</h2>

        <button onClick={()=>getusers()}>get users data</button>
        <button onClick={()=>getposts()}>get posts data</button>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Website</th>
                    </tr>
                </thead>
                <tbody>
                 {data && data.map((user,index)=>
                

                   ( <tr key={index}>

                        <th>{index+1}</th>
                        <td>{user.email}</td>
                        <td>{user.name}</td>
                        <td>{user.phone}</td>
                        <td>{user.username}</td>
                        <td>{user.website}</td>

                    </tr>
                   )
                 )}
                </tbody>


            </table>

           
        </>
    )
}
export default Effect;


