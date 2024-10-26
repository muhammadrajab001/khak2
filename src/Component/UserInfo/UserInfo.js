import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserInfo.css';
import img1 from '../img/Group 2.svg';
import img2 from '../img/Group-3.svg';
import img3 from '../img/Group-4.svg';
import img4 from '../img/Group 1.svg';

const UserInfo = () => {
  const [activeBall, setActiveBall] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveBall(true);
    navigate('/kandidat'); 
  };

  return (
    <header>
      <div className='nav__header'>
        <div className='header__nav'>
          <h2 className='header__logo'>NFTalent</h2>
          <ul className='header__list__ul'>
            <li><a className='header__li__text' href=''>Ваши резюме</a></li>
            <li><a className='header__li__text' href=''>Сообщения</a></li>
            <li><a className='header__li__text' href=''>Отклики</a></li>
            <li><a className='header__li__text' href=''>Тесты</a></li>
          </ul>
          <ul className='img__ul__svg'>
            <li><img className='img__header__svg' src={img1} alt='img1'/></li>
            <li><img className='img__header__svg' src={img2} alt='img2'/></li>
            <li><img className='img__header__svg' src={img3} alt='img3'/></li>
            <li><img className='img__header__svg' src={img4} alt='img4'/></li>
          </ul>
        </div>
        <div className='header__form__users'>
          <h1 className='form__text'>Начнём знакомство</h1>
          <form className='form__start__input' onSubmit={handleSubmit}>
            <input className='input__form__text' type='text' placeholder='Имя' required />
            <input className='input__form__email' type='email' placeholder='Example@email.com' required />
            <button className='btn__form' type='submit'>Дальше</button>
          </form>
          <div className='anime__ball1'>
            <ul className='ul__anime__list'>
              <li className='anime__li__ball'><p className='anime__li__p'></p></li>
              <li className={activeBall ? 'anime__li__ball2 active' : 'anime__li__ball2'}>
                <p className='anime__li__p'></p>
              </li>
              <li className='anime__li__ball3'></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default UserInfo;
