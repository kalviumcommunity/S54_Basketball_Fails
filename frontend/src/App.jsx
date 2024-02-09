import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/Routes/AllRoutes";

function App() {
  return (
    <div className="container">
      <div className='bg-img'></div>
      <div className='bg-color'></div>
      <Navbar />
      <AllRoutes/>
    </div>
  );
}

export default App;

