import "./App.css";
import Home from "./Components/Home";
import Listing from "./Components/Listing";
import Navbar from "./Components/Navbar";
import AllRoutes from "./Components/Routes/AllRoutes";

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

