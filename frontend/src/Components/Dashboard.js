import React, { useState } from 'react'

const createNoteUrl = "http://localhost:4000/api/auth/add"

const Dashboard = () => {
    const [note, setNote] = useState({
        title : "",
        description : "",
        tag : ""
    })

    let name, value;
    const changeHandle = (e) => {
        name = e.target.name;
        value = e.target.value;
        setNote({
            ...note,
            [name] : value
        })
        console.log(note);
    }

    const clickHandle = () => {
        fetch(createNoteUrl, {
            method : "POST",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify(note)
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className='container'>

            <form method="post">
                <label htmlFor="title">
                    Title
                    <input type="text" name="title" id="title" onChange={changeHandle}/>
                </label>
                <br />

                <label htmlFor="description">
                    Description
                    <input type="text" name="description" id="description" onChange={changeHandle}/>
                </label>
                <br />

                <label htmlFor="tag">
                    Tag
                    <input type="text" name="tag" id="tag" onChange={changeHandle}/>
                </label>
                <br />

                <button type='button' onClick={clickHandle}>Create Note</button>
            </form>

            <hr />
            <h3>List of All Notes</h3>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Tag</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Tag</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard