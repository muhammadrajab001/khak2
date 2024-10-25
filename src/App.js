import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserInfo from './Component/UserInfo/UserInfo';
import UserinfoKandidat from './Component/UserInfo/UserinfoKandidat';
import Header from './Component/Header/header'
import Usereducation from './Component/UserInfo/usereducation';
import MyLineChart from './Component/upravlenie/MyLineChart';
import Candidat from './Component/Vakansiy/candidat';
import Vacancy from './Component/Vakansiy/Vacancy';
import HRSettings from './Component/system/HRSettings';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/header" element={<Header />} />
      <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/kandidat" element={<UserinfoKandidat />} />
        <Route path="/Usereducation" element={<Usereducation />} />
        <Route path="/MyLineChart" element={<MyLineChart />} />
        <Route path="/Candidat" element={<Candidat/>} />
       <Route path='/Vacancy' element={<Vacancy/>}/>
       <Route path='/HRSettings' element={<HRSettings />} />

      </Routes>
    </Router>
  );
}

export default App;
