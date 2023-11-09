import './App.css'
import { AddTelephone, EditTelephone, TelephoneDetail, TelephoneList  } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
   <div className="constiner">
    <h1>React.js CRUD Operation</h1>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<TelephoneList />}></Route>
      <Route path="/Telephone/create" element={<AddTelephone />}></Route>
      <Route path="/Telephone/edit/:id" element={<EditTelephone />}></Route>
      <Route path="/Telephone/detail/:id" element={<TelephoneDetail />}></Route>
      </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App
