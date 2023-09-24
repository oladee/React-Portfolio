import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}/>
      </Routes>
      <Footer/>
    </div>
  );

}

export default App;
