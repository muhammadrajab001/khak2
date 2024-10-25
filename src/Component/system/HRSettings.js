import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HRSettings.css';
import sadewindow1 from '../img/sade window/Vector.svg';
import sadewindow2 from '../img/sade window/icons,Property 1=vacance, state=Default.svg';
import sadewindow3 from '../img/sade window/icons,Property 1=state, state=Default.svg';
import sadewindow4 from '../img/sade window/icons,Property 1=kandidates, state=Default.svg';
import sadewindow5 from '../img/sade window/icons,Property 1=control, state=Default.svg';
import sadewindow6 from '../img/sade window/icons,Property 1=settings, state=Default.svg';

const HRSettings = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({ name: '', position: '', email: '' });
  const [notifications, setNotifications] = useState({
    newCandidate: true,
    applicationUpdates: false,
  });
  const [templates, setTemplates] = useState({
    vacancyTemplate: '',
    responseTemplate: '',
  });

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleNotificationsChange = (e) => {
    const { name, checked } = e.target;
    setNotifications((prevNotifications) => ({ ...prevNotifications, [name]: checked }));
  };

  const handleTemplateChange = (e) => {
    const { name, value } = e.target;
    setTemplates((prevTemplates) => ({ ...prevTemplates, [name]: value }));
  };

  const handleSidebarIconClick = (path) => {
    navigate(path);
  };

  const SidebarIcon = ({ icon, label, onClick }) => (
    <li onClick={onClick} className="side__window__icon">
      <img src={icon} alt={label} />
      <span>{label}</span>
    </li>
  );

  return (
    <div className='settings__container'>
      <h2 className='header__logo'>Настройки NFTalent</h2>

      {/* Профиль пользователя */}
      <section className='settings__section'>
        <h3>Профиль пользователя</h3>
        <input
          type='text'
          name='name'
          value={profile.name}
          onChange={handleProfileChange}
          placeholder='Имя'
        />
        <input
          type='text'
          name='position'
          value={profile.position}
          onChange={handleProfileChange}
          placeholder='Должность'
        />
        <input
          type='email'
          name='email'
          value={profile.email}
          onChange={handleProfileChange}
          placeholder='Электронная почта'
        />
      </section>

      {/* Уведомления */}
      <section className='settings__section'>
        <h3>Уведомления</h3>
        <label>
          <input
            type='checkbox'
            name='newCandidate'
            checked={notifications.newCandidate}
            onChange={handleNotificationsChange}
          />
          Уведомления о новых кандидатах
        </label>
        <label>
          <input
            type='checkbox'
            name='applicationUpdates'
            checked={notifications.applicationUpdates}
            onChange={handleNotificationsChange}
          />
          Обновления заявок
        </label>
      </section>

      {/* Шаблоны */}
      <section className='settings__section'>
        <h3>Шаблоны</h3>
        <textarea
          name='vacancyTemplate'
          value={templates.vacancyTemplate}
          onChange={handleTemplateChange}
          placeholder='Шаблон вакансии'
        />
        <textarea
          name='responseTemplate'
          value={templates.responseTemplate}
          onChange={handleTemplateChange}
          placeholder='Шаблон ответа кандидату'
        />
      </section>

      {/* Боковое меню */}
      <div className='side__window'>
        <div className='side__window__start___HR'>
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

export default HRSettings;
