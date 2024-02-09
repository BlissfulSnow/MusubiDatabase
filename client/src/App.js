import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Foods from "./pages/Foods";
import Add from "./pages/Add";
import Update from "./pages/Update";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Foods/>}></Route>
          <Route path="/add" element={<Add/>}></Route>
          <Route path="/update" element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
