import "./App.css";
import Home from "./components/Home";
import Listing from "./components/Listing";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/Routes/AllRoutes";

function App() {
  return (
    <>
      <div className='bg-img'></div>
      <div className='bg-color'></div>
      <Navbar />
      <AllRoutes/>
    </>
  );
}

export default App;

