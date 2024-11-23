
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";
import { PostProvider } from "./context/PostContext.jsx";
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById("root")).render(

  <StrictMode>
    
     <BrowserRouter>
    <PostProvider>
   
      <App />
      
    </PostProvider>
    </BrowserRouter>
    
  </StrictMode>

);
