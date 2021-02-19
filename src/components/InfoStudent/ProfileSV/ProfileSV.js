import people from './Img/people.png'
import './ProfileSV.css'
import React, { useState } from 'react';
import { Redirect } from "react-router-dom";


const ProfileSV = () => {

    const [isActiveLink, setActiveLink] = useState();

    if (isActiveLink === true) {
        return(<Redirect to="/InfoStudent/DetailInfo" />);
    }

    return(
        <div className="container container-hssv">
			<div className="row">
				<div className="col-md-4 col-12" id="navbar-Info">
					<div className="left-hssv">
						<div className="left-content-hssv">
							<p className="border-bottom">Xin chào, Võ Hồng Nhiến </p>
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
							<label for="">Họ và tên:</label>
							<p>Võ Hồng Nhiển</p> <br/>
							<label for="">MSSV:</label>
							<p>31181022431</p> <br/>
							<label for="">Ngày sinh</label>
							<p>Chưa cập nhật</p> <br/>
							<label for="">Giới tính</label>
							<p>Nữ</p> <br/>
							<label for="">Lớp:</label>
							<p>EC002</p> <br/>
							<label for="">Khóa:</label>
							<p>K44</p> <br/>

							<label for="">Khoa:</label>
							<p>Chưa cập nhật</p> <br/>
							<label for="">Số điện thoại:</label>
							<p>Chưa cập nhật</p> <br/>
							<label for="">Địa chỉ:</label>
							<p>Chưa cập nhật</p> <br/>
							<label for="">CMND:</label>
							<p>Chưa cập nhật</p> <br/>
							<label for="">Đoàn viên:</label>
							<input type="checkbox"/> <br/>
							<label for="">Chức vụ Đoàn:</label>
							<br/>
							<label for="">Hội viên:</label>
							<input type="checkbox"/> <br/>

							<label for="">Chức vụ Hội:</label>
							<br/>

							<label for="">Đảng viên:</label>
							<input type="checkbox"/><br/>
							<label for="">Chức vụ Đảng:</label>
							<br/>
						</div>
					</div>

					<div className="content-tieuchi">
						<div className="tieuchi-one" id="DDT">
							<a data-bs-toggle="collapse" href="#table-one" role="button"
								aria-expanded="false" aria-controls="table-one">
								<p>Tiêu chí Đạo đức tốt</p>
							</a>
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
						<div className="tieuchi-tow" id="HTT">
							<a data-bs-toggle="collapse" href="#table-tow" role="button"
								aria-expanded="false" aria-controls="table-tow">
								<p>Tiêu chí Học tập tốt</p>
							</a>
							<div className="collapse" id="table-tow">
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
							<a data-bs-toggle="collapse" href="#table-three" role="button"
								aria-expanded="false" aria-controls="table-three">
								<p>Tiêu chí Thể lực tốt</p>
							</a>
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
							<a data-bs-toggle="collapse" href="#table-four" role="button"
								aria-expanded="false" aria-controls="table-four">
								<p>Tiêu chí Hội nhập tốt</p>
							</a>
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
							<a data-bs-toggle="collapse" href="#table-five" role="button"
								aria-expanded="false" aria-controls="table-five">
								<p>Tiêu chí Tình nguyện tốt</p>
							</a>
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
export default ProfileSV;