import Rectangle from '../Img/Rectangle 27.png';
import final_01 from "./Img/final-01.png";
import final_02 from "./Img/final-02.png";
import final_03 from "./Img/final-03.png";
import final_04 from "./Img/final-04.png";
import final_05 from "./Img/final-05.png";
import final_06 from "./Img/final-06.png";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const carousel_InfoStudent = () => {
    return (
        <div className="carousel_InfoStudent">
            {/* <!-- ------------------------------------------------------------------------------------------------------> */}
            <div className="FILE_SV5TOT mt-5 mb-5" style = {{background : 'white'},{borderRadius : '10px'},{height : 'auto'}}>
                <div className="row ">
                    <ul className="Title_File mt-3">
                        <li className="Title_File_Left"><p>Hồ sơ sinh viên 5 tốt</p></li>
                        <li className="Title_File_Right"><p>Xem đầy đủ hồ sơ tại đây</p></li>
                    </ul>
                </div>
                <div className="container carousel-InfoStudent">
                    <Swiper
                        className="swiper-container-InfoStudent-carousel"
                        slidesPerView={1}
                        loop="true"
                        pagination={{ clickable: true }}
                        navigation
                        breakpoints={{

                            768: {
                                slidesPerView: 1
                            },
                            1000: {
                                slidesPerView: 3,
                            }
                        }}
                    >
                        <SwiperSlide>
                            <div>
                                <div className="Img_File text-center">
                                    <img src={final_01} className="img-responsive img-fluid" alt="Image1" />
                                </div>
                                <div className="Title_Img">
                                    <p>Thông tin cá nhân sinh viên</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="Img_File text-center">
                                    <img src={final_04} className="img-responsive img-fluid" alt="Image2" />
                                </div>
                                <div className="Title_Img">
                                    <p>Thể lực tốt</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="Img_File text-center">
                                    <img src={final_02} className="img-responsive img-fluid" alt="Image1" />
                                </div>
                                <div className="Title_Img">
                                    <p>Học tập tốt</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="Img_File text-center">
                                    <img src={final_03} className="img-responsive img-fluid" alt="Image1" />
                                </div>
                                <div className="Title_Img">
                                    <p>Đạo đức tốt</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="Img_File text-center">
                                    <img src={final_05} className="img-responsive img-fluid" alt="Image1" />
                                </div>
                                <div className="Title_Img">
                                    <p>Hội nhập tốt</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <div className="Img_File text-center">
                                    <img src={final_06} className="img-responsive img-fluid" alt="Image1" />
                                </div>
                                <div className="Title_Img">
                                    <p>Tình nguyện tốt</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
export default carousel_InfoStudent;