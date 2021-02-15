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

    const [Students, setStudents] = useState([]);
    
    //const [Check, setCheck] = useState(false);
    //Gương sv5t 2020
    //const Students = []
    /*{id: 1,name: "Name 1", class: "ST001", pointStudy: 9, pointActivity: 88},
        {id: 1,name: "Name 1", class: "ST001", pointStudy: 9, pointActivity: 88},
        {id: 1,name: "Name 1", class: "ST001", pointStudy: 9, pointActivity: 88},
        {id: 1,name: "Name 1", class: "ST001", pointStudy: 9, pointActivity: 88},
        {id: 1,name: "Name 1", class: "ST001", pointStudy: 9, pointActivity: 88},
        {id: 1,name: "Name 1", class: "ST001", pointStudy: 9, pointActivity: 88},
        {id: 1,name: "Name 1", class: "ST001", pointStudy: 9, pointActivity: 88},
        {id: 1,name: "Name 1", class: "ST001", pointStudy: 9, pointActivity: 88}, */

    // const Stu2020s = Students.map((Student) => {
    //     return (
    //         <SwiperSlide key={Student.id}>
    //             <CardStu name={Student.name}
    //                 class={Student.class}
    //                 pointStudy={Student.pointStudy}
    //                 pointActivity={Student.pointActivity} />
    //         </SwiperSlide>
    //     );
    // });

    useEffect(() => {

        axios.get('https://601ce4671a9c220017060f4b.mockapi.io/ExamplaryStudents')
            .then(res => {
                setStudents([...res.data]);
            })
            .catch(error => console.log(error));
    }, [])

    function GetData() {
        var Students = [];
        axios.get('https://601ce4671a9c220017060f4b.mockapi.io/ExamplaryStudents')
        .then(res => {
            Students = [...res.data];
        });
        return Students;
    }
    var Demo = [];
    return (
        <div className="cpnExamplaryStu">
            <div className="ExamplaryStu">
                <div className="Guong_SV5TOT mt-5 mb-5">
                    {/* <div className="row ">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="Title_SV5TOT_TB">
                                <p>TẤM GƯƠNG SINH VIÊN 5 TỐT</p>
                            </div>
                        </div>
                    </div>

                    <Swiper
                        className="swiper-container swiper_1"
                        slidesPerView={2}
                        slidesPerColumn={1}
                        slidesPerColumnFill="row"
                        navigation
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <CardStu />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardStu />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardStu />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardStu />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardStu />
                        </SwiperSlide>

                        <SwiperSlide>
                            <CardStu />
                        </SwiperSlide>
                    </Swiper> */}
                </div>
                {/* <!-- ---------------------------------------------------------------------------------------------------------> */}
                <div className="SV5TOT_2020">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="Title_SV5TOT_2020">
                                <p>Gương SV5T năm học 2020</p>
                            </div>
                            {/* Ds sinh vien */}

                            <ListExamplaryStu ListStu = {Students}/>

                        </div>
                    </div>


                </div>
                {/* <!-- ------------------------------------------------------------------------------------------ --> */}
            </div>
        </div>
    );
}

export default ExamplaryStu;
