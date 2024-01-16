
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WeatherContainer from './Containers/WeatherContainer';
import Layout from './Layout/Layout';



function App () {
  const apiKey = '75d5132159c1a539c6a433e52d0094a1';
  return (
     
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}/>
            <Route path='/' element={<WeatherContainer apiKey={apiKey}/>}/>
            <Route path='*' element={<h1>404</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
