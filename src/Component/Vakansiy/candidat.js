import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import imgheader1 from '../img/Group-4.svg';
import imgheader4 from '../img/Group 2.svg';
import imgheader3 from '../img/Group-3.svg';
import imgheader2 from '../img/Group 1.svg';
import './candidat.css';
import sadewindow1 from '../img/sade window/Vector.svg';
import sadewindow2 from '../img/sade window/icons,Property 1=vacance, state=Default.svg';
import sadewindow3 from '../img/sade window/icons,Property 1=state, state=Default.svg';
import sadewindow4 from '../img/sade window/icons,Property 1=kandidates, state=Default.svg';
import sadewindow5 from '../img/sade window/icons,Property 1=control, state=Default.svg';
import sadewindow6 from '../img/sade window/icons,Property 1=settings, state=Default.svg';
import imgicons from '../img/icons__kartojki/icons,Property 1=Heart, state=Default.svg';
import { IoIosSearch } from "react-icons/io";
import imgiconssupergeroy from '../img/icons__kartojki/супергерой Бетмен, фото для резюме.svg';
import imgiconstotal from '../img/icons__kartojki/Vector.svg';
import imgiconsproperty from '../img/icons__kartojki/icons,Property 1=up, state=Default.svg';
import img1 from '../img/candidats/meneger.svg'
import img2 from'../img/candidats/image (1).svg'
import  img3 from '../img/candidats/image (2).svg'
import  img4 from '../img/candidats/image (3).svg'
import  img5 from '../img/candidats/image (4).svg'
import  img6 from '../img/candidats/image (5).svg'
import  img7 from '../img/candidats/image.svg'
import img8 from '../img/candidats/аватарка неопознанного пользователя свг.svg'
import img9 from '../img/candidats/супергерой Бетмен, фото для резюме (1).svg'
import img10 from '../img/candidats/супергерой Бетмен, фото для резюме.svg'
import Parameters from './Parameters';


const SidebarIcon = ({ icon, label, onClick }) => (
  <li className='side__window__icon' onClick={onClick}>
    <img className='sade__window__svg' src={icon} alt={label} />
    <span className='side__window__text'>{label}</span>
  </li>
);



const CandidateCard = ({ name, role, top, percentage, date, salary, imgSrc }) => (
  <div className='card__candidate__1'>
    <button className='button__card__candidate__4'>Подтвержден   </button>
   
    <img className='img2__card__candidate__4' src={imgSrc} alt={`${name} icon`} />
    <img src={imgicons} className='icon__hearth'/>
    <p className='text1__card__candidate__4'>{name} <i className='text2__card__candidate'>{role}</i></p>
    <p className='text2__card__candidate__4'>{salary}</p>
    <ul className='ul__card__candidate__4'>
      <li className='li1__card__candidate__4'><span><img src={imgiconstotal}/></span> {top}</li>
      <li className='li2__card__candidate__4'><span> <img className='img__candidate__4' src={imgiconsproperty}/> <imgiconstotal/></span> {percentage}</li>
      <i className='i__card__candidate'>{date}</i>
    </ul>
  </div>
  
);

