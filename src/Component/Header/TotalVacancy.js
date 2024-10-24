import React, { useState, useEffect } from 'react';

const TotalVacancy = () => {
  const [vacancyCount, setVacancyCount] = useState(0);
  const [responseCount, setResponseCount] = useState(0);

  useEffect(() => {
  
    const randomVacancyCount = Math.floor(Math.random() * 100) + 1; 
    const randomResponseCount = Math.floor(Math.random() * 500) + 1; 

    setVacancyCount(randomVacancyCount);
    setResponseCount(randomResponseCount);
  }, []);

  return (
    <div className='total__vacancy'>
      <h1 className='total__vacancy__text'>Всего вакансий</h1>
      <i className='total__text__1'>{vacancyCount}</i>
      <p className='total__text__2'>Откликов: <i>{responseCount}</i></p>
    </div>
  );
};

export default TotalVacancy;
