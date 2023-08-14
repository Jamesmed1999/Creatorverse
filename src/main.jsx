import { createRoot  } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import { Navbar } from "./Components/Navbar";
import {AddCreator} from "./pages/AddCreator";
import { ShowCreator } from "./pages/ShowCreator";
import { ViewCreator } from "./pages/ViewCreator";
import '@picocss/pico'


const rootElement = document.getElementById("root");
const root = createRoot(rootElement)
root.render(
  
  <BrowserRouter>
  
  <Navbar />
  
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="add" element={<AddCreator />} />
      <Route path="show" element={<ShowCreator />} />
      <Route path="view/:viewId" element={<ViewCreator />}/>
     
      
      
      
    
    </Routes>
  </BrowserRouter>
);