import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserInfo from './Component/UserInfo/UserInfo';
import UserinfoKandidat from './Component/UserInfo/UserinfoKandidat';
import Header from './Component/Header/header'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Header />} />
     
      <Route path="/kandidat" element={<UserinfoKandidat />} />
      <Route path="/userinfo" element={<UserInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
