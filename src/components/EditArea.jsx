import Education from "./Education"
import Experience from "./Experience"
import General from "./General"

export default function EditArea(){
    return(
        <div className="editArea">
            <General/>
            <Education/>
            <Experience/>
        </div>
    )
}