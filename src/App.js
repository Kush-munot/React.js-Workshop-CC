import Navbar from "./Components/Navbar";
import FrontPage from "./Components/Frontpage";
import "./styles.css";
import SkillSet from "./Components/Skillset";
import ColorsTimeline from "./Components/Education";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div className="App">
      <Navbar position="sticky" />
      <FrontPage />
      <SkillSet />
      <ColorsTimeline />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
