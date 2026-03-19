import Experience from "./components/Experience";
import Education from "./components/Education";
import General from "./components/General";

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