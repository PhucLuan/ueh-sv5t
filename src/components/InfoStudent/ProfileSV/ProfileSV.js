import people from './Img/people.png'
import './ProfileSV.css'
import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

const ProfileSV = (props) => {

	const [isActiveLink, setActiveLink] = useState();

	const [InfoSinhVien, setInfoSinhVien] = useState({});

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
				setInfoSinhVien({
					...InfoSinhVien,
					Mssv: res.Mssv,
					HoTen: res.HoTen,
					NgaySinh: res.NgaySinh,
					GioiTinh: res.GioiTinh,
					NoiSinh: res.NoiSinh,
					Sdt: res.Sdt,
					Lop: res.Lop,
					DonVi: res.DonVi,
					Khoa: res.Khoa,
					Email: res.Email
				}
				);

				/*
					Mssv: res.Mssv,
						HoTen: res.HoTen,
						NgaySinh: res.NgaySinh,
						GioiTinh: res.GioiTinh,
						NoiSinh: res.NoiSinh,
						Sdt: res.Sdt,
						Lop: res.Lop,
						DonVi: res.DonVi,
						Khoa: res.Khoa,
						Email: res.Email
					 */
			})
			.catch(error => console.log('error', error));
	}, [])
	if (isActiveLink === true) {
		return (<Redirect to="/InfoStudentContainer/DetailInfo" />);
	}
	return (
		<div className="container container-hssv">
			<div className="row">
				<div className="col-md-4 col-12" id="navbar-Info">
					<div className="left-hssv">
						<div className="left-content-hssv">
							<p className="border-bottom">Xin chào, {InfoSinhVien.HoTen} </p>
							<nav className="sub-menu-hssv">
								<li className="border-bottom active-sub-menu-hssv">
									<a className="nav-link" href="#content-hssv">Thông tin cá nhân sinh viên</a>
								</li>

								<li className="border-bottom arrLi">
									<a className="nav-link" href="#DDT">Tiêu chí Đạo đức tốt</a>
								</li>

								<li className="border-bottom arrLi">
									<a className="nav-link" href="#HTT">Tiêu chí Học tập tốt</a>
								</li>

								<li className="border-bottom arrLi">
									<a className="nav-link" href="#TLT">Tiêu chí Thể lực tốt</a></li>
								<div id="show-table-three"></div>

								<li className="border-bottom arrLi">
									<a className="nav-link" href="#HNT">Tiêu chí Hội nhập tốt</a>
								</li>

								<li className="border-bottom arrLi" >
									<a className="nav-link" href="#TNT">Tiêu chí Tình nguyện tốt</a>
								</li>
							</nav>
						</div>
					</div>
				</div>
				<div data-bs-spy="scroll" data-bs-target="#navbar-Info" data-bs-offset="0" className="col-md-8 col-12 order-md-2 order-1">
					<div className="right-hssv">
						<div className="right-header-hssv">
							<div className="right-header-content-hssv">
								<h6>Hồ sơ Sinh viên 5 tốt</h6>
							</div>
							<div className="left-header-content-hssv">
								<a className="aa" onClick={() => setActiveLink(true)}>Xem chi tiết </a>
							</div>
						</div>
					</div>
					<div className="form-hssv">
						<div className="form-content-hssv" id="content-hssv">
							<div className="image-hssv">
								<img src={people} alt="sinhvien" />
							</div>
							<label htmlFor="">Họ và tên:</label>
							<p>{InfoSinhVien.HoTen}</p> <br />
							<label htmlFor="">MSSV:</label>
							<p>{InfoSinhVien.Mssv}</p> <br />
							<label htmlFor="">Ngày sinh</label>
							<p>{InfoSinhVien.NgaySinh}</p> <br />
							<label htmlFor="">Giới tính</label>
							<p>{InfoSinhVien.GioiTinh}</p> <br />
							<label htmlFor="">Lớp:</label>
							<p>{InfoSinhVien.Lop}</p> <br />
							<label htmlFor="">Khóa:</label>
							<p>K44</p> <br />

							<label htmlFor="">Khoa:</label>
							<p>{InfoSinhVien.Khoa}</p> <br />
							<label htmlFor="">Số điện thoại:</label>
							<p>{InfoSinhVien.Sdt}</p> <br />
							{/* <label htmlFor="">Địa chỉ:</label>
							<p>{InfoSinhVien.}</p> <br /> */}
							{/* <label htmlFor="">CMND:</label>
							<p>Chưa cập nhật</p> <br /> */}
							<label htmlFor="">Đoàn viên:</label>
							<input type="checkbox" /> <br />
							<label htmlFor="">Chức vụ Đoàn:</label>
							<br />
							<label htmlFor="">Hội viên:</label>
							<input type="checkbox" /> <br />

							<label htmlFor="">Chức vụ Hội:</label>
							<br />

							<label htmlFor="">Đảng viên:</label>
							<input type="checkbox" /><br />
							<label htmlFor="">Chức vụ Đảng:</label>
							<br />
						</div>
					</div>

					<div className="content-tieuchi">
						<div className="tieuchi-one" id="DDT">
							<p>
								<a data-bs-toggle="collapse" href="#table-one" role="button"
									aria-expanded="false" aria-controls="table-one">
									Tiêu chí Đạo đức tốt
							</a>
							</p>
							<div className="collapse" id="table-one">
								<div className="card-body">
									<table className="table">
										<thead>
											<tr>
												<td>STT</td>
												<td>Thời gian</td>
												<td>Chương trình</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>01/03/2019</td>
												<td>Chiến dịch tình nguyện SVKT 2019</td>
											</tr>
											<tr>
												<td>2</td>
												<td>01/03/2019</td>
												<td>Chiến dịch tình nguyện SVKT 2019</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="tieuchi-two" id="HTT">
							<p>
								<a data-bs-toggle="collapse" href="#table-two" role="button"
									aria-expanded="false" aria-controls="table-two">
									Tiêu chí Học tập tốt
							</a>
							</p>
							<div className="collapse" id="table-two">
								<div className="card-body">
									<table className="table">
										<thead>
											<tr>
												<td>STT</td>
												<td>Thời gian</td>
												<td>Chương trình</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>01/03/2019</td>
												<td>Chiến dịch tình nguyện SVKT 2019</td>
											</tr>
											<tr>
												<td>2</td>
												<td>01/03/2019</td>
												<td>Chiến dịch tình nguyện SVKT 2019</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="tieuchi-three" id="TLT">
							<p>
								<a data-bs-toggle="collapse" href="#table-three" role="button"
									aria-expanded="false" aria-controls="table-three">
									Tiêu chí Thể lực tốt
							</a>
							</p>
							<div className="collapse" id="table-three">
								<div className="card-body">
									<table className="table">
										<thead>
											<tr>
												<td>STT</td>
												<td>Thời gian</td>
												<td>Chương trình</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>01/03/2019</td>
												<td>Chiến dịch tình nguyện SVKT 2019</td>
											</tr>
											<tr>
												<td>2</td>
												<td>01/03/2019</td>
												<td>Chiến dịch tình nguyện SVKT 2019</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="tieuchi-four" id="HNT">
							<p>
								<a data-bs-toggle="collapse" href="#table-four" role="button"
									aria-expanded="false" aria-controls="table-four">
									Tiêu chí Hội nhập tốt
							</a>
							</p>
							<div className="collapse" id="table-four">
								<div className="card-body">
									<table className="table">
										<thead>
											<tr>
												<td>STT</td>
												<td>Thời gian</td>
												<td>Chương trình</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>01/03/2019</td>
												<td>Chiến dịch tình nguyện SVKT 2019</td>
											</tr>
											<tr>
												<td>2</td>
												<td>01/03/2019</td>
												<td>Chiến dịch tình nguyện SVKT 2019</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						<div className="tieuchi-five" id="TNT">
							<p>
								<a data-bs-toggle="collapse" href="#table-five" role="button"
									aria-expanded="false" aria-controls="table-five">
									Tiêu chí Tình nguyện tốt
							</a>
							</p>
							<div className="collapse" id="table-five">
								<div className="card-body">
									<table className="table">
										<thead>
											<tr>
												<td>STT</td>
												<td>Thời gian</td>
												<td>Chương trình</td>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>1</td>
												<td>01/03/2019</td>
												<td>Chiến dịch tình nguyện SVKT 2019</td>
											</tr>
											<tr>
												<td>2</td>
												<td>01/03/2019</td>
												<td>Chiến dịch tình nguyện SVKT 2019</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>

					</div>

				</div>
			</div>
		</div>
	);
}
const mapStateToProps = state => {
	return {
		sinhVien: state.Loggin
	}
}

export default connect(mapStateToProps, null)(ProfileSV);