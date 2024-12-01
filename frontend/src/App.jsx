import {Route, Routes} from 'react-router-dom'
import {Home, Doctors, About, Contact, Login, MyAppointment, Appointment,MyProfile} from './pages/'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/doctors' element={<Doctors/>}></Route>
        <Route path='/doctors/:speciality' element={<Doctors/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/my_profile' element={<MyProfile/>}></Route>
        <Route path='/my_appiontment' element={<MyAppointment/>}></Route>
        <Route path='/appiontment/:docID' element={<Appointment/>}></Route>
      </Routes>
    </div>
  )
}

export default App