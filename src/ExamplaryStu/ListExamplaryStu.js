import CardStu from './CardStu/CardStu';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


const ListExamplaryStu = props => {

    const Students = [...props.ListStu];

    const Stu2020s = Students.map((Student) => {
        return (
            <SwiperSlide key={Student.id}>
                <CardStu name={Student.name}
                    class={Student.class}
                    pointStudy={Student.pointStudy}
                    pointActivity={Student.pointActivity} />
            </SwiperSlide>
        );
    });

    return (
        <Swiper
            className="swiper-container swiper_2"
            navigation
            pagination={{ clickable: true }}
            slidesPerView={3}
            slidesPerColumn={2}
            slidesPerColumnFill="row"
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    slidesPerColumn: 3,
                    slidesPerColumnFill: 'row',
                    spaceBetween: 5,
                },
                600: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    slidesPerColumnFill: 'row',
                    spaceBetween: 5,
                },
                1000: {
                    slidesPerView: 3,
                    slidesPerColumn: 2,
                    spaceBetween: 5,
                },
            }}
        >
            {Stu2020s}
        </Swiper>
    );
}
export default ListExamplaryStu;
