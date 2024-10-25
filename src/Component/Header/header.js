// src/Component/Header/header.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import imgheader1 from '../img/Group-4.svg';
import imgheader4 from '../img/Group 2.svg';
import imgheader3 from '../img/Group-3.svg';
import imgheader2 from '../img/Group 1.svg';

import sadewindow1 from '../img/sade window/Vector.svg';
import sadewindow2 from '../img/sade window/icons,Property 1=vacance, state=Default.svg';
import sadewindow3 from '../img/sade window/icons,Property 1=state, state=Default.svg';
import sadewindow4 from '../img/sade window/icons,Property 1=kandidates, state=Default.svg';
import sadewindow5 from '../img/sade window/icons,Property 1=control, state=Default.svg';
import sadewindow6 from '../img/sade window/icons,Property 1=settings, state=Default.svg';



import img3 from '../img/UserinfoKandidat__icon/Union.svg';
import imgvector from '../img/UserinfoKandidat__icon/gradient/Vector.svg';
import imgradient from '../img/UserinfoKandidat__icon/gradient/fill.svg';
import './header.css';
import UpdatesList from './UpdatesList';
import TotalVacancy from './TotalVacancy';
import KompaniKomponent from './KompaniKomponent';
import imgicons from '../img/icons__kartojki/icons,Property 1=Heart, state=Default.svg'
import imgiconssupergeroy from '../img/icons__kartojki/супергерой Бетмен, фото для резюме.svg'
import imgwomen from '../img/icons__kartojki/image.svg'
import imgmen from '../img/icons__kartojki/image (1).svg'

import imgiconstotal from '../img/icons__kartojki/Vector.svg'
import imgiconsproperty from '../img/icons__kartojki/icons,Property 1=up, state=Default.svg'

const SidebarIcon = ({ icon, label, onClick }) => (
  <li className='side__window__icon' onClick={onClick}>
    <img className='sade__window__svg' src={icon} alt={label} />
    <span className='side__window__text'>{label}</span>
  </li>
);

const Header = () => {
  const navigate = useNavigate();

  const handleSidebarIconClick = (path) => {
    navigate(path);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Выбран файл:', file.name);
    
    }
  };

  return (
    <header className='header__1'>
      <div className='osnovnoy__sayt__start'>
        <div className='main__page'>
          <h2 className='header__logo'>NFTalent</h2>
          <ul className='header__list__ul_2'>
            <li><span className='header__li__text'>Ваши вакансии</span></li>
            <li><span className='header__li__text'>Сообщения</span></li>
          </ul>
          <ul className='img__ul__svg'>
            <li>
        
                <img className='img__header__svg' src={imgheader4} alt='User Info' />
       
            </li>
            <li>
              <button className='img__header__svg__button' >
                <img className='img__header__svg' src={imgheader3} alt='Userinfo Kandidat' />
              </button>
            </li>
          <button className='button__LikedImages' onClick={() => navigate('/')} >  <li><img className='img__header__svg' src={imgheader1} alt='Icon 3' /></li></button>
            <button className='img__header__svg__button' onClick={() => navigate('/userinfo')}>
            <li><img className='img__header__svg' src={imgheader2} alt='Icon 4' /></li>
            </button>
          </ul>
        </div>
        
        <KompaniKomponent />
        <UpdatesList />
        <TotalVacancy />

        <div className='statistics__window'>
          <ul className='statistics__window__ul'>
            <li className='statistics__window__li__1'>Принято сотрудников <img src={img3} alt="Employees" /></li>
            <li className='statistics__window__li__2'> 45 <i className='statistics__i'>5%</i></li>
            <li className='statistics__window__li__3'>100  <p className='statistics__p'></p></li>
            <li className='statistics__window__li__4'>50  <p className='statistics__p'></p></li>
            <li className='statistics__window__li__5'>0  <p className='statistics__p'></p> <img className='statistics__window__img' src={imgradient} alt="Gradient" /></li>
            
            <ul className='statistics__window__ul__2'>
              <li>Авг</li>
              <li>Сент</li>
              <li>Окт</li>
            </ul>
            
            <form action='#' className='file-upload-form'>
              <img src={imgvector} alt='Upload' className='upload-image' />
              <input 
                type='file' 
                onChange={handleFileChange} 
                className='file-input' 
                id='file-upload' 
                accept=".jpg,.jpeg,.png,.pdf" 
              />
              <label htmlFor='file-upload' className='custom-file-upload'>
                Разместить вакансию
              </label>
            </form>
          </ul>
          <h3 className='text__candidate__recommendations'>Рекомендуем перспективных кандидатов:</h3>
          <div className='candidate-recommendations'>
         
  <div className='card__candidate'>
 
        <button className='button__card__candidate'>Подтвержден</button>
        <img className='img1__card__candidate' src={imgicons} alt="Иконка" />
        <img className='img2__card__candidate' src={imgiconssupergeroy} alt="Иконка супергероя" />
    <p className='text1__card__candidate'>    Бэтмен    <i className='text2__card__candidate' >Супергерой</i></p>
        
      <ul className='ul__card__candidate'>
      <li className='li1__card__candidate'>    <img src={imgiconstotal} alt="Топ 50" />Топ 50 </li>
      <li className='li2__card__candidate'>    <img className='img3__card__candidate' src={imgiconsproperty} alt="Процент" /> 92%</li>
         <i className='i__card__candidate'>15.10.24</i>
      </ul>
  </div>


  <div className='card__candidate'>
 
 <button className='button__card__candidate'>Подтвержден</button>
 <img className='img1__card__candidate' src={imgicons} alt="Иконка" />
 <img className='img2__card__candidate' src={imgwomen} alt="Иконка супергероя" />
<p className='text1__card__candidate'>    Супер-женщина    <i className='text2__card__candidate' >Супергерой</i></p>
 
<ul className='ul__card__candidate'>
<li className='li1__card__candidate'>    <img src={imgiconstotal} alt="Топ 50" />Топ 50 </li>
<li className='li2__card__candidate'>    <img className='img3__card__candidate' src={imgiconsproperty} alt="Процент" /> 82%</li>
  <i className='i__card__candidate'>15.10.24</i>
</ul>
</div>













<div className='card__candidate'>
 
 <button className='button__card__candidate'>Подтвержден</button>
 <img className='img1__card__candidate' src={imgicons} alt="Иконка" />
 <img className='img2__card__candidate' src={imgmen} alt="Иконка супергероя" />
<p className='text1__card__candidate'>   Супер-марио   <i className='text2__card__candidate' >Супергерой</i></p>
 
<ul className='ul__card__candidate'>
<li className='li1__card__candidate'>    <img src={imgiconstotal} alt="Топ 50" />Топ 50 </li>
<li className='li2__card__candidate'>    <img className='img3__card__candidate' src={imgiconsproperty} alt="Процент" /> 92%</li>
  <i className='i__card__candidate'>15.10.24</i>
</ul>
</div>











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
    </header>
  );
};

export default Header;
