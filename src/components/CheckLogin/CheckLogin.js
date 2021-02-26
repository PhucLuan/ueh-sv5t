import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { sinhVienLogin } from "../../redux/actions/index";
import { connect } from 'react-redux';

const CheckLogin = (props) => {

    const [isActiveLink, setActiveLink] = useState();

    const HandleLogout = () => {
        const sinhVien = {
            userName: "",
            mssv: "",
            token: ""
        }
        props.sinhVienLogin(sinhVien);
    }
    if (isActiveLink === true) {

        return (<Redirect to="/InfoStudentContainer" />);
    }

    if (props.sinhVien.userName !== "") {
        return (
            <div>
                <div className="dropdown">
                    <a className="dropdown-toggle"
                        href="#" role="button" id="dropdownMenuLink"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        {props.sinhVien.userName}
                    </a>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li>
                            <a className="dropdown-item" style={{color:'#005495'}} href="#" onClick={() => setActiveLink(true)}>Thông tin sinh viên</a>
                        </li>
                        <li>
                            <a className="dropdown-item" style={{color:'#005495'}} href="#" onClick={() => HandleLogout()}>Đăng xuất</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
    else {
        return (<p>ĐĂNG NHẬP | ĐĂNG KÝ</p>);
    }
}

const mapStateToProps = state => {
    return {
        sinhVien: state.sinhVien
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        sinhVienLogin: (sinhVien) => {
            dispatch(sinhVienLogin(sinhVien));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CheckLogin);