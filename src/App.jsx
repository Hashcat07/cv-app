import { useState } from "react";
import EditArea from "./components/EditArea";
import DisplayArea from "./components/DisplayArea";
import "./styles/App.css"

export default function App() {
   const [generalData,setGeneralData]=useState({
          name:'',
          email:'',
          phone:''
      })
   const [experienceData, setExperienceData] = useState({
       companyName: "",
       positionTitle: "",
       responsibilities: "",
       dateFrom: "",
       dateUntil: ""
     }); 
    const [educationData, setEducationData] = useState({
        qualification: "",
        schoolName: "",
        fieldOfStudy: "",
        location: "",
        endDate: "",
      });
  return (
    <div className="root-container">
      <h1 className="app-title">CV Builder</h1>
        <EditArea onChange={{education:setEducationData,general:setGeneralData,experience:setExperienceData}}/>
        <DisplayArea data={{education:educationData,general:generalData,experience:experienceData}}/>
    </div>
  );
}