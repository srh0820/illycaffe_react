import React from 'react';
import { Link } from 'react-router-dom';

import mainscss from './scss/main.module.scss';

const Main = () => {
    return (
        <section className={mainscss.main}>
            <div className={`${mainscss.mainBanner} d-flex align-items-center`}>
                <div className={mainscss.bgImg}>
                    <div className={mainscss.mainTextbox}>
                        <p className={`${mainscss.mainText1} ms-2`}>
                            QUALITY <br />
                            LOVES <br />
                            DETAILS
                        </p>
                        <p className={`${mainscss.mainText2} ms-2`}>
                            일리커피는 아라비카 원두만을 사용하여 독보적인 블렌딩으로 탄생했습니다
                        </p>
                        <Link to="/" className={`${mainscss.btn} ms-2`}>
                            자세히보기
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;