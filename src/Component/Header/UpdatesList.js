import React, { useState } from 'react';
import img4 from '../img/UserinfoKandidat__icon/Union.svg'; 


const UpdatesList = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(!showMore); 
  };

  return (
    <ul className='updated__text'>
      <li className='updated__text__li_1'>
        Обновления <img className='komponi__img' src={img4} alt='Обновления' />
      </li>
      <li className='updated__text__li_2'>Андрей Ивлев получил сертификат по знанию SQL от SkillBox</li>
      <li className='updated__text__li_2'>Денис Боровиков сдал IELTS на B2</li>
      <li className='updated__text__li_2'>
        Алексей Столяров перешел на должность junior по веб-разработке (был стажером)
      </li>

      {/* Дополнительный текст, который будет показан при нажатии на кнопку */}
      {showMore && (
        <>
          <li className='updated__text__li_2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li className='updated__text__li_2'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        </>
      )}

      <button className='more__info' onClick={handleShowMoreClick}>
        {showMore ? 'Меньше' : 'Больше'}
      </button>
    </ul>
  );
};

export default UpdatesList;
