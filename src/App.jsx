import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar, Footer} from "./components";
import { Home, About, Connect, Projects, Skills } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-black bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Connect" element={<Connect />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
          {/* <Hero /> */}
        {/* </div> */}
        {/* <About /> */}
        {/* <Clients /> */}
        {/* <Experience /> */}
        {/* <Works /> */}
        {/* <Tech /> */}
        {/* <Feedbacks /> */}
        {/* <div className='relative z-0'> */}
          {/* <Contact /> */}
          {/* <StarsCanvas /> */}
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
