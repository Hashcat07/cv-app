import { useState } from "react";

export default function General(){
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        phone:''
    })
    const [isEditing,setIsEditing]=useState(true);

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        setIsEditing(false);
    }

    return (
        <div>
            {isEditing &&
            <form>
            <label htmlFor="name">Name: <input type="text" name="name" value={formData.name} id="name" onChange={handleChange}/></label>
            <label htmlFor="email">Email: <input type="email" name="email" id="email" value={formData.email} onChange={handleChange}/></label>
            <label htmlFor="phone">Phone: <input type="phone" name="phone" id="phone" value={formData.phone} onChange={handleChange}/></label>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            }
            {!isEditing && <>
            <h2>General Information</h2>
            <p><span>Name: </span>{formData.name}</p>
            <p><span>Email: </span>{formData.email}</p>
            <p><span>Phone: </span>{formData.phone}</p>
            <button onClick={()=>setIsEditing(true)}>Edit</button>
            </>}
        </div>
    )
}