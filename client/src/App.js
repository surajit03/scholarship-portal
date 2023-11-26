import React , { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navebar.jsx";
import Schoolarship from './components/Schoolarship.jsx'
import './app.css';
function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };
  return (
    <div className="App">
       <Router>
          <div className='navebar'>
            <Navbar onSearch={handleSearchResults} />
          </div>
            <div className='rout'>
              <Routes>
                <Route path="Schoolarship" element={<Schoolarship scholarships={searchResults.length > 0 ? searchResults : null} />}> </Route>
                <Route index element={<Schoolarship  scholarships={searchResults.length > 0 ? searchResults : null}/>} />
                 {/* <Route path="/Schoolarship/:_id" element={<Schoolarship />} /> */}
              </Routes>
            </div>
        </Router>
    </div>
  );
}

export default App;
