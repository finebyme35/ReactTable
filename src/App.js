

import { Link, Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";

import Table from "./components/Table";



function App() {
  return (
    <div className="container">
      <h1><Link to='/'>Ana Sayfa</Link></h1>
      <Routes>
        <Route path="/" element={<Table />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
                
      </Routes>
    </div>
  );
}

export default App;
