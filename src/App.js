import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserInfo from './Component/UserInfo/UserInfo';
import UserinfoKandidat from './Component/UserInfo/UserinfoKandidat';
import Header from './Component/Header/header'
import Usereducation from './Component/UserInfo/usereducation';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/header" element={<Header />} />
      <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/kandidat" element={<UserinfoKandidat />} />
        <Route path="/Usereducation" element={<Usereducation />} />
   
      </Routes>
    </Router>
  );
}

export default App;
