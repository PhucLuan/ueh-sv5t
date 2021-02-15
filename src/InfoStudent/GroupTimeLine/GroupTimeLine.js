import TimelineActivity from '../TimelineActivity/TimelineActivity';

const GroupTimeLine = (props) => {

    console.log(props.match.params.Lable);

    return (
        <div className="row GroupTimeLine">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <TimelineActivity />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h2 style={{ color: 'black' }}>Hoạt động khác</h2>
                <TimelineActivity />
            </div>
        </div>
    );
}
export default GroupTimeLine;