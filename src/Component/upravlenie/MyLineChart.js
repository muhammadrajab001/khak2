import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import   './MyLineChart.css'

import sadewindow1 from '../img/sade window/Vector.svg';
import sadewindow2 from '../img/sade window/icons,Property 1=vacance, state=Default.svg';
import sadewindow3 from '../img/sade window/icons,Property 1=state, state=Default.svg';
import sadewindow4 from '../img/sade window/icons,Property 1=kandidates, state=Default.svg';
import sadewindow5 from '../img/sade window/icons,Property 1=control, state=Default.svg';
import sadewindow6 from '../img/sade window/icons,Property 1=settings, state=Default.svg';

const rawData = [
  { name: 'Январ', hiredInterns: 10, terminatedInterns: 5 },
  { name: 'Феврал', hiredInterns: 12, terminatedInterns: 3 },
  { name: 'Март', hiredInterns: 15, terminatedInterns: 4 },
  { name: 'Апрел', hiredInterns: 20, terminatedInterns: 2 },
  { name: 'Май', hiredInterns: 18, terminatedInterns: 5 },
  { name: 'Июн', hiredInterns: 22, terminatedInterns: 6 },
  { name: 'Июл', hiredInterns: 25, terminatedInterns: 4 },
];

const SidebarIcon = ({ icon, label, onClick }) => (
  <li className='side__window__icon' onClick={onClick}>
    <img className='sade__window__svg' src={icon} alt={label} />
    <span className='side__window__text'>{label}</span>
  </li>
);

const getLimitedData = (data) => {
  return data.map(item => ({
    ...item,
    hiredInterns: Math.min(Math.max(item.hiredInterns, 0), 30),  
    terminatedInterns: Math.min(Math.max(item.terminatedInterns, 0), 10),  
  }));
};

const MyLineChart = () => {
  const navigate = useNavigate(); 
  const data = getLimitedData(rawData);

  const handleSidebarIconClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <header>
      <h2 className='header__logo'>NFTalent</h2>
    
      </header>
      <main className='main__MyLineChart'>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 30]} />  
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="hiredInterns" 
              stroke="#8884d8" 
              activeDot={{ r: 8 }} 
              name="Принятые стажеры" 
            />
            <Line 
              type="monotone" 
              dataKey="terminatedInterns" 
              stroke="#82ca9d" 
              name="Уволенные стажеры" 
            />
          </LineChart>
        </ResponsiveContainer>
      </main>
      <div className='side__window'>
        <div className='side__window__start'>
          <ul className='side__window__ul'>
            <SidebarIcon icon={sadewindow1} label='Главная' onClick={() => handleSidebarIconClick('/')} />
            <SidebarIcon icon={sadewindow2} label='Вакансии' onClick={() => handleSidebarIconClick('/Vacancy')} />
            <SidebarIcon icon={sadewindow4} label='Кандидаты' onClick={() => handleSidebarIconClick('/Candidat')} />
            <SidebarIcon icon={sadewindow5} label='Управление' onClick={() => handleSidebarIconClick('/upravlenie')} />
            <SidebarIcon icon={sadewindow3} label='Статистика' onClick={() => handleSidebarIconClick('/MyLineChart')} />
            <SidebarIcon icon={sadewindow6} label='Настройки' onClick={() => handleSidebarIconClick('/HRSettings')} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyLineChart;
