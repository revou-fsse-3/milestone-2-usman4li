import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import { Home, WeatherApp } from './containers';
import Layout from './Layout/Layout';



function App () {
  const apiKey = '75d5132159c1a539c6a433e52d0094a1';
  return ( 
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/page' element={<WeatherApp apiKey={apiKey}/>}/>
            <Route path='*' element={<h1>404</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
