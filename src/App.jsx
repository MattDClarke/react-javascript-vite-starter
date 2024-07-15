import "./App.css";
import Counter from "./Counter";
import Footer from "./Footer";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Counter />
      </main>
      <Footer />
    </>
  );
}

export default App;
