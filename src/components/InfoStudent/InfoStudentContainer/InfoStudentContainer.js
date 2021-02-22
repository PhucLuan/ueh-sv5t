import NavBarInfoStu from '../NavBarInfoStu/NavBarInfoStu';
import InfoStudent from '../InfoStudent';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProfileSV from '../ProfileSV/ProfileSV';
import DetailInfo from '../DetailInfo/DetailInfo';
import App from '../../../App';

const InfoStudentContainer = () => {
    return(
        <Router>
            <Route exact path="/" component={App} />
            <NavBarInfoStu />
            <div>
                <Route exact path="/InfoStudentContainer" component={InfoStudent} />
                <Route exact path="/InfoStudentContainer/ProfileSV" component={ProfileSV} />
                <Route exact path="/InfoStudentContainer/DetailInfo" component={DetailInfo} />
            </div>
        </Router>
    );
}
export default InfoStudentContainer;