import React, { useState } from 'react';
import './MyLineChart.css';
import { useNavigate } from 'react-router-dom';
import imgheader1 from '../img/Group-4.svg';
import imgheader4 from '../img/Group 2.svg';
import imgheader3 from '../img/Group-3.svg';
import imgheader2 from '../img/Group 1.svg';
import { BsChevronLeft } from "react-icons/bs";
import { HiOutlineChevronRight } from "react-icons/hi2";
import { AiOutlineDash } from "react-icons/ai";
import sadewindow1 from '../img/sade window/Vector.svg';
import sadewindow2 from '../img/sade window/icons,Property 1=vacance, state=Default.svg';
import sadewindow3 from '../img/sade window/icons,Property 1=state, state=Default.svg';
import sadewindow4 from '../img/sade window/icons,Property 1=kandidates, state=Default.svg';
import sadewindow5 from '../img/sade window/icons,Property 1=control, state=Default.svg';
import sadewindow6 from '../img/sade window/icons,Property 1=settings, state=Default.svg';
import imgupravHearth from '../img/icons__kartojki/icons,Property 1=Heart, state=Default.svg'
import imgupravVector from '../img/icons__kartojki/Vector.svg'
import imgupravProperty from '../img/icons__kartojki/icons,Property 1=up, state=Default.svg'

