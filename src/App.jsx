import "./App.css";
import Navbar from "./components/Navbar";
import Grid_Final from "./components/Grid_Final";
import Title from "./components/Title";
import Goto from "./components/Goto";
import Grid_Final_w from "./components/Grid_Final_w";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Men from "./components/Men";
import Women from "./components/Women";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/men",
      element: <Men />,
    },
    {
      path: "/women",
      element: <Women />,
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
      <Footer />
    </>
  );
}

export default App;
