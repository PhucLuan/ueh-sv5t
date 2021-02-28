import "./SinhVienTieuBieu.css";
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const SinhVienTieuBieu = () => {
    // useEffect(() => {

    //     var Swiper = new Swiper('.swiper_1', {
    //         slidesPerView: 2,
    //         spaceBetween: 30,
    //         pagination: {
    //           el: '.swiper-pagination1',
    //           clickable: true,
    //         },
    //         breakpoints: {
    //         // when window width is >= 320px
    //         320: {
    //           slidesPerView: 1,
    //           spaceBetween: 20
    //         },
    //         // when window width is >= 480px
    //         480: {
    //           slidesPerView: 1,
    //           spaceBetween: 30
    //         },
    //         // when window width is >= 640px
    //         640: {
    //           slidesPerView: 2,
    //           spaceBetween: 40
    //         }
    //       }
    //       });

    //     var Swiper = new Swiper('.swiper_2', {
    
    //         speed:800,
    //         slidesPerView: 3, // or 'auto'
    //         slidesPerColumn: 2,
    //         // slidesPerGroup:3,
    //         slidesPerColumnFill: 'row' ,
    //         // direction: 'horizontal',
    //         spaceBetween: 5,
    //         grabCursor: true,
          
    //         pagination: {
    //           el: '.swiper-pagination2',
    //           clickable: true,
    //         },
    //         breakpoints: {
    //       // when window width is >= 320px
    //       320: {
    //         slidesPerView: 1,
    //         slidesPerColumn: 3,
    //         slidesPerColumnFill: 'row' ,
    //         spaceBetween: 5, 
    //       },
    //       600: {
    //         slidesPerView: 3,
    //         slidesPerColumn: 2,
    //         slidesPerColumnFill: 'row' ,
    //         spaceBetween: 5, 
    //       },
    //       1000: {
    //         slidesPerView: 3, 
    //         slidesPerColumn: 2,
    //         spaceBetween: 5,
    //       },
          
    //     }
    //     });
    // }, [])
    return(
        <div className = "SinhVenTieuBieu">
            <div class="GuongSVcpn">     
        <div class="Guong_SV5TOT mt-5 mb-5">    
            <div class="row ">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div class="Title_SV5TOT_TB">
                    <p>TẤM GƯƠNG SINH VIÊN 5 TỐT</p>
                  </div>
                </div>
            </div>
            <div class="swiper-container swiper_1">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="card">
                    <img src="./img/Rectangle 25.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <div class="card-text align-self-center">
                        <h5 class="text-center">TRẦN HỮU LỘC | EC003-K43</h5>
                        <p>Thành tích nổi bật: Sinh viên 5 tốt trung ương</p>
                        <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card">
                    <img src="./img/Rectangle 25.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <div class="card-text align-self-center">
                        <h5 class="text-center">TRẦN HỮU LỘC | EC003-K43</h5>
                        <p>Thành tích nổi bật: Sinh viên 5 tốt trung ương</p>
                        <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card">
                    <img src="./img/Rectangle 25.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <div class="card-text align-self-center">
                        <h5 class="text-center">TRẦN HỮU LỘC | EC003-K43</h5>
                        <p>Thành tích nổi bật: Sinh viên 5 tốt trung ương</p>
                        <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card">
                    <img src="./img/Rectangle 25.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <div class="card-text align-self-center">
                        <h5 class="text-center">TRẦN HỮU LỘC | EC003-K43</h5>
                        <p>Thành tích nổi bật: Sinh viên 5 tốt trung ương</p>
                        <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card">
                    <img src="./img/Rectangle 25.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <div class="card-text align-self-center">
                        <h5 class="text-center">TRẦN HỮU LỘC | EC003-K43</h5>
                        <p>Thành tích nổi bật: Sinh viên 5 tốt trung ương</p>
                        <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="card">
                    <img src="./img/Rectangle 25.png" class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <div class="card-text align-self-center">
                        <h5 class="text-center">TRẦN HỮU LỘC | EC003-K43</h5>
                        <p>Thành tích nổi bật: Sinh viên 5 tốt trung ương</p>
                        <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination swiper-pagination1"></div>
            </div>    
        </div>
{/* <!-- ---------------------------------------------------------------------------------------------------------> */}
        <div class="SV5TOT_2020">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="Title_SV5TOT_2020">
                <p>Gương SV5T năm học 2020</p>
              </div>
            </div>
          </div>
          <div class="swiper-container swiper_2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="SV5T_2020_item">
                  <div class="Img_SV5T_2020 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2020">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2020_item">
                  <div class="Img_SV5T_2020 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2020">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2020_item">
                  <div class="Img_SV5T_2020 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2020">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2020_item">
                  <div class="Img_SV5T_2020 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2020">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2020_item">
                  <div class="Img_SV5T_2020 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2020">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2020_item">
                  <div class="Img_SV5T_2020 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2020">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2020_item">
                  <div class="Img_SV5T_2020 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2020">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2020_item">
                  <div class="Img_SV5T_2020 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2020">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2020_item">
                  <div class="Img_SV5T_2020 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2020">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2020_item">
                  <div class="Img_SV5T_2020 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2020">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2020_item">
                  <div class="Img_SV5T_2020 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2020">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2020_item">
                  <div class="Img_SV5T_2020 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2020">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div> 
            </div>
            {/* <!-- Add Pagination --> */}
            <div class="swiper-pagination swiper-pagination2"></div>
          </div>
        </div>
{/* <!-- ------------------------------------------------------------------------------------------ --> */}
        <div class="SV5TOT_2019">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="Title_SV5TOT_2019">
                <p>Gương SV5T năm học 2019</p>
              </div>
            </div>
          </div>
          <div class="swiper-container swiper_2">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="SV5T_2019_item">
                  <div class="Img_SV5T_2019 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2019">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2019_item">
                  <div class="Img_SV5T_2019 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2019">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2019_item">
                  <div class="Img_SV5T_2019 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2019">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2019_item">
                  <div class="Img_SV5T_2019 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2019">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2019_item">
                  <div class="Img_SV5T_2019 ">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2019">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2019_item">
                  <div class="Img_SV5T_2019">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2019">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2019_item">
                  <div class="Img_SV5T_2019">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2019">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2019_item">
                  <div class="Img_SV5T_2019">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2019">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2019_item">
                  <div class="Img_SV5T_2019">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2019">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2019_item">
                  <div class="Img_SV5T_2019">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2019">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2019_item">
                  <div class="Img_SV5T_2019">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2019">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="SV5T_2019_item">
                  <div class="Img_SV5T_2019">
                    <img src="./img/Rectangle 25.png" class="img-responsive img-fluid" alt="image"/>
                  </div>
                  <div class="Title_SV5T_2019">
                    <h5>TRẦN HỮU LỘC | EC003-K43</h5>
                    <p>Điểm học tập:7,745 &ensp; Điểm rèn luyện: 89,5</p>
                  </div>
                </div>
              </div> 
            </div>
            {/* <!-- Add Pagination --> */}
            <div class="swiper-pagination swiper-pagination2"></div>
          </div>
        </div>
      </div>
        </div>
    );
}
export default SinhVienTieuBieu;