import '../News/News.css';
import areaimg1 from "./Img/area-img1.png";
import contentpic from "./Img/contentpic.png";
import smallcontent1 from "./Img/small-content1.png";
import smallcontent2 from "./Img/small-content2.png";
import smallcontent3 from "./Img/small-content3.png";
import React, { useState } from 'react';
import {Redirect} from "react-router-dom";

const News = () => {

    // size="2px" color="#FF6D4D"
    const lineStyle = {
        height : '2px',
        backgroundColor : '#FF6D4D',
        margin : '0'
    };

    const line2Style = {
        height : '2px',
        backgroundColor: '#005495',
        margin : '0'
    };

    const [isActiveLink, setActiveLink] = useState();

    if (isActiveLink === true) {
        return(<Redirect to="/InfoEvent" />);
    }

    return (

        <div className="content">
            <div className="homepage-title">
                <p>HỆ THỐNG QUẢN LÝ SINH VIÊN 5 TỐT </p>
            </div>
            <div className="homepage-img1">
                <img src={contentpic} alt='contentpic'/>
            </div>
            <div className="content-text">
                <p>Cuộc vận động "Sinh viên 5 tốt" là cuộc vận động lớn trong sinh viên cả nước; là danh hiệu Sinh viên có uy tín,
                là minh chứng cho sự nỗ lực, cố gắng trong mỗi cá nhân sinh viên để rèn luyện, hoàn thiện mình ở 05 tiêu chí
                "Học tập tốt - Đạo đức tốt - Kỹ năng tốt - Hội nhập tốt - Thể lực tốt". Quy định về tiêu chuẩn xét chọn Danh
                hiệu "Sinh viên 5 tốt" của trường Đại Học Kinh tế thành phố Hồ Chí Minh do Ban Thư ký Hội sinh viên Việt Nam
                trường Đại học Kinh tế TP.Hồ Chí Minh ban hành. Danh hiệu được áp dụng cho cá nhân là sinh viên Việt Nam hệ Đại
        học chính quy đang học tập tại trường.</p>
            </div>
            {/* <!-- Chương trình nổi bật --> */}
            <div className="area-news-1">
                <div className="header-1">
                    <p> CHƯƠNG TRÌNH SẮP DIỄN RA</p>
                </div>
                <div className="line">
                    <hr style={lineStyle}/>
                </div>
                <div className="big-content">
                    <div className="bigcontent-img1">
                        <img src={areaimg1} alt='areaimg1'/>
                    </div>
                    <div className="bigcontent-title">
                        <a href="https://www.internship.edu.vn/global-talents-2020-chuyen-doi-so-cho-tuong-lai/"> GLOBAL 2020 - CHUYỂN ĐỔI SỐ CHO TƯƠNG LAI</a>
                    </div>
                    <div className="bigcontent-text">
                        <p> Các bạn sinh viên khi xem livestream và tham gia bình chọn sẽ được tính là tham gia Vòng Chung Kết và được
            cập nhật mã vạch. </p>
                    </div>
                </div>
                <div className="small-content">
                    <div className="small-content1">
                        <div className="img-smallcontent">
                            <img src={smallcontent1} alt='smallcontent1'/>
                        </div>
                        <div className="title-smallcontent">
                            <p onClick={() => setActiveLink(true)}> TÌM KIẾM CEO TƯƠNG LAI KHOA QUẢN TRỊ LẦN THỨ 9</p>
                        </div>
                    </div>
                    <div className="small-content2">
                        <div className="img-smallcontent">
                            <img src={smallcontent2} alt='smallcontent2'/>
                        </div>
                        <div className="title-smallcontent">
                            <p>CMO TALKING MARGROUP KHOA KINH DOANH QUỐC TẾ MARKETING</p>
                        </div>
                    </div>
                    <div className="small-content3">
                        <div className="img-smallcontent">
                            <img src={smallcontent3} alt='smallcontent3'/>
                        </div>
                        <div className="title-smallcontent">
                            <p>TIẾNG HÁT SINH VIÊN KHOA KINH TẾ LẦN THỨ 10</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Tin tức mới --> */}
            <div className="area-news-2">
                <div className="header-2">
                    <p> TIN TỨC MỚI </p>
                </div>
                <div className="line2">
                    <hr style= {line2Style} />
                </div>
                <div className="big-content2">
                    <div className="bigcontent-img2">
                        <img src={areaimg1} alt='areaimg1'/>
                    </div>
                    <div className="bigcontent2-title">
                        <p> GLOBAL 2020 - CHUYỂN ĐỔI SỐ CHO TƯƠNG LAI</p>
                    </div>
                    <div className="bigcontent2-text">
                        <p> Các bạn sinh viên khi xem livestream và tham gia bình chọn sẽ được tính là tham gia Vòng Chung Kết và được
            cập nhật mã vạch. </p>
                    </div>
                </div>
                <div className="small-content">
                    <div className="small-content1">
                        <div className="img-smallcontent">
                            <img src={smallcontent1} alt='smallcontent1'/>
                        </div>
                        <div className="title-smallcontent">
                            <p> TÌM KIẾM CEO TƯƠNG LAI KHOA QUẢN TRỊ LẦN THỨ 9</p>
                        </div>
                    </div>
                    <div className="small-content2">
                        <div className="img-smallcontent">
                            <img src={smallcontent2} alt='smallcontent2'/>
                        </div>
                        <div className="title-smallcontent">
                            <p>CMO TALKING MARGROUP KHOA KINH DOANH QUỐC TẾ MARKETING</p>
                        </div>
                    </div>
                    <div className="small-content3">
                        <div className="img-smallcontent">
                            <img src={smallcontent3} alt='smallcontent3' />
                        </div>
                        <div className="title-smallcontent">
                            <p>TIẾNG HÁT SINH VIÊN KHOA KINH TẾ LẦN THỨ 10</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default News;