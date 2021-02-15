import '../InfoEvent/InfoEvent.css'
import content_img from './Img/content_img.png';
import content_list_img from './Img/content_list_img.png';
import chuongtrinh_noibat from './Img/chuongtrinh_noibat.png';


const InfoEvent = () => {
    return (
        <div className="container InfoEvent">
            <div className="row row_1">
                {/* <!-- Ảnh đầu trang --> */}
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                    <img className="img-top img-fluid" src={chuongtrinh_noibat} />
                </div>
                {/* <!-- Nội dung bên phải ảnh  --> */}
                <div className="col-md-5 col-lg-5">
                    <div className="container-content">
                        <div className="container-content-text">
                            <div className="title-chuongtrinh">
                                GLOBAL TALENT - CHUYỂN ĐỔI SỐ CHO TƯƠNG LAI
                        </div>
                            <div className="text-chuongtrinh">
                                Tiêu chí: Học tập tốt <br />
                            Thời gian: 20/10/2019 - 20/10/2020
                        </div>
                        </div>
                        <div className="button Detail">
                            <button type="button">XEM THÔNG TIN CHI TIẾT</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row_2">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 content">
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 description-content">
                        <div className="title-description">
                            Mô tả
                    </div>
                        <div className="description-text">
                            Vậy là chưa đầy 1 giờ nữa "LIVESTREAM CHUNG KẾT GLOBAL TALENTS 2020" sẽ diễn ra! <br />
                        Thời gian: 14h00 ngày 14/06/2020 <br />
                        Hình thức: Livestream trên fanpage Global Talents 2020 <br />
                        Các bạn sinh viên khi xem livestream và tham gia bình chọn sẽ được tính là tham gia Vòng Chung Kết và được cập nhật mã vạch.
                            <br /> <br /> <br />
                        Vậy là chưa đầy 1 giờ nữa "LIVESTREAM CHUNG KẾT GLOBAL TALENTS 2020" sẽ diễn ra! <br />
                        Thời gian: 14h00 ngày 14/06/2020 <br />
                        Hình thức: Livestream trên fanpage Global Talents 2020 <br />
                        Các bạn sinh viên khi xem livestream và tham gia bình chọn sẽ được tính là tham gia Vòng Chung Kết và được cập nhật mã vạch.
                    </div>
                    </div>
                    <div className="content-list">
                        <div className="title-description">
                            Các chương trình đang diễn ra
                    </div>
                        <div className="swiper-container swiper_1">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="card">
                                        <div className="img-card">
                                            <img src={content_img} />
                                        </div>
                                        <div className="card-text">
                                            Tìm kiếm CEO tương lai
                                    </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card">
                                        <div className="img-card">
                                            <img src={content_list_img} />
                                        </div>
                                        <div className="card-text">
                                            UEH trong tôi
                                    </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card">
                                        <div className="img-card">
                                            <img src={content_list_img} />
                                        </div>
                                        <div className="card-text">
                                            Pháp lý 2020
                                    </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card">
                                        <div className="img-card">
                                            <img src={content_list_img} />
                                        </div>
                                        <div className="card-text">
                                            Tìm kiếm CEO tương lai
                                    </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card">
                                        <div className="img-card">
                                            <img src={content_list_img} />
                                        </div>
                                        <div className="card-text">
                                            UEH trong tôi
                                    </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="card">
                                        <div className="img-card">
                                            <img src={content_list_img} />
                                        </div>
                                        <div className="card-text">
                                            Pháp lý 2020
                                    </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Add pagination --> */}
                            <div className="swiper-pagination">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-lg-5">
                </div>
            </div>
        </div>
    );
}
export default InfoEvent;