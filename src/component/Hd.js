import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './scss/hd.scss';
import hdscss from './scss/hd.module.scss';
import gnbMenu from '../json/hdgnb.json'; 

import SearchIcon from './svg/SearchIcon'
import LoginIcon from './svg/LoginIcon'
import logo from '../img/Logo.svg'

function Hd() {
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [placeholderIndex, setPlaceholderIndex] = useState(0);

    const placeholders = [
        '정기구독 신청',
        '이달의 특가 확인',
        '인기 상품 보기',
        '매일매일 출석체크',
        '여름 한정 이벤트'
    ];
    
    const handleFocus = () => {
        setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    };

    useEffect(() => {
        const header = document.querySelector('#hd');
        
        const handleScroll = () => {
            if (window.scrollY > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleSearch = () => {
        setIsSearchVisible(prevState => !prevState);
    };

    return (
        <header id="hd" className={hdscss.hd}>
            <div className="container-1824 d-flex justify-content-between align-items-center py-3">
                <h1 className="mx-0 mb-0">
                    <a href="/"><img src={logo} alt="로고"/></a>
                </h1>
                <ul className={`${hdscss.gnb} ps-0 mb-0 d-flex justify-content-center align-items-center`}>
                    {gnbMenu.map((menu, index) => (
                        <li key={index} className={`${hdscss.gnb_d1_li} mx-4 position-relative`}>
                            <Link to="/" className={hdscss.gnb_d1_a}>{menu.title}</Link>
                            <ul className={`${hdscss.d2_ul} position-absolute`}>
                                {menu.submenu.map((submenu, subIndex) => (
                                    <li key={subIndex}><Link to={submenu.link}>{submenu.title}</Link></li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
                <ul className={`${hdscss.iconMenu} ps-0 mb-0 d-flex justify-content-end align-items-center`}>
                    <li>
                        <Link to="/" className="text-nowrap mb-0">브랜드 제휴</Link>
                    </li>
                    <li className={`${hdscss.search} ms-4 d-flex align-items-center`}>
                        <i 
                            onClick={toggleSearch} 
                            role="button" 
                            tabIndex={0}
                            className={isSearchVisible ? hdscss.searchIconActive : ''}>
                            <SearchIcon className="icon" />
                        </i>
                        <span className="visually-hidden">검색</span>
                        {isSearchVisible && (
                            <input 
                                type="text" 
                                placeholder={placeholders[placeholderIndex]}
                                onFocus={handleFocus}
                                autoFocus
                            />
                        )}
                    </li>
                    <li className="ms-4">
                        <i>
                            <LoginIcon className="icon" />
                        </i>
                        <span className="visually-hidden">로그인</span>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Hd;