const Uprav = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const navigate = useNavigate();

  const handleSidebarIconClick = (path) => {
    navigate(path);
  };

  const SidebarIcon = ({ icon, label, onClick }) => (
    <li className='side__window__icon' onClick={onClick}>
      <img className='sade__window__svg' src={icon} alt={label} />
      <span className='side__window__text'>{label}</span>
    </li>
  );

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
                <img className='img__header__svg' src={imgheader3} alt='User info Kandidat' />
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
        <div className='game__upravlenie'>
          <div className='game__upravlenie__start'>
            <ul className='ul__select__1'>
              <select
                className='select__game__uplarlenie'
                value={selectedValue}
                onChange={handleChange}
              >
                <option className='option__work__1' value='Супергерой'>Вакансия: Супергерой</option>
                <option className='option__work__1' value='Програмистов'>Вакансия: Програмистов</option>
                <option className='option__work__1' value='Генный'>Вакансия: Генный</option>
                <option className='option__work__1' value='Аналитики'>Вакансия: Аналитики</option>
                <option className='option__work__1' value='Менеджер'>Вакансия: Менеджер</option>
              </select>

              <p className='p__game__uplravlenie'>Всего кандидатов: 211</p>
              <p className='p__game__uplravlenie'>Обработано за сегодня: 0</p>
              <AiOutlineDash className='icon__game__uplravlenie' />

              <button className='button__game__uplravlenie' type='button'>
                <BsChevronLeft />
              </button>
              
              <button type='button' className='game__button__uplravlenie'>
                <HiOutlineChevronRight />
              </button>
            </ul>
            <div className='cart__Uplav'>
          <div className='cart__Uplav__start__1'> 
            <p className='cart__p__sub'>Отклики</p>
            <i className='cart__i__sub'>98</i>
            <select
                className='select__game__uplarlenie'
                value={selectedValue}
                onChange={handleChange}
              >
                <option className='option__work__1' value='Супергерой'>По дате</option>
                <option className='option__work__1' value='Програмистов'>15.11.01</option>
                <option className='option__work__1' value='Генный'>15.11.01</option>
                <option className='option__work__1' value='Аналитики'>15.10.25</option>
                <option className='option__work__1' value='Менеджер'>15.10.25</option>
              </select>
           <ul className='ul__uprav'>
            <p className='ul__uprav__p'>15.11.01</p>
            <img className='ul__uprav__img' src={imgupravHearth}/>
               <button className='ul__uprav__button'>Подтвержден</button>
               <img className='ul__uprav__img1' src={imgupravVector}/>
               <img className='ul__uprav__img2' src={imgupravProperty}/>
               <p className='ul__uprav__p1'>Мегамайл</p>
               <p className='ul__uprav__p2'>Супергерой</p>
           </ul>
           <ul className='ul__uprav'>
            <p className='ul__uprav__p'>15.11.01</p>
            <img className='ul__uprav__img' src={imgupravHearth}/>
               <button className='ul__uprav__button'>Подтвержден</button>
               <img className='ul__uprav__img1' src={imgupravVector}/>
               <img className='ul__uprav__img2' src={imgupravProperty}/>
               <p className='ul__uprav__p1'>Мери Поппинс</p>
               <p className='ul__uprav__p2'>Супергерой</p>
           </ul>
           <ul className='ul__uprav'>
            <p className='ul__uprav__p'>15.10.25</p>
            <img className='ul__uprav__img' src={imgupravHearth}/>
               <button className='ul__uprav__button'>Подтвержден</button>
               <img className='ul__uprav__img1' src={imgupravVector}/>
               <img className='ul__uprav__img2' src={imgupravProperty}/>
               <p className='ul__uprav__p1'>Зорро</p>
               <p className='ul__uprav__p2'>Супергерой</p>
           </ul>
           <ul className='ul__uprav'>
            <p className='ul__uprav__p'>15.10.25</p>
            <img className='ul__uprav__img' src={imgupravHearth}/>
               <button className='ul__uprav__button'>Подтвержден</button>
               <img className='ul__uprav__img1' src={imgupravVector}/>
               <img className='ul__uprav__img2' src={imgupravProperty}/>
               <p className='ul__uprav__p1'>Тор</p>
               <p className='ul__uprav__p2'>Супергерой</p>
           </ul>
           <ul className='ul__uprav'>
            <p className='ul__uprav__p'>15.11.01</p>
            <img className='ul__uprav__img' src={imgupravHearth}/>
               <button className='ul__uprav__button'>Подтвержден</button>
               <img className='ul__uprav__img1' src={imgupravVector}/>
               <img className='ul__uprav__img2' src={imgupravProperty}/>
               <p className='ul__uprav__p1'>Малефисента</p>
               <p className='ul__uprav__p2'>Супергерой</p>
           </ul>
           <ul className='ul__uprav'>
            <p className='ul__uprav__p'>15.11.02</p>
            <img className='ul__uprav__img' src={imgupravHearth}/>
               <button className='ul__uprav__button'>Подтвержден</button>
               <img className='ul__uprav__img1' src={imgupravVector}/>
               <img className='ul__uprav__img2' src={imgupravProperty}/>
               <p className='ul__uprav__p1'>Джокер</p>
               <p className='ul__uprav__p2'>Супергерой</p>
           </ul>
          
          </div>


          <div className='cart__Uplav'>
          <div className='cart__Uplav__start'> 
            <p className='cart__p__sub'>Собеседование</p>
            <i className='cart__i__sub'>10</i>
            <select
                className='select__game__uplarlenie'
                value={selectedValue}
                onChange={handleChange}
              >
                <option className='option__work__1' value='Супергерой'>По дате</option>
                <option className='option__work__1' value='Програмистов'>15.11.01</option>
                <option className='option__work__1' value='Генный'>15.11.01</option>
                <option className='option__work__1' value='Аналитики'>15.10.25</option>
                <option className='option__work__1' value='Менеджер'>15.10.25</option>
              </select>
          
           <ul className='ul__uprav'>
            <p className='ul__uprav__p'>15.10.25</p>
            <img className='ul__uprav__img' src={imgupravHearth}/>
               <button className='ul__uprav__button'>Подтвержден</button>
               <img className='ul__uprav__img1' src={imgupravVector}/>
               <img className='ul__uprav__img2' src={imgupravProperty}/>
               <p className='ul__uprav__p1'>Тор</p>
               <p className='ul__uprav__p2'>Супергерой</p>
           </ul>
           <ul className='ul__uprav'>
            <p className='ul__uprav__p'>15.11.01</p>
            <img className='ul__uprav__img' src={imgupravHearth}/>
               <button className='ul__uprav__button'>Подтвержден</button>
               <img className='ul__uprav__img1' src={imgupravVector}/>
               <img className='ul__uprav__img2' src={imgupravProperty}/>
               <p className='ul__uprav__p1'>Малефисента</p>
               <p className='ul__uprav__p2'>Супергерой</p>
           </ul>
           <ul className='ul__uprav'>
            <p className='ul__uprav__p'>15.11.02</p>
            <img className='ul__uprav__img' src={imgupravHearth}/>
               <button className='ul__uprav__button'>Подтвержден</button>
               <img className='ul__uprav__img1' src={imgupravVector}/>
               <img className='ul__uprav__img2' src={imgupravProperty}/>
               <p className='ul__uprav__p1'>Джокер</p>
               <p className='ul__uprav__p2'>Супергерой</p>
           </ul>
          
          </div>
        </div>

        <div className='cart__Uplav'>
          <div className='cart__Uplav__start'> 
            <p className='cart__p__sub'>Отложены</p>
            <i className='cart__i__sub'>13</i>
            <select
                className='select__game__uplarlenie'
                value={selectedValue}
                onChange={handleChange}
              >
                <option className='option__work__1' value='Супергерой'>По дате</option>
                <option className='option__work__1' value='Програмистов'>15.11.01</option>
                <option className='option__work__1' value='Генный'>15.11.01</option>
                <option className='option__work__1' value='Аналитики'>15.10.25</option>
                <option className='option__work__1' value='Менеджер'>15.10.25</option>
              </select>
           <ul className='ul__uprav'>
            <p className='ul__uprav__p'>15.11.01</p>
            <img className='ul__uprav__img' src={imgupravHearth}/>
               <button className='ul__uprav__button'>Подтвержден</button>
               <img className='ul__uprav__img1' src={imgupravVector}/>
               <img className='ul__uprav__img2' src={imgupravProperty}/>
               <p className='ul__uprav__p1'>Мегамайл</p>
               <p className='ul__uprav__p2'>Супергерой</p>
           </ul>
           <ul className='ul__uprav'>
            <p className='ul__uprav__p'>15.11.01</p>
            <img className='ul__uprav__img' src={imgupravHearth}/>
               <button className='ul__uprav__button'>Подтвержден</button>
               <img className='ul__uprav__img1' src={imgupravVector}/>
               <img className='ul__uprav__img2' src={imgupravProperty}/>
               <p className='ul__uprav__p1'>Мери Поппинс</p>
               <p className='ul__uprav__p2'>Супергерой</p>
           </ul>
           <ul className='ul__uprav'>
            <p className='ul__uprav__p'>15.10.25</p>
            <img className='ul__uprav__img' src={imgupravHearth}/>
               <button className='ul__uprav__button'>Подтвержден</button>
               <img className='ul__uprav__img1' src={imgupravVector}/>
               <img className='ul__uprav__img2' src={imgupravProperty}/>
               <p className='ul__uprav__p1'>Зорро</p>
               <p className='ul__uprav__p2'>Супергерой</p>
           </ul>
           <ul className='ul__uprav'>
            <p className='ul__uprav__p'>15.10.25</p>
            <img className='ul__uprav__img' src={imgupravHearth}/>
               <button className='ul__uprav__button'>Подтвержден</button>
               <img className='ul__uprav__img1' src={imgupravVector}/>
               <img className='ul__uprav__img2' src={imgupravProperty}/>
               <p className='ul__uprav__p1'>Тор</p>
               <p className='ul__uprav__p2'>Супергерой</p>
           </ul>
           <ul className='ul__uprav'>
            <p className='ul__uprav__p'>15.11.01</p>
            <img className='ul__uprav__img' src={imgupravHearth}/>
               <button className='ul__uprav__button'>Подтвержден</button>
               <img className='ul__uprav__img1' src={imgupravVector}/>
               <img className='ul__uprav__img2' src={imgupravProperty}/>
               <p className='ul__uprav__p1'>Малефисента</p>
               <p className='ul__uprav__p2'>Супергерой</p>
           </ul>
           <ul className='ul__uprav'>
            <p className='ul__uprav__p'>15.11.02</p>
            <img className='ul__uprav__img' src={imgupravHearth}/>
               <button className='ul__uprav__button'>Подтвержден</button>
               <img className='ul__uprav__img1' src={imgupravVector}/>
               <img className='ul__uprav__img2' src={imgupravProperty}/>
               <p className='ul__uprav__p1'>Джокер</p>
               <p className='ul__uprav__p2'>Супергерой</p>
           </ul>
          
          </div>
       
        </div>



       


        </div>


     





























          </div>
      
        </div>

      
      </div>
      <div className='side__window'>
        <div className='side__window__start'>
          <ul className='side__window__ul'>
            <SidebarIcon icon={sadewindow1} label='Главная' onClick={() => handleSidebarIconClick('/')} />
            <SidebarIcon icon={sadewindow2} label='Вакансии' onClick={() => handleSidebarIconClick('/Vacancy')} />
            <SidebarIcon icon={sadewindow4} label='Кандидаты' onClick={() => handleSidebarIconClick('/Candidat')} />
            <SidebarIcon icon={sadewindow5} label='Управление' onClick={() => handleSidebarIconClick('/Uprav')} />
            <SidebarIcon icon={sadewindow3} label='Статистика' onClick={() => handleSidebarIconClick('/MyLineChart')} />
            <SidebarIcon icon={sadewindow6} label='Настройки' onClick={() => handleSidebarIconClick('/HRSettings')} />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Uprav;
