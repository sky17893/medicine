import MyPage from "./components/MyPage";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">      
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/completed" element={<Completed />} />
          <Route path="/proceeding" element={<Proceeding />} /> */}
          <Route path="/Mypage" element={<MyPage />} />
        </Routes>            
    </div>
  );
}

export default App;
