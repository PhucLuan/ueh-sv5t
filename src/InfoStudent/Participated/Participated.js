import '../Participated/Participated.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Participated = () => {

    const [DaoDucTots, setDaoDucTots] = useState([]);
    const [HocTapTots, setHocTapTots] = useState([]);
    // const [TheLucTots, setTheLucTots] = useState([]);
    // const [HoiNhapTots, setHoiNhapTots] = useState([]);
    // const [TinhNguyenTots, setTinhNguyenTots] = useState([]);


    useEffect(() => {

        axios.get('https://601ce4671a9c220017060f4b.mockapi.io/DaoDucTots')
            .then(res => {
                setDaoDucTots([...res.data]);
            })
            .catch(error => console.log(error));

        axios.get('https://601ce4671a9c220017060f4b.mockapi.io/HocTapTots')
            .then(res => {
                setHocTapTots([...res.data]);
            })
            .catch(error => console.log(error));
    }, [])

    //Đạo đức tốt
    const RenDaoDucTot = DaoDucTots.map((obj, i) => {
        return (
            <tr>
                <th className="text-center" scope="row">{i + 1}</th>
                <td className="text-center">{obj.Time}</td>
                <td>{obj.Activity}</td>
                <td>{obj.Note}</td>
            </tr>
        );
    });

    const RenHocTapTot = HocTapTots.map((obj, i) => {
        return (
            <tr>
                <th className="text-center" scope="row">{i + 1}</th>
                <td className="text-center">{obj.Time}</td>
                <td>{obj.Activity}</td>
                <td>{obj.Note}</td>
            </tr>
        );
    });

    return(
        <div className = "Participated">
            <div className="Title_GT">
                <div className="row">
                    <p>CHƯƠNG TRÌNH ĐÃ THAM GIA</p>
                </div>
            </div>
            {/* <!-- ------------------------------------------------------------------------------------------------------> */}
            <div className="LIST_CT">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="DaoDuc-tab" data-bs-toggle="tab" href="#DaoDuc" role="tab" aria-controls="DaoDuc" aria-selected="true">Đạo Đức Tốt</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="HocTap-tab" data-bs-toggle="tab" href="#HocTap" role="tab" aria-controls="HocTap" aria-selected="false">Học Tập Tốt</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="TheLuc-tab" data-bs-toggle="tab" href="#TheLuc" role="tab" aria-controls="TheLuc" aria-selected="false">Thể Lực Tốt</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="HoiNhap-tab" data-bs-toggle="tab" href="#HoiNhap" role="tab" aria-controls="HoiNhap" aria-selected="false">Hội Nhập Tốt</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="TinhNguyen-tab" data-bs-toggle="tab" href="#TinhNguyen" role="tab" aria-controls="TinhNguyen" aria-selected="false">Tình Nguyện Tốt</a>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="DaoDuc" role="tabpanel" aria-labelledby="DaoDuc-tab">
                        <table className="table table-hover ">
                            <thead className="table-light">
                                <tr>
                                    <th className="text-center" scope="col">STT</th>
                                    <th className="text-center" scope="col">Thời Gian</th>
                                    <th scope="col">Chương Trình</th>
                                    <th scope="col">Ghi Chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                {RenDaoDucTot}
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="HocTap" role="tabpanel" aria-labelledby="HocTap-tab">
                        <table className="table table-hover ">
                            <thead className="table-light">
                                <tr>
                                    <th className="text-center" scope="col">STT</th>
                                    <th className="text-center" scope="col">Thời Gian</th>
                                    <th scope="col">Chương Trình</th>
                                    <th className="hidden-sm" scope="col">Ghi Chú</th>
                                </tr>
                            </thead>
                            <tbody>
                                {RenHocTapTot}
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="TheLuc" role="tabpanel" aria-labelledby="TheLuc-tab">
                        <table className="table table-hover ">
                            <thead className="table-light">
                                <tr>
                                    <th className="text-center" scope="col">STT</th>
                                    <th className="text-center" scope="col">Thời Gian</th>
                                    <th scope="col">Chương Trình</th>
                                    <th scope="col">Ghi Chú</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="HoiNhap" role="tabpanel" aria-labelledby="HoiNhap-tab">
                        <table className="table table-hover ">
                            <thead className="table-light">
                                <tr>
                                    <th className="text-center" scope="col">STT</th>
                                    <th className="text-center" scope="col">Thời Gian</th>
                                    <th scope="col">Chương Trình</th>
                                    <th scope="col">Ghi Chú</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="TinhNguyen" role="tabpanel" aria-labelledby="TinhNguyen-tab">
                        <table className="table table-hover ">
                            <thead className="table-light">
                                <tr>
                                    <th className="text-center" scope="col">STT</th>
                                    <th className="text-center" scope="col">Thời Gian</th>
                                    <th scope="col">Chương Trình</th>
                                    <th scope="col">Ghi Chú</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="TinhNguyen" role="tabpanel" aria-labelledby="TinhNguyen-tab">
                        <table className="table table-hover ">
                            <thead className="table-light">
                                <tr>
                                    <th className="text-center" scope="col">STT</th>
                                    <th className="text-center" scope="col">Thời Gian</th>
                                    <th scope="col">Chương Trình</th>
                                    <th scope="col">Ghi Chú</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Participated;