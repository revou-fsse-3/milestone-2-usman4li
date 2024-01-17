import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import { Navigasi } from './components';
import { Home, WeatherApp } from './containers';
// import WeatherContainer from './containers/weatherContainer';



function App () {
  const apiKey = '75d5132159c1a539c6a433e52d0094a1';
  return ( 
    <div className='app'>
      <Navigasi/>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigasi/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/page' element={<WeatherApp apiKey={apiKey}/>}/>
            <Route path='*' element={<h1>404</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
