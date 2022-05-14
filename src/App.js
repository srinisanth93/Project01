import {
	BrowserRouter,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Navbar from './navbar/Navbar';
import About from './about/About';
function App() {
  return ( 
    <div>
    <Navbar></Navbar>
      <BrowserRouter>
      {/* <Link to="/about">About</Link> */}
      <br></br>
      {/* <Link to="/nav">Navbar</Link> */}
      <Routes>
          <Route index element={<About/>} />
          {/* <Route path="/" element={<App />} /> */}
          {/* <Route path={"/about"} element={<About />}></Route> */}
          {/* <Route path={"/nav"} element={<Navbar />}></Route>  */}
      </Routes>
      </BrowserRouter>
    
  </div>
  );
}

export default App;
