import Home from "./pages/homepage";
import Search from "./pages/searchpage";
import Notfound from "./pages/notfound";
import {BrowserRouter, Routes, Route} from "react-router";
const App = () => {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
    )
};

export default App