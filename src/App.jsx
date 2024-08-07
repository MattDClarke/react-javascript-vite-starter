import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProjectExamples from "./components/ProjectExamples";
import ProjectInfo from "./components/ProjectInfo";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <ProjectInfo />
        <ProjectExamples />
      </main>
      <Footer />
    </>
  );
}

export default App;
