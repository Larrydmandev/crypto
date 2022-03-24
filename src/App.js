import {BrowserRouter,Route, Routes, Link} from 'react-router-dom'
import Binance from './Components/File/Binance';
import Bitcoin from './Components/File/Bitcoin';
import Ethereum from './Components/File/Ethereum';
import Tether from './Components/File/Tether';
import UsdCoin from './Components/File/UsdCoin';
import Xrp from './Components/File/Xrp';
import Homepage from './Components/Homepage';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/Bitcoin' element={<Bitcoin/>} />
      <Route path='/Ethereum' element={<Ethereum/>}/>
      <Route path='/Tether' element={<Tether/>}/>
      <Route path='/Binance' element={<Binance/>}/>
      <Route path='/UsdCoin' element={<UsdCoin/>}/>
      <Route path='/Xrp' element={<Xrp/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
