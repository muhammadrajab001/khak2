import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../img/Group 2.svg';
import img2 from '../img/Group-3.svg';
import img3 from '../img/Group-4.svg';
import img4 from '../img/Group 1.svg';
import { CgMathPlus, CgMore } from "react-icons/cg";

const Usereducation = () => {
    const [activeBall, setActiveBall] = useState(false);
    const [images, setImages] = useState([]); // Состояние для хранения загруженных изображений
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveBall(true);
        navigate('/header'); // Переход к Header
    };

    // Обработчик для добавления нового изображения
    const handleAddImage = () => {
        setImages([...images, '']); // Добавляем пустую строку для новой картинки
    };

    // Обработчик изменения изображения
    const handleImageChange = (index, event) => {
        const newImages = [...images];
        newImages[index] = URL.createObjectURL(event.target.files[0]); // Создаем объект URL для изображения
        setImages(newImages);
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
                        <li><img className='img__header__svg' src={img1} alt='img1' /></li>
                        <li><img className='img__header__svg' src={img2} alt='img2' /></li>
                        <li><img className='img__header__svg' src={img3} alt='img3' /></li>
                        <li><img className='img__header__svg' src={img4} alt='img4' /></li>
                    </ul>
                </div>
                <div className='header__form__users__1'>
                    <h1 className='form__text'>Образование</h1>
                    <h1 className='education__text'>Укажите уровень образования</h1>
                    <form className='education' onSubmit={handleSubmit}>
                        <select className="education__select">
                            <option value="secondary vocational">Среднее профессиональное</option>
                            <option value="higher">Высшее</option>
                            <option value="incomplete higher">Неоконченное высшее</option>
                        </select>
                        <button className='button__education' type='submit'>Дальше</button>
                    </form>

                    <div className='Document__2'>
                        <div className='document__text__icon'>
                            <h1 className='text__document'>
                                Документы
                                <CgMore 
                                    size={22} 
                                    className='img__document' 
                                    onClick={() => {/* Здесь можно открыть модальное окно для загрузки */}} 
                                />
                            </h1>
                            <p className='text__document__p'>Загрузите дипломы и отправьте их на проверку</p>
                            <p className='text__document__p_2'>Так больше доверяют</p>
                            <div className='img__imgkandidaticon' onClick={handleAddImage}>
                                <CgMore size={22} className='img__imgkandidaticon2__icon__document' />
                                <CgMathPlus className='icon__imgkandidaticon2__document'/>
                               
                            </div>
                            <input className='input__imgkandidaticon2__document' type='text' placeholder='Текст'/>
                            {images.map((image, index) => (
                                <div key={index} className="image-container">
                                    <input 
                                        type='file' 
                                        accept='image/*' 
                                        onChange={(event) => handleImageChange(index, event)} 
                                        style={{ display: 'none' }} 
                                        id={`file-input-${index}`} 
                                    />
                                    <label htmlFor={`file-input-${index}`} style={{ cursor: 'pointer' }}>
                                        {image ? (
                                            <img src={image} alt={`Uploaded ${index}`} style={{ width: '100px', height: 'auto' }} />
                                        ) : (
                                            <div style={{ border: '1px dashed #ccc', padding: '10px', textAlign: 'center' }}>
                                                Нажмите, чтобы загрузить изображение
                                            </div>
                                        )}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='anime__ball1222'>
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

export default Usereducation;
