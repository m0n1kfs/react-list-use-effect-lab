import { Routes, Route } from "react-router-dom";
import Navbar from './components/ui/navbar/navbar.jsx';
import Home from './components/ui/home/home.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;