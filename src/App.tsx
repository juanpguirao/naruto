import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Detalle from './Views/Detalle'
import Home from './Views/Home'

  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detalle' element={<Detalle/>}/>
          <Route path='/character/:id' element={<Detalle/>}/>
        </Routes>
      </BrowserRouter>

    )
  }
export default App 