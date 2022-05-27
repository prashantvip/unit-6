
import {RegistrationForm} from './components/Register'
import { Sidebar } from './components/Sidebar'
import {HomePage} from './components/HomePage'
import {Route,Routes} from 'react-router-dom'
function App() {
 

  return (
    
   <div>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/register' element={<RegistrationForm/>}></Route>
     
    </Routes>
   
    </div>
  )
}

export default App
