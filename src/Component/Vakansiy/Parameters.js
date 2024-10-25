import React, { useState } from 'react';


const Parameters = () => {
  const [showMore, setShowMore] = useState(false); 

  const handleToggle = () => {
    setShowMore(prevShowMore => !prevShowMore); 
  };

  return (
    <div className={`Parameters ${showMore ? 'expanded' : ''}`}>
      <div className='Parameters__class'>
        <h3 className='Parameters__h3'>Параметр</h3>

        <ul>
          <p className='Parameters__p__ul'>Уровень образования</p>
          <li className='parametrs__li'><input type='checkbox' /> Среднее</li>
          <li className='parametrs__li'><input type='checkbox' /> Средне-специальное</li>
          <li className='parametrs__li'><input type='checkbox' /> Высшее</li>
          <li>
            <input type='checkbox' />
            <input className='parametrs__li__input' type='text' placeholder='text' />
          </li>
        </ul>
        <ul>
          <p className='Parameters__p__ul'>Тип занятости</p>
          <li className='parametrs__li'><input type='checkbox' /> Полная</li>
          <li className='parametrs__li'><input type='checkbox' /> Частичная</li>
          <li className='parametrs__li'><input type='checkbox' /> Фриланс</li>
          <li className='parametrs__li'><input type='checkbox' /> Удалённая</li>
        </ul>
        <ul>
          <p className='Parameters__p__ul'>Локация</p>
          <li className='Parameters__p__ul'><input type='search' /> Укажите локацию</li>
          <li className='parametrs__li'><input type='checkbox' /> [=город пользователя]</li>
          <li className='parametrs__li'><input type='checkbox' /> [=регион пользователя]</li>
          <li className='parametrs__li'><input type='checkbox' /> Россия</li>
          <li className='parametrs__li'><input type='checkbox' /> Готовность к релокации</li>
        </ul>

    
        {showMore && (
          <div>
            <ul>
              <p className='Parameters__p__ul'>Дополнительные параметры</p>
              <li className='parametrs__li'><input type='checkbox' /> Гибкий график</li>
              <li className='parametrs__li'><input type='checkbox' /> Опыт работы от 3 лет</li>
              <li className='parametrs__li'><input type='checkbox' /> Знание английского языка</li>
        
            </ul>
          </div>
        )}

        <button className='button__parametrs' onClick={handleToggle}>
          {showMore ? 'Скрыть' : 'Больше'} 
        </button>
      </div>
    </div>
  );
};

export default Parameters;