const Candidat = () => {
  const navigate = useNavigate(); 

  const handleSidebarIconClick = (path) => {
    navigate(path); 
  };

  const [selectedValue, setSelectedValue] = useState("Job__seekers");
  const [sortByDate, setSortByDate] = useState("updated"); 
  const [timeFrame, setTimeFrame] = useState("all_time"); 

const [search, setSearchTerm] = useState("");
const handleSearchChange = (event) => {
  setSearchTerm(event.target.value); 
};
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const candidates = [
    { name: "Менеджер", role: "Опыт: 10 лет", salary: "30 000-50 000 ₽/мес", top: "Топ 50", percentage: "92%", imgSrc: img1 },
    { name: "Ассистент руководителя", role: "Опыт: 5 лет", salary: "40 000-55 000 ₽/мес", top: "Топ 50", percentage: "92%", imgSrc: img2 },
    { name: "Директор проектов", role: "Опыт: 15 лет", salary: "70 000-100 000 ₽/мес", top: "Топ 50", percentage: "95%", imgSrc: img3 },
    { name: "Халк", role: "Супергерой", salary: "Зарплата неизвестна", top: "Топ 50", percentage: "88%", imgSrc: img4 },
    { name: "Маркетолог", role: "Опыт: 8 лет", salary: "40 000-60 000 ₽/мес", top: "Топ 50", percentage: "85%", imgSrc: img5 },
    { name: "Шрек", role: "Супергерой", salary: "Зарплата неизвестна", top: "Топ 50", percentage: "89%", imgSrc: img6 },
    { name: "Финансовый аналитик", role: "Опыт: 7 лет", salary: "45 000-65 000 ₽/мес", top: "Топ 50", percentage: "91%", imgSrc: img7 },
    { name: "Супер-женщина", role: "Супергерой", salary: "Зарплата неизвестна", top: "Топ 50", percentage: "94%", imgSrc: img8 },
    { name: "Финансовый аналитик", role: "Опыт: 7 лет", salary: "45 000-65 000 ₽/мес", top: "Топ 50", percentage: "91%", imgSrc: img9 },
    { name: "Супер-женщина", role: "Супергерой", salary: "Зарплата неизвестна", top: "Топ 50", percentage: "94%", imgSrc: img10 },
  
  
  ];
  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(search.toLowerCase()) ||
    candidate.role.toLowerCase().includes(search.toLowerCase()) ||
    candidate.salary.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <header className='header__candidat'>
      <div className='osnovnoy__sayt__start'>
        <div className='main__page'>
          <h2 className='header__logo'>NFTalent</h2>
          <ul className='header__list__ul_2'>
            <li><span className='header__li__text'>Ваши вакансии</span></li>
            <li><span className='header__li__text'>Сообщения</span></li>
          </ul>
          <ul className='img__ul__svg'>
            <li><img className='img__header__svg' src={imgheader4} alt='User Info' /></li>
            <li>
              <button className='img__header__svg__button'>
                <img className='img__header__svg' src={imgheader3} alt='Userinfo Kandidat' />
              </button>
            </li>
            <li><img className='img__header__svg' src={imgheader1} alt='Icon 3' /></li>
            <li>
              <button className='img__header__svg__button'>
                <img className='img__header__svg' src={imgheader2} alt='Icon 4' />
              </button>
            </li>
          </ul>
        </div>

        <div className='form__ul__searc'>
          <div className='form__ul__searc__start'>
            <form className='work__Job__seekers'>
              <select className="work" value={selectedValue} onChange={handleChange}>
                <option value="Job__seekers">Соискатели</option>
                <option value="education">Образование</option>
                <option value="work_experience">Опыт работы</option>
                <option value="skills">Навыки</option>
                <option value="portfolio">Портфолио</option>
              </select>
              <i className='number__i__job__seekrs'>3058</i>        
            </form>

            <form className="search__form">
              <div className="search__input">
                <button className='search__icon__form' type='submit'><IoIosSearch/></button>
                <input
    type="text"
    className='search__input__form'
    placeholder='Поиск по кандидату'
    value={search} 
    onChange={handleSearchChange} 
/>
              </div>
            </form>

            <select className="work__1" value={sortByDate} onChange={(e) => setSortByDate(e.target.value)}>
              <option  className='option__work__1' value="updated">По дате обновления</option>
              <option  className='option__work__1' value="publication_date">Обновить дату публикации</option>
              <option  className='option__work__1' value="info_updated">Указать в тексте, что информация была обновлена</option>
            </select>

            <select className="work__2" value={timeFrame} onChange={(e) => setTimeFrame(e.target.value)}>
              <option className='option__work__1' value="all_time">За всё время</option>
              <option className='option__work__1' value="recent">Обновить дату публикации</option>
              <option className='option__work__1' value="info_updated">Указать в тексте, что информация была обновлена</option>
            </select>
          </div>
        </div>
      
        <div className='candidate__cards'>
          {filteredCandidates.map((candidate, index) => (
            <CandidateCard 
              key={index}
              name={candidate.name}
              role={candidate.role}
              top={candidate.top}
              percentage={candidate.percentage}
              date={candidate.date}
              salary={candidate.salary}
              imgSrc={candidate.imgSrc}
            />
          ))}

     <Parameters/> 


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
    </header>
  );
};

export default Candidat;
