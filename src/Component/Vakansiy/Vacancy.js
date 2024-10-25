import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Vacancy.css'; 
import sadewindow1 from '../img/sade window/Vector.svg';
import sadewindow2 from '../img/sade window/icons,Property 1=vacance, state=Default.svg';
import sadewindow3 from '../img/sade window/icons,Property 1=state, state=Default.svg';
import sadewindow4 from '../img/sade window/icons,Property 1=kandidates, state=Default.svg';
import sadewindow5 from '../img/sade window/icons,Property 1=control, state=Default.svg';
import sadewindow6 from '../img/sade window/icons,Property 1=settings, state=Default.svg';
import { IoIosSearch } from "react-icons/io";

// Компонент карточки вакансии
const VacancyCard = ({ title, company, location, salary, description, isOpen, onClick }) => (
  <div className='card__vacancy' onClick={onClick}>
    <h3 className='title__vacancy'>{title}</h3>
    <p className='company__vacancy'>{company}</p>
    <p className='location__vacancy'>{location}</p>
    <p className='salary__vacancy'>{salary}</p>
    {isOpen && <p className='description__vacancy'>{description}</p>}
    <button className='apply__button'>Подать заявку</button>
  </div>
);

// Компонент иконки боковой панели
const SidebarIcon = ({ icon, label, onClick }) => (
  <li className='side__window__icon' onClick={onClick}>
    <img className='sade__window__svg' src={icon} alt={label} />
    <span className='side__window__text'>{label}</span>
  </li>
);

const Vacancy = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [openVacancyIndex, setOpenVacancyIndex] = useState(null); 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const vacancies = [
    { title: "Менеджер по продажам", company: "Компания A", location: "Москва", salary: "60 000 - 80 000 ₽/мес", description: "Опыт работы в продажах от 2 лет." },
    { title: "Маркетолог", company: "Компания B", location: "Санкт-Петербург", salary: "50 000 - 70 000 ₽/мес", description: "Знание digital-маркетинга обязательно." },
    { title: "Разработчик", company: "Компания C", location: "Казань", salary: "80 000 - 120 000 ₽/мес", description: "Опыт в JavaScript и React." },
    { title: "HR-менеджер", company: "Компания D", location: "Екатеринбург", salary: "40 000 - 60 000 ₽/мес", description: "Опыт в подборе персонала." },
  ];

  const filteredVacancies = vacancies.filter(vacancy =>
    vacancy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vacancy.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vacancy.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleVacancyClick = (index) => {
    setOpenVacancyIndex(openVacancyIndex === index ? null : index);
  };

  const handleSidebarIconClick = (path) => {
    navigate(path);
  };

  return (
    <div className='vacancy__container'>
     
      <div className='vacancy__list'>
        <div className='search__vacancy'>
        <h2 className='header__logo'>NFTalent</h2>  
          <form className="search__form" onSubmit={(e) => e.preventDefault()}>
            <div className="search__input__5">
              <form className='form__search__5'> 
                <button className='search__icon__form__5' type='submit'><IoIosSearch /></button>
                <input
                  type="text"
                  className="input__vacancy__5"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  placeholder="Найти вакансию..."
                />
              </form>
            </div>
          </form>
        </div>

        <div className='vacancy__cards'>
          {filteredVacancies.length > 0 ? (
            filteredVacancies.map((vacancy, index) => (
              <VacancyCard
                key={index}
                {...vacancy}
                isOpen={openVacancyIndex === index} 
                onClick={() => handleVacancyClick(index)} 
              />
            ))
          ) : (
            <p className='no__vacancies'>Вакансий не найдено</p>
          )}
        </div>
      </div>

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

export default Vacancy;
