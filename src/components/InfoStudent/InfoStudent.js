import Ellipse from '../InfoStudent/Img/Ellipse 7.png';
import error from '../InfoStudent/Img/error.png';
import '../InfoStudent/InfoStudent.css';
import CircularProgressWithLabel from '../CircularProgress/CircularProgressWithLabel';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import GroupTimeLine from './GroupTimeLine/GroupTimeLine';
import InforStuDefault from './InforStuDefault/InforStuDefault';
import axios from 'axios';

const InfoStudent = (props) => {

    const [isActiveLink, setActiveLink] = useState();

    const [Criterias, setCriterias] = useState([]);

    useEffect(() => {
        //https://601ce4671a9c220017060f4b.mockapi.io/ImpleProgress
        axios.get('http://localhost:54178/api/OperationProgress/31171025965')
            .then(res => {
                setCriterias([...res.data]);
            })
            .catch(error => console.log(error));
    }, [])

    if (isActiveLink === true) {
        return(<Redirect to="/InfoStudentContainer/ProfileSV" />);
    }

    const RenCriterias = Criterias.map( (Criteria,index) => {
        
        return(
            <Link to={`${props.match.url}/${Criteria.Lable}`} key = {index}>
                <CircularProgressWithLabel 
                    Name = {Criteria.Key} 
                    value={Criteria.Value} />
            </Link>
        );
    } );
    //console.log(props.match.url);
    return (
        <Router className= "InfoStudent">
            <div className="PROFITE_SV5TOT">
                <div className = "container Info">
                <div className="row mt-5 InfoHead">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 Profile">
                        <div className="row mt-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="img_Profile">
                                    <img src={Ellipse} className="img-responsive" alt="Image8" />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                                <div className="Title_Profile">
                                    <h1>Họ tên SV</h1>
                                    <p>Thêm châm ngôn sống</p>
                                    <button 
                                        type="button" 
                                        className="btn btn-outline-danger"
                                            onClick={() => setActiveLink(true)}>
                                            Thông Tin Cá Nhân
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3    ">
                            <div className="Title_Edit">
                                <ul className="Title_Edit_inline">
                                    <li><img src={error} alt="" /></li>
                                    <li><p>Cập nhật thông tin cá nhân</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 margin-mobile">
                        {RenCriterias}
                    </div>
                </div>
                </div>
                
            </div>
            
            <div className = "InfoStudentBody">
                <Route exact path="/InfoStudentContainer" component={InforStuDefault} />
                <Route exact path="/InfoStudentContainer/:Lable" component={GroupTimeLine} />
            </div>
            
            {/* <!-- ------------------------------------------------------------------------------------------------------> */}
            
        </Router>
    );
}
export default InfoStudent;