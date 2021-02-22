import './Homepage.css';
import area_img1 from './Img/area-img1.png';
import pic1 from './Img/pic1.png';
import right_content_img1 from './Img/right_content-img1.png';
import right_content_img2 from './Img/right_content-img2.png';
import right_content_img3 from './Img/right_content-img3.png';
import sv5t from './Img/sv5t.png';
import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);



const Homepage = () => {

    const [isActiveLink, setActiveLink] = useState();

    if (isActiveLink === true) {
        return(<Redirect to="/InfoEvent" />);
    }

    return (
        // <!-- Content -->
        <div className="container Homepage">
            <div className="content_1">
                <Swiper
                    className="swiper-container swiper_2"
                    navigation
                    pagination={{ clickable: true }}
                    loop="true"
                    slidesPerView={1}
                    slidesPerColumnFill="row">
                    <SwiperSlide>
                        <div className="card_1">
                            <div className="card_1-title">
                                <div className="card_1-text align-self-center">
                                    <h1 className="text-center">HỆ THỐNG QUẢN LÝ SINH VIÊN 5 TỐT</h1>
                                </div>
                            </div>
                            <div className="card_1-img">
                                <img className="img-fluid" src={pic1} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card_1">
                            <div className="card_1-title">
                                <div className="card_1-text align-self-center">
                                    <h1 className="text-center">SINH VIÊN 5 TỐT LÀ GÌ?</h1>
                                </div>
                            </div>
                            <div className="card_1-img">
                                <img className="img-fluid" src={sv5t} />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card_1">
                            <div className="card_1-title">
                                <div className="card_1-text align-self-center">
                                    <h1 className="text-center">SINH VIÊN 5 TỐT LÀ GÌ?</h1>
                                </div>
                            </div>
                            <div className="card_1-img">
                                <img className="img-fluid" src={sv5t} />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="content_1-text">
                    <p>&emsp;&emsp;Cuộc vận động "Sinh viên 5 tốt" là cuộc vận động lớn trong sinh viên cả nước; là danh hiệu Sinh viên có uy tín, là minh chứng cho sự nỗ lực, cố gắng trong mỗi cá nhân sinh viên để rèn luyện, hoàn thiện mình ở 05 tiêu chí "Học tập tốt - Đạo đức tốt - Kỹ năng tốt - Hội nhập tốt - Thể lực tốt". Quy định về tiêu chuẩn xét chọn Danh hiệu "Sinh viên 5 tốt" của trường Đại Học Kinh tế thành phố Hồ Chí Minh do Ban Thư ký Hội sinh viên Việt Nam trường Đại học Kinh tế TP.Hồ Chí Minh ban hành. Danh hiệu được áp dụng cho cá nhân là sinh viên Việt Nam hệ Đại học chính quy đang học tập tại trường.</p>
                </div>
            </div>
            <div className="content_2-header">
                <div className="text">
                    <p>CHƯƠNG TRÌNH SẮP DIỄN RA</p>
                </div>
                <div className="abc">
                    abc
                      </div>
            </div>
            <div className="container content_2">
                <div className="row row_content-2">
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 content_2-left">
                        <div className="content_2-img">
                            <img src={area_img1} />
                        </div>
                        <div className="content_2-left-title" onClick={() => setActiveLink(true)}>
                            GLOBAL TALENT - CHUYỂN ĐỔI SỐ CHO TƯƠNG LAI
                        </div>
                        <div className="content_2-left-text">
                            <p> Các bạn sinh viên khi xem livestream và tham gia bình chọn sẽ được tính là tham gia Vòng Chung Kết và được cập nhật mã vạch.</p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 px-md-5 content_2-right">
                        <div className="right_content-top">
                            <div className="right_content-img">
                                <img src={right_content_img1} />
                            </div>
                            <div className="right_content-text" onClick={() => setActiveLink(true)}>
                                TÌM KIẾM CEO KHOA QUẢN TRỊ LẦN THỨ 9
                            </div>
                        </div>
                        <div className="right_content">
                            <div className="right_content-img">
                                <img src={right_content_img2} />
                            </div>
                            <div className="right_content-text" onClick={() => setActiveLink(true)}>
                                CMO TALKING MARGROUP KHOA KINH DOANH QUỐC TẾ MARKETING
                          </div>
                        </div>
                        <div className="right_content">
                            <div className="right_content-img">
                                <img src={right_content_img3} />
                            </div>
                            <div className="right_content-text" onClick={() => setActiveLink(true)}>
                                TIẾNG HÁT SINH VIÊN KHOA KINH TẾ LẦN THỨ 10
                          </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="content_3-header">
                <div className="text-2">
                    <p>TIN TỨC MỚI</p>
                </div>
                <div className="abc">
                    abc
              </div>
            </div>
            <div className="container content_3">
                <div className="row row content_3">
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 content_2-left">
                        <div className="content_2-img">
                            <img src={area_img1} />
                        </div>
                        <div className="content_2-left-title" onClick={() => setActiveLink(true)}>
                            GLOBAL TALENT - CHUYỂN ĐỔI SỐ CHO TƯƠNG LAI
                        </div>
                        <div className="content_2-left-text">
                            <p> Các bạn sinh viên khi xem livestream và tham gia bình chọn sẽ được tính là tham gia Vòng Chung Kết và được cập nhật mã vạch.</p>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 px-md-5 content_2-right">
                        <div className="right_content-top">
                            <div className="right_content-img">
                                <img src={right_content_img1} />
                            </div>
                            <div className="right_content-text" onClick={() => setActiveLink(true)}>
                                TÌM KIẾM CEO KHOA QUẢN TRỊ LẦN THỨ 9
                            </div>
                        </div>
                        <div className="right_content">
                            <div className="right_content-img">
                                <img src={right_content_img2} />
                            </div>
                            <div className="right_content-text" onClick={() => setActiveLink(true)}>
                                CMO TALKING MARGROUP KHOA KINH DOANH QUỐC TẾ MARKETING
                          </div>
                        </div>
                        <div className="right_content">
                            <div className="right_content-img">
                                <img src={right_content_img3} />
                            </div>
                            <div className="right_content-text" onClick={() => setActiveLink(true)}>
                                TIẾNG HÁT SINH VIÊN KHOA KINH TẾ LẦN THỨ 10
                          </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Homepage;