import Experience from "./components/Experience";
import Education from "./components/Education";
import General from "./components/General";
import "./styles/App.css"

export default function App() {
  return (
    <div>
      <h1>CV Builder</h1>
      <General />
      <Education />
      <Experience />
    </div>
  );
}