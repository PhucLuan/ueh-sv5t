import TimelineActivity from '../TimelineActivity/TimelineActivity';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


const GroupTimeLine = (props) => {
    console.log(props.isToggle);
    if (props.isToggle === true) {
        return (
            <div className="container">
                <div className="row GroupTimeLine" >
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h2 style={{ color: 'black' }}>Hoạt bắt buộc</h2>
                        <TimelineActivity TypeActivity="Require" IdTieuChi={props.match.params.Key} />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h2 style={{ color: 'black' }}>Hoạt động khác</h2>
                        <TimelineActivity IdTieuChi={props.match.params.Key} />
                    </div>
                </div>
            </div>
        );
    }
    else
    return(
        <Redirect to="/InfoStudentContainer" />
    );
    
}
const mapStateToProps = state => {
	return {
        isToggle: state.Toggle
	}
}
// const mapDispatchToProps = (dispatch, props) => {
//     return {
//         onToggleTimeLine: () => {
//             dispatch(ToggleTimeLine());
//         }
//     }
// }
export default connect(mapStateToProps, null)(GroupTimeLine);