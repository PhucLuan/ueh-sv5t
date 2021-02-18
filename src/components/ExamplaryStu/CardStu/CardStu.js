import ImgStu from '../Img/Rectangle 25.png';

const CardStu = props => {
    return (
        <div className="card">
            <img src={ImgStu} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className="card-text align-self-center">
                    <h5 className="text-center">{props.name} | {props.class}</h5>
                    <p>Thành tích nổi bật: Sinh viên 5 tốt trung ương</p>
                    <p>Điểm học tập:{props.pointStudy} &ensp; Điểm rèn luyện: {props.pointActivity}</p>
                </div>
            </div>
        </div>
    );
}

export default CardStu;
