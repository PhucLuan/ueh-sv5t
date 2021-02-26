import './DetailInfo.css';
import people from './Img/people.png';

const DetailInfo = () => {
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
                    <div className="right">
                        <div className="right-header">
                            <div className="right-header-content">
                                <h6>Thông tin cá nhân</h6>
                            </div>
                            <div className="left-header-content">
                                <button className="btn btn-outline-warning">Cập nhật</button>
                            </div>
                        </div>
                    </div>
                    <div className="form-container">
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
                                        <input type="text" className="form-control" id="exampleInputName" value="Võ Hồng Nhiển" aria-describedby="emailHelp" />
                                        <small id="name" className="form-text text-muted"></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputMssv">MSSV</label>
                                        <input type="text" className="form-control" id="exampleInputMssv" value="31181022431" aria-describedby="emailHelp" />
                                        <small id="mssv" className="form-text text-muted"></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputNgaysinh">Ngày sinh</label>
                                        <input type="text" className="form-control" id="exampleInputNgaysinh" value="01/12/2000" aria-describedby="emailHelp" />
                                        <small id="ngaysinh" className="form-text text-muted"></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputNoisinh">Nơi sinh</label>
                                        <input type="text" className="form-control" id="exampleInputNoisinh" placeholder="Nơi sinh" aria-describedby="emailHelp" />
                                        <small id="noisinh" className="form-text text-muted"></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Giới tính</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>Nữ</option>
                                            <option>Nam</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputLop">Lớp</label>
                                        <input type="text" className="form-control" id="exampleInputLop" placeholder="Lớp" value="EC002" aria-describedby="emailHelp" />
                                        <small id="lop" className="form-text text-muted"></small>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12">
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Khóa</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>K44</option>
                                            <option>K45</option>
                                            <option>K46</option>
                                            <option>K47</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">Khoa</label>
                                        <select className="form-control" id="exampleFormControlSelect1">
                                            <option>Chọn</option>
                                            <option>K45</option>
                                            <option>K46</option>
                                            <option>K47</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputSdt">Số điện thoại</label>
                                        <input type="text" className="form-control" id="exampleInputSdt" placeholder="Số điện thoại" aria-describedby="emailHelp" />
                                        <small id="sdt" className="form-text text-muted"></small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputDiachi">Địa chỉ</label>
                                        <input type="text" className="form-control" id="exampleInputDiachi" placeholder="Địa chỉ" aria-describedby="emailHelp" />
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