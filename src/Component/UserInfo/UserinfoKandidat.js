import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import imgkandidat1 from '../img/Group 1.svg';
import imgkandidat2 from '../img/Group 2.svg';
import imgkandidat3 from '../img/Group-3.svg';
import imgkandidat4 from '../img/Group-4.svg';
import imgkandidaticon from '../img/UserinfoKandidat__icon/Union.svg';
import imgkandidaticon2 from '../img/UserinfoKandidat__icon/Vector.svg';
import './UserinfoKandidat.css';
import { FaCamera } from "react-icons/fa";
import { AiOutlineVerticalAlignBottom } from "react-icons/ai";
import { VscLoading } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineArrowDown } from "react-icons/ai";


Modal.setAppElement('#root');

const UserinfoKandidat = () => {
    const [activeBall, setActiveBall] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false); 
    const [file, setFile] = useState(null);
    const [country, setCountry] = useState('');
    const [divisionCode, setDivisionCode] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setActiveBall(true);
    };

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        console.log('Файл загружен:', uploadedFile);
        if (uploadedFile) {
            setFile(uploadedFile);
            console.log('Открываем второе модальное окно');
            setIsModalOpen(false);
            setIsSecondModalOpen(true);
        }
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setFile(null);
    };

    const handleSecondModalClose = () => {
        setIsSecondModalOpen(false);
        setCountry('');
        setDivisionCode('');
    };

    const handleLoadingClick = () => {
        console.log('Загрузка данных...'); 
    };

    const handleCloseClick = () => {
        handleSecondModalClose(); 
    };

    const handleDownloadClick = () => {
        alert('Файл загружается...'); 
    };

    return (
        <header>
            <div className='header__nav_2'>
                <div className='userkandidat__header'>
                    <h2 className='header__logo'>NFTalent</h2>
                    <ul className='header__list__ul'>
                        <li><a className='header__li__text' href=''>Ваши резюме</a></li>
                        <li><a className='header__li__text' href=''>Сообщения</a></li>
                        <li><a className='header__li__text' href=''>Отклики</a></li>
                        <li><a className='header__li__text' href=''>Тесты</a></li>
                    </ul>
                    <ul className='img__ul__svg'>
                        <li><img className='img__header__svg' src={imgkandidat2} alt='img1' /></li>
                        <li><img className='img__header__svg' src={imgkandidat3} alt='img2' /></li>
                        <li><img className='img__header__svg' src={imgkandidat4} alt='img3' /></li>
                        <li><img className='img__header__svg' src={imgkandidat1} alt='img4' /></li>
                    </ul>
                </div>
                <div className='header__form__users__2'>
                    <h1 className='form__text'>Основная информация</h1>
                    <form className='form__start__input__2' onSubmit={handleSubmit}>
                        <input className='input__form__text__2' type='text' placeholder='Город' required />
                        <input className='input__form__city__2' type='date' id='icon' placeholder='Дата рождения' required />
                        <button className='btn__form' type='submit'>Дальше</button>
                    </form>

                    <select className="gender">
                        <option value="">Пол</option>
                        <option className='gender__option' value="male">Мужской</option>
                        <option value="female">Женский</option>
                    </select>

                    <div className='Document__2'>
                        <div className='document__text__icon'>
                            <h1 className='text__document'>Документы
                                <img
                                    className='img__document'
                                    src={imgkandidaticon}
                                    alt='img1'
                                    onClick={() => setIsModalOpen(true)} 
                                />
                            </h1>
                            <p className='text__document__p'>Загрузите скан документа удостоверяющего личность</p>
                            <p className='text__document__p_2'>Это нужно для подтверждения профиля, этот документ никто не увидит без вашего подтверждения</p>
                            <li className='img__imgkandidaticon2' onClick={() => setIsModalOpen(true)}>
                                <img className='img__imgkandidaticon2__icon' src={imgkandidaticon2} alt='img1' />
                            </li>
                        </div>

                        <div className='anime__ball1'>
                            <ul className='ul__anime__list1'>
                                <li className={activeBall ? 'anime__li__ball2 active' : 'anime__li__ball2'}>
                                    <p className='anime__li__p'></p>
                                </li>
                                <li className='anime__li__ball3'></li>
                            </ul>
                        </div>
                    </div>

                    {/* Первое модальное окно для загрузки документов */}
                    <Modal isOpen={isModalOpen} onRequestClose={handleModalClose} className="modal" overlayClassName="overlay">
                        <h2 className='text__modal'>Документы</h2>
                        <p className='text__modal__2'>Загрузите документ из памяти устройства, или сфотографируйте</p>
                        <div className="modal-buttons">
                            <label htmlFor="file-upload">
                                <AiOutlineVerticalAlignBottom size={22} className='icons__loading' />
                            </label>
                            <button className='icons__camera' onClick={() => { /* Ваш код для открытия камеры */ }}>
                                <FaCamera size={22} />
                            </button>
                            <input
                                id="file-upload"
                                type='file'
                                onChange={handleFileChange}
                                style={{ display: 'none' }} 
                            />
                        </div>
                    </Modal>

                    {/* Второе модальное окно для ввода дополнительных данных */}
                    <Modal isOpen={isSecondModalOpen} onRequestClose={handleSecondModalClose} className="modal" overlayClassName="overlay">
                        <div className='modal__okno__2'>
                            <h2 className='modal__h2__text'>Данные документа</h2>
                            {file && (
                                <img className='img__password__document' src={URL.createObjectURL(file)} alt='Uploaded' />
                            )}

                            <div className='class__list__contry'>
                                <select className='list__country' value={country} onChange={(e) => setCountry(e.target.value)}>
                                    <option className='list__country__1' value="">Выберите страну</option>
                                    <option className='list__country__1' value="ru">Россия</option>
                                    <option className='list__country__1' value="us">США</option>
                                   
                                </select>

                                <input
                                    className='input__number'
                                    type='text'
                                    value={divisionCode}
                                    onChange={(e) => setDivisionCode(e.target.value)}
                                    placeholder='Код подразделения'
                                />
                            </div>

                            <div className='btn__modalokno__2'>
                                <button className='button__modalokno__2' onClick={handleSecondModalClose}>Отправить на проверку</button>
                                <br />
                                <ul className='list__icons__modalokno__2'>
                                    <li onClick={handleLoadingClick} title="Загрузка">
                                        <VscLoading className="icon" />
                                    </li>
                                    <li onClick={handleCloseClick} title="Закрыть">
                                        <IoCloseOutline className="icon" />
                                    </li>
                                    <li onClick={handleDownloadClick} title="Скачать">
                                        <AiOutlineArrowDown className="icon" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </header>
    );
};

export default UserinfoKandidat;
