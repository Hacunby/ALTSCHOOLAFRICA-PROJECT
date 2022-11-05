import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./Components/CustomHook/useCounter";
import Reducer from "./Components/Reducer/useReducer";
import Error from "./Components/Error";
import Errorboundary from "./Components/Errorboundary";

function App() {
  return (
    <div className="App">
      <Errorboundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter initialCount={0} />} />
          <Route path="/Reducer" element={<Reducer initialCount={0} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      </Errorboundary>
      
    </div>
  );
}

export default App;
