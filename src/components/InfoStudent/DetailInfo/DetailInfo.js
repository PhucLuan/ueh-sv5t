import './DetailInfo.css';
import people from './Img/people.png';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DetailInfo = () => {

    const [InfoSinhVien, setInfoSinhVien] = useState(
		{
			Mssv: "",
			HoTen: "",
			NgaySinh: null,
			GioiTinh: null,
			NoiSinh: null,
			Sdt: null,
			Lop: null,
			DonVi: null,
			Khoa: null,
			Email: "",
			Iduser: null,
			DonViNavigation: null,
			IduserNavigation: null,
			Diem: [],
			KqTheoTieuchi: [],
			ThamgiaChuongtrinh: [],
			ThoidiemSvThamgia: [],
			ThuchienTieuchuan: []
		}
	);

    const HandelUpdate = () => {
        alert("Chức năng tạm thời bị đóng, sẽ mở lại sau khi hoàn thành các bước bảo mật");
        // console.log("Ahihi");
        // axios({
        //     method: 'put',
        //     url: 'https://localhost:44391/api/SinhViens/31181020049',
        //     header: {"Access-Control-Allow-Methods": "*"}, 
        //     data: {
        //         "Mssv": "31181020049",
        //         "HoTen": "Ahihi",
        //         "NgaySinh": "2021-02-28T09:19:29.161Z",
        //         "GioiTinh": "Nam",
        //         "NoiSinh": "Tây Ninh",
        //         "Sdt": "0987654321",
        //         "Lop": "ST001",
        //         "DonVi": "BIT",
        //         "Khoa": "K44",
        //         "Email": "luannguyen287.k44@st.ueh.edu.vn"
        //       }
        //   }).then(res => console.log(res));
    }

    useEffect(() => {
		var myHeaders = new Headers();
		myHeaders.append("Cookie", ".AspNetCore.Identity.Application=CfDJ8H6WXzF55y1NtxBU_nMtEQtpwcT1Fkj6Cu5oCuq_5UszliQ1si0pXIOw6MJfK_rY4ms_iAeK8aFqcY0P2oA2kEbtgzhsrd7wPEn-1oZJ9Qx9n_igd1KGKdMWPfukN_3b1VvOohYBO_cmeCgURaXyHljyYWvdrKjxmTEX2VbRpFPy3f8Wfp7xl8IPg2LK7oCuw3RnRxw2o7KwtFFloGLwW0NgivFN_2d7dqkRZhv5uvbxL3fM6FSD6bShr4kUT9siqIWm-tWPN-rU0UwjOJ3qF1jMIrkNKdbx9IlGAETP3uY7e2kyyTE5G4D_JnUe8QraJhRNbk_Cn3lavL10RRffjZkyvsxIvcy307r2Ylcd54u7oWEinCZVsU3Ki0VHwX8JZmQ3ThIFLZQn49Lylmz6UadRjEGPSUdOB7bqdHB6Vpgy41-rCctVUcMSzNuQyb7but9LQ3-tT5z2G0ZbT5MZ-yRFKSGBLp4zDMWbQIb2TWT2IAsBH0KHvEnXPlpi-yPBthr0H1a9RWVnWXxgmn2yJLBy5bNJv5TSvMA_0uFBCXTbWWAkEmIX04tyMQ_PV_TcUoxo1Keray_196PIHiHOC1YXHxSy3XL8MRlm1gYHvIOUqB7jROBSe3-KIvWyyYFIOg");

		var requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};

		fetch("https://webapisv5t20210310232507.azurewebsites.net/api/SinhViens/31181020049", requestOptions)
			.then(response => response.text())
			.then(result => JSON.parse(result))
			.then(res => {
				setInfoSinhVien(
					{
						Mssv: res.Mssv,
						HoTen: res.HoTen,
						NgaySinh: res.NgaySinh,
						GioiTinh: res.GioiTinh,
						NoiSinh: res.NoiSinh,
						Sdt: res.Sdt,
						Lop: res.Lop,
						DonVi: res.DonVi,
						Khoa: res.Khoa,
						Email: res.Email,
						Iduser: null,
						DonViNavigation: null,
						IduserNavigation: null,
						Diem: [],
						KqTheoTieuchi: [],
						ThamgiaChuongtrinh: [],
						ThoidiemSvThamgia: [],
						ThuchienTieuchuan: []
					}
				);
			})
			.catch(error => console.log('error', error));
	}, [])

    return (
        <div className="container DetailInfo">
            <div className="row">
                <div className="col-md-4 col-12">
                    <div className="left">
                        <div className="left-content">
                            <p className="border-bottom">Xin chào, Võ Hồng Nhiển </p>
                            <ul className="sub-menu">
                                <li className="border-bottom active-sub-menu"><a href="#">Thông tin cá nhân</a></li>

                                <li className="border-bottom"><a href="#">Mật khẩu</a></li>

                                <li className="border-bottom"><a href="#">Tài khoản</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-12 order-md-2 order-1">
                    
                    <div className="form-container">
                    <div className="right">
                        <div className="right-header">
                            <div className="right-header-content">
                                <h6>Thông tin cá nhân</h6>
                            </div>
                            <div className="left-header-content">
                                <button className="btn btn-outline-warning" onClick = {()=>HandelUpdate()}>Cập nhật</button>
                                <button className="btn btn-outline-warning">Đăng ký xét SV5T</button>
                            </div>
                        </div>
                    </div>
                        <div className="form-content">
                            <div className="form-img">
                                <div className="avatar">
                                    <img src={people} alt="" />
                                </div>
                                <div className="change-avatar">
                                    <p>Đổi hình đại diện</p>
                                </div>
                            </div>
                            <div className="sub-menu-info">
                                <ul className="sub-menu">
                                    <li className="border-bottom active-sub-menu"><a href="#">Thông tin cơ bản</a></li>
                                </ul>
                            </div>
                            <form className="row info" id="table-three">
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="exampleInputName">Họ và tên</label>
                                        <input type="text" className="form-control" id="exampleInputName" value={InfoSinhVien.HoTen} aria-describedby="emailHelp" />
                                        <small id="name" className="form-text text-muted"></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputMssv">MSSV</label>
                                        <input type="text" className="form-control" id="exampleInputMssv" value={InfoSinhVien.Mssv} aria-describedby="emailHelp" />
                                        <small id="mssv" className="form-text text-muted"></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputNgaysinh">Ngày sinh</label>
                                        <input type="text" className="form-control" id="exampleInputNgaysinh" value={InfoSinhVien.NgaySinh} aria-describedby="emailHelp" />
                                        <small id="ngaysinh" className="form-text text-muted"></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputNoisinh">Nơi sinh</label>
                                        <input type="text" className="form-control" id="exampleInputNoisinh" value={InfoSinhVien.NoiSinh} aria-describedby="emailHelp" />
                                        <small id="noisinh" className="form-text text-muted"></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Giới tính</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>{InfoSinhVien.GioiTinh}</option>
                                            <option>Nam</option>
                                            <option>Nữ</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputLop">Lớp</label>
                                        <input type="text" className="form-control" id="exampleInputLop" placeholder="Lớp" value={InfoSinhVien.Lop} aria-describedby="emailHelp" />
                                        <small id="lop" className="form-text text-muted"></small>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Khóa</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>{InfoSinhVien.Khoa}</option>
                                            <option>K44</option>
                                            <option>K45</option>
                                            <option>K46</option>
                                            <option>K47</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Đơn vị</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>{InfoSinhVien.DonVi}</option>
                                            <option>K45</option>
                                            <option>K46</option>
                                            <option>K47</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputSdt">Số điện thoại</label>
                                        <input type="text" className="form-control" id="exampleInputSdt" value = {InfoSinhVien.Sdt} aria-describedby="emailHelp" />
                                        <small id="sdt" className="form-text text-muted"></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputDiachi">Địa chỉ Email</label>
                                        <input type="text" className="form-control" id="exampleInputDiachi" value={InfoSinhVien.Email} aria-describedby="emailHelp" />
                                        <small id="diachi" className="form-text text-muted"></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputCmnd">CMND</label>
                                        <input type="text" className="form-control" id="exampleInputCmnd" placeholder="CMND" aria-describedby="emailHelp" />
                                        <small id="cmnd" className="form-text text-muted"></small>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>

                    <div className="form-content-chuc-vu" id="table-four">
                        <form className="row">
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="exampleInputDoanvien">Đoàn viên</label>
                                    <input type="checkbox" id="exampleInputDoanvien" aria-describedby="emailHelp" />
                                    <small id="doanvien" className="form-text text-muted"></small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputDoanvien">Hội viên</label>
                                    <input type="checkbox" id="exampleInputDoanvien" aria-describedby="emailHelp" />
                                    <small id="doanvien" className="form-text text-muted"></small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputDoanvien">Đảng viên</label>
                                    <input type="checkbox" id="exampleInputDoanvien" aria-describedby="emailHelp" />
                                    <small id="doanvien" className="form-text text-muted"></small>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="form-group">
                                    <label htmlFor="exampleInputLop">Chức vụ Đoàn</label>
                                    <input type="text" className="form-control" id="exampleInputCvdoan" placeholder="Chức vụ Đoàn" aria-describedby="emailHelp" />
                                    <small id="cvdoan" className="form-text text-muted"></small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputLop">Chức vụ Hội</label>
                                    <input type="text" className="form-control" id="exampleInputCvhoi" placeholder="Chức vụ Hội" aria-describedby="emailHelp" />
                                    <small id="cvhoi" className="form-text text-muted"></small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputLop">Chức vụ Đảng</label>
                                    <input type="text" className="form-control" id="exampleInputCvdang" placeholder="Chức vụ Đảng" aria-describedby="emailHelp" />
                                    <small id="cvdang" className="form-text text-muted"></small>
                                </div>
                            </div>
                            <div className="col-md-4 col-6">
                                <button className="mt-3 btn btn-outline-warning">Cập nhật</button>
                            </div>
                        </form>
                    </div>
                    <div className="content-ul">
                        <div className="tieuchi-one" id="table-one">
                            <div className="title-form border-bottom"
                                data-bs-toggle="collapse" href="#updatepw" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <p>Mật khẩu</p>
                            </div>
                            <form id="updatepw">
                                <div className="form-group">
                                    <label htmlFor="exampleInputMkc">Mật khẩu cũ</label>
                                    <input type="text" className="form-control" id="exampleInputMkc" placeholder="Nhập mật khẩu cũ" aria-describedby="emailHelp" />
                                    <small id="mkc" className="form-text text-muted"></small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputMkm">Mật khẩu mới</label>
                                    <input type="text" className="form-control" id="exampleInputMkm" placeholder="Nhập mật khẩu mới" aria-describedby="emailHelp" />
                                    <small id="mkm" className="form-text text-muted"></small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputNlmk">Nhập lại mật khẩu mới</label>
                                    <input type="text" className="form-control" id="exampleInputMlmk" placeholder="Nhập lại mật khẩu mới" aria-describedby="emailHelp" />
                                    <small id="nlmk" className="form-text text-muted"></small>
                                </div>
                                <button className="mt-3 btn btn-outline-warning">Cập nhật lại mật khẩu</button>
                            </form>

                        </div>
                        <div className="tieuchi-two" id="table-two">
                            <div className="title-form border-bottom">
                                <p>Tài khoản</p>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputMkc">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i> Email:
								</label>

								Vohongnhien@gmail.com
							</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DetailInfo;