import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Detalle from './Views/Detalle'
import Home from './Views/Home'

  function App() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <switch>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/character/:id' element={<Detalle/>}/>
        </Routes>
        </switch>
      </BrowserRouter>

    )
  }
export default App 