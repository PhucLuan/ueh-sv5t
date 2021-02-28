import './ExamplaryStu.css';
import CardStu from './CardStu/CardStu';
import ListExamplaryStu from './ListExamplaryStu';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const ExamplaryStu = () => {

    //const [Students, setStudents] = useState([]);

    //const [Check, setCheck] = useState(false);
    //Gương sv5t 2020
    const Students = [
        { id: 1, name: "VÕ THỊ MỸ TRINH", class: "FN005", pointStudy: 9, pointActivity: 88, src: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/130900578_3620122254711778_7692179230036072943_o.jpg?_nc_cat=103&ccb=3&_nc_sid=0debeb&_nc_ohc=wJo-i5g6pEUAX_aRols&_nc_ht=scontent-sin6-2.xx&oh=6325d63225767c52cd421885b17b575c&oe=605E44B0" },
        { id: 2, name: "BÙI THỊ HIỀN THẢO ", class: "AE001", pointStudy: 9, pointActivity: 88, src: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/131225389_3620122164711787_2982254302474540727_o.jpg?_nc_cat=105&ccb=3&_nc_sid=0debeb&_nc_ohc=SCSo7wSX9AYAX_Rd4Jz&_nc_ht=scontent-sin6-2.xx&oh=2d5acf634139aa40f551b6ed2c6aa06a&oe=60619568" },
        { id: 3, name: "NGUYỄN THỊ HỒNG NHUNG", class: "IB002", pointStudy: 9, pointActivity: 88, src: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/131545786_3630576896999647_7535434182259167051_o.jpg?_nc_cat=105&ccb=3&_nc_sid=0debeb&_nc_ohc=u9aR0-lDJbUAX8VwfPL&_nc_ht=scontent-sin6-2.xx&oh=0b484528a8e3632ea3d0e5d403da34f6&oe=60601753" },
        { id: 4, name: "LÊ NGUYỄN TRÂM ANH", class: "AD004", pointStudy: 9, pointActivity: 88, src: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.0-9/131067543_3620122291378441_2536844576809489179_o.jpg?_nc_cat=109&ccb=3&_nc_sid=0debeb&_nc_ohc=JxgXQboWIiYAX_bDpHj&_nc_ht=scontent-sin6-3.xx&oh=1dc0417f482965e865d6424e1e638fd6&oe=605FBC83" },
        { id: 5, name: "NGUYỄN ĐÌNH NGỌC", class: "AD007", pointStudy: 9, pointActivity: 88, src: "https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/131405420_3620122088045128_3463630370808836394_o.jpg?_nc_cat=111&ccb=3&_nc_sid=0debeb&_nc_ohc=BIfLzpPM1G0AX96Kwoh&_nc_ht=scontent-sin6-1.xx&oh=205e563c2f9f7e3ac90631a4b461cf67&oe=605EA100" },
        { id: 6, name: "DƯƠNG TRÚC PHƯƠNG", class: "FNC01", pointStudy: 9, pointActivity: 88, src: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.0-9/130547438_3615036478553689_1340653369213334307_o.jpg?_nc_cat=110&ccb=3&_nc_sid=0debeb&_nc_ohc=VTm9CXduV90AX_Pz34q&_nc_ht=scontent-sin6-3.xx&oh=fba1366471be1396a33c432555ee4389&oe=605E59AF" },
        { id: 7, name: "NGÔ XUÂN TRƯỜNG", class: "ST001", pointStudy: 9, pointActivity: 88, src: "https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.0-9/130305904_3615035628553774_7727764276608265629_o.jpg?_nc_cat=101&ccb=3&_nc_sid=0debeb&_nc_ohc=pZCyRUwpC9gAX_CrOIm&_nc_ht=scontent.fsgn4-1.fna&oh=b73171e40cdf15491fcf253911a0eba5&oe=605EC86B" },
        { id: 8, name: "DOÃN TRẦN NGỌC LINH", class: "TG001", pointStudy: 9, pointActivity: 88, src: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.0-9/130309293_3615035298553807_8010366631782395184_o.jpg?_nc_cat=110&ccb=3&_nc_sid=0debeb&_nc_ohc=xkmLaL2yYeYAX_LdTsE&_nc_ht=scontent-sin6-3.xx&oh=8536a8ad55009a6893bf6f3a222a78eb&oe=605FFE0B" },
        { id: 9, name: "NGUYỄN THẢO VY", class: "FNC02", pointStudy: 9, pointActivity: 88, src: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.0-9/130539470_3615033275220676_8978290346060287675_o.jpg?_nc_cat=110&ccb=3&_nc_sid=0debeb&_nc_ohc=nCwjBtGR7kgAX8E1437&_nc_ht=scontent-sin6-3.xx&oh=8a7b8b5a4eda0ed92cadaa17157fc886&oe=605FC3CF" },
        { id: 10, name: "LÊ NGUYỄN TRÂM ANH", class: "AD004", pointStudy: 9, pointActivity: 88, src: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.0-9/131067543_3620122291378441_2536844576809489179_o.jpg?_nc_cat=109&ccb=3&_nc_sid=0debeb&_nc_ohc=JxgXQboWIiYAX_bDpHj&_nc_ht=scontent-sin6-3.xx&oh=1dc0417f482965e865d6424e1e638fd6&oe=605FBC83" }]


    const Students2 = [
        { id: 1, name: "VÕ THỊ MỸ TRINH", class: "FN005", pointStudy: 9, pointActivity: 88, src: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/130900578_3620122254711778_7692179230036072943_o.jpg?_nc_cat=103&ccb=3&_nc_sid=0debeb&_nc_ohc=wJo-i5g6pEUAX_aRols&_nc_ht=scontent-sin6-2.xx&oh=6325d63225767c52cd421885b17b575c&oe=605E44B0" },
        { id: 2, name: "BÙI THỊ HIỀN THẢO ", class: "AE001", pointStudy: 9, pointActivity: 88, src: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/131225389_3620122164711787_2982254302474540727_o.jpg?_nc_cat=105&ccb=3&_nc_sid=0debeb&_nc_ohc=SCSo7wSX9AYAX_Rd4Jz&_nc_ht=scontent-sin6-2.xx&oh=2d5acf634139aa40f551b6ed2c6aa06a&oe=60619568" },
        { id: 3, name: "NGUYỄN THỊ HỒNG NHUNG", class: "IB002", pointStudy: 9, pointActivity: 88, src: "https://scontent-sin6-2.xx.fbcdn.net/v/t1.0-9/131545786_3630576896999647_7535434182259167051_o.jpg?_nc_cat=105&ccb=3&_nc_sid=0debeb&_nc_ohc=u9aR0-lDJbUAX8VwfPL&_nc_ht=scontent-sin6-2.xx&oh=0b484528a8e3632ea3d0e5d403da34f6&oe=60601753" },
        { id: 4, name: "DOÃN TRẦN NGỌC LINH", class: "TG001", pointStudy: 9, pointActivity: 88, src: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.0-9/130309293_3615035298553807_8010366631782395184_o.jpg?_nc_cat=110&ccb=3&_nc_sid=0debeb&_nc_ohc=xkmLaL2yYeYAX_LdTsE&_nc_ht=scontent-sin6-3.xx&oh=8536a8ad55009a6893bf6f3a222a78eb&oe=605FFE0B" },
        { id: 5, name: "NGUYỄN THẢO VY", class: "FNC02", pointStudy: 9, pointActivity: 88, src: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.0-9/130539470_3615033275220676_8978290346060287675_o.jpg?_nc_cat=110&ccb=3&_nc_sid=0debeb&_nc_ohc=nCwjBtGR7kgAX8E1437&_nc_ht=scontent-sin6-3.xx&oh=8a7b8b5a4eda0ed92cadaa17157fc886&oe=605FC3CF" },
        { id: 6, name: "LÊ NGUYỄN TRÂM ANH", class: "AD004", pointStudy: 9, pointActivity: 88, src: "https://scontent-sin6-3.xx.fbcdn.net/v/t1.0-9/131067543_3620122291378441_2536844576809489179_o.jpg?_nc_cat=109&ccb=3&_nc_sid=0debeb&_nc_ohc=JxgXQboWIiYAX_bDpHj&_nc_ht=scontent-sin6-3.xx&oh=1dc0417f482965e865d6424e1e638fd6&oe=605FBC83" }]

    const Stu2020s = Students.map((Student) => {
        return (
            <SwiperSlide key={Student.id}>
                <CardStu 
                    src = {Student.src}
                    name={Student.name}
                    class={Student.class}
                    pointStudy={Student.pointStudy}
                    pointActivity={Student.pointActivity} />
            </SwiperSlide>
        );
    });

    return (
        <div className="cpnExamplaryStu container">
            <div className="ExamplaryStu">
            <div className="Title_SV5TOT_2020">
                                <p>Gương SV5T</p>
                            </div>
                <div className="Guong_SV5TOT mt-5 mb-5">
                
                    <Swiper
                        className="swiper-container swiper_1"
                        navigation
                        pagination={{ clickable: true }}
                        slidesPerView={3}
                        slidesPerColumn={2}
                        slidesPerColumnFill="row"
                        breakpoints={{
                            300: {
                                slidesPerView: 1,
                                slidesPerColumn: 1,
                                //slidesPerColumnFill: 'row',
                                spaceBetween: 5,
                            },
                            1000: {
                                slidesPerView: 2,
                                slidesPerColumn: 1,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        {Stu2020s}
                    </Swiper>
                </div>
                {/* <!-- ---------------------------------------------------------------------------------------------------------> */}
                <div className="SV5TOT_2020">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="Title_SV5TOT_2020">
                                <p>Gương SV5T năm học 2019</p>
                            </div>
                            {/* Ds sinh vien */}

                            <ListExamplaryStu ListStu={Students} />

                        </div>
                    </div>
                </div>
                {/* <!-- ------------------------------------------------------------------------------------------ --> */}
                <div className="SV5TOT_2020">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="Title_SV5TOT_2020">
                                <p>Gương SV5T năm học 2020</p>
                            </div>
                            {/* Ds sinh vien */}

                            <ListExamplaryStu ListStu={Students} />

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ExamplaryStu;