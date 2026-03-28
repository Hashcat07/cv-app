import Education from "./Education"
import Experience from "./Experience"
import General from "./General"

export default function EditArea({data,onChange}){
    function handleReset(){
        onChange.general({
          name:'',
          email:'',
          phone:''
      })
        onChange.experience({
       companyName: "",
       positionTitle: "",
       responsibilities: "",
       dateFrom: "",
       dateUntil: ""
     })
       onChange.education({
        qualification: "",
        schoolName: "",
        fieldOfStudy: "",
        location: "",
        endDate: "",
      })
        
    }
    return(
        <div className="editArea container">
            <General onChange={onChange.general} data={data.general}/>
            <Education onChange={onChange.education} data={data.education}/>
            <Experience onChange={onChange.experience} data={data.experience}/>
             <div className="actions">
            <button className="reset" onClick={handleReset}>Reset</button>
        </div>
        </div>
    )
}