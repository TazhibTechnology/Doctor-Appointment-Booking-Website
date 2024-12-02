import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import MyProfile from './pages/MyProfile';
import Navbar from './components/navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/doctors' element={<Doctors/>}></Route>
        <Route path='/doctors/:speciality' element={<Doctors/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/my_profile' element={<MyProfile/>}></Route>
        <Route path='/my_appointments' element={<MyAppointments/>}></Route>
        <Route path='/appointment/:docID' element={<Appointment/>}></Route>
      </Routes>
    </div>
  )
}

export default App