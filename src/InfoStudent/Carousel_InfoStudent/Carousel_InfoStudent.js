import Rectangle from '../Img/Rectangle 27.png';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const carousel_InfoStudent = () => {
    return (
        <div className = "carousel_InfoStudent">
            {/* <!-- ------------------------------------------------------------------------------------------------------> */}
            <div className="FILE_SV5TOT mt-5 mb-5">
                <div className="row ">
                    <ul className="Title_File mt-3">
                        <li className="Title_File_Left"><p>Hồ sơ sinh viên 5 tốt</p></li>
                        <li className="Title_File_Right"><p>Xem đầy đủ hồ sơ tại đây</p></li>
                    </ul>
                </div>
                <div className="container carousel-InfoStudent">
                    <Swiper
                        className="swiper-container-InfoStudent"
                        slidesPerView={3}
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
                            <div className="Img_File text-center">
                                <img src={Rectangle} className="img-responsive" alt="Image1" />
                            </div>
                            <div className="Title_Img">
                                <p>Thông tin cá nhân sinh viên</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="Img_File text-center">
                                <img src={Rectangle} className="img-responsive" alt="Image2" />
                            </div>
                            <div className="Title_Img">
                                <p>Đạo đức tốt</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="Img_File text-center">
                                <img src={Rectangle} className="img-responsive" alt="Image3" />
                            </div>
                            <div className="Title_Img">
                                <p>Học tập tốt</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="Img_File text-center">
                                <img src={Rectangle} className="img-responsive" alt="Image4" />
                            </div>
                            <div className="Title_Img">
                                <p>Thể lực tốt</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="Img_File text-center">
                                <img src={Rectangle} className="img-responsive" alt="Image5" />
                            </div>
                            <div className="Title_Img">
                                <p>Hội nhập tốt</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="Img_File text-center">
                                <img src={Rectangle} className="img-responsive" alt="Image6" />
                            </div>
                            <div className="Title_Img">
                                <p>Tình nguyện tốt</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
export default carousel_InfoStudent;