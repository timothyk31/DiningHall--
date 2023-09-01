import { Navbar } from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import { Breakfast } from './pages/breakfast';
import { Dinner } from './pages/dinner';
import { Lunch } from './pages/lunch';
import { Auth } from "./pages/auth"
import { ReviewPage } from './pages/review.js';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes className="routes">
            <Route path="/" element={<Breakfast/>} />
            <Route path="/lunch" element={<Lunch/>} />
            <Route path="/dinner" element={<Dinner/>} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/reviews/:id" element={<ReviewPage/>} />
          </Routes>
      </Router>

    </div>
  );
}

export default App;
