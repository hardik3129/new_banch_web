import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './component/Header';

const App = () => {

  // let n = 5
  // let string = 0;

  // for (let i = 1; i <= n; i++) {
  //   for (let k = 1; k <= i; k++) {
  //     string += i
  //   }
  //   string += '\n'
  // }

  // console.log(string);
  
  return (
    <>
      <Routes>
          <Route path='/' element={<><Header /><Home /></>} />
          <Route path='/about' element={<><Header /><About /></>} />
          <Route path='/contact' element={<><Header /><Contact /></>} />
      </Routes>
    </>
  );
}

export default App;
