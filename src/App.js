import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import FifthPage from './components/FifthPage';
import FourthPage from './components/FourthPage';
import ThirdPage from './components/ThirdPage';
import FrontPage from './components/FrontPage';
import SecondPage from './components/SecondPage'

function App() {
  return (
    
        <div>
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<FrontPage/>}/>
            <Route path="secondPage" element={<SecondPage/>}/>

          </Routes>
          </BrowserRouter>
          
          {/* <ThirdPage heading={"What time do you go to bed for Sleep?"}/> */}
          {/* <ThirdPage heading={"What time do you get out of bed to start your day?"}/> */}
          {/* <FourthPage/> */}
          {/* <FifthPage/> */}
          <FrontPage/>

        </div>
  );
}

export default App;
