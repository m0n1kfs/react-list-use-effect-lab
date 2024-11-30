import { Routes, Route } from "react-router-dom";
import Navbar from './components/ui/navbar/navbar.jsx';
import Home from './components/ui/home/home.jsx';
import PageLayout from "./components/ui/layouts/PageLayout.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PageLayout><Home /></PageLayout>} />
      </Routes>
    </>
  );
}

export default App;