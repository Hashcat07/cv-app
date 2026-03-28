

export default function General({data,onChange}){

    function handleChange(e){
        onChange({
        ...data,
        [e.target.name]: e.target.value
    })
    }

    function handleSubmit(e){
         e.preventDefault();

    if(!e.target.checkValidity()){
        e.target.reportValidity();
        return;
    }
    }

    return (
        <div className="generalInfo container">
            <form onSubmit={handleSubmit} className="general-form">
            <label htmlFor="name">Name: <input type="text" name="name" value={data.name} id="name" onChange={handleChange}/></label>
            <label htmlFor="email">Email: <input type="email" name="email" id="email" value={data.email} onChange={handleChange}/></label>
            <label htmlFor="phone">Phone: <input type="tel" name="phone" id="phone" value={data.phone} onChange={handleChange} pattern="[0-9]{10}"/></label>
            </form>            
        </div>
    )
}