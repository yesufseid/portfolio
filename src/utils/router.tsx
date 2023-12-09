import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/Home";



const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />}/>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route >
    )
  );
  
  export default router