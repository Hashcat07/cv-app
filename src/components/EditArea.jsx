import Education from "./Education"
import Experience from "./Experience"
import General from "./General"

export default function EditArea({data,onChange}){
    return(
        <div className="editArea container">
            <General onChange={onChange.general} data={data.general}/>
            <Education onChange={onChange.education} data={data.education}/>
            <Experience onChange={onChange.experience} data={data.experience}/>
        </div>
    )
}