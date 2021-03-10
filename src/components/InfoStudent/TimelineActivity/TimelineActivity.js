import './TimelineActivity.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const TimelineActivity = (props) => {

    const [Activitys, setActivitys] = useState([]);

    useEffect(() => {
        if (props.TypeActivity == "Require") {
            //https://601ce4671a9c220017060f4b.mockapi.io/RequiredActivity
            axios.get(`https://webapisv5t20210310232507.azurewebsites.net/api/TimelineActivity/${props.IdTieuChi}/true/31181020049`)
                .then(res => {
                    setActivitys([...res.data]);
                })
                .catch(error => console.log(error));
        }
        else {
            axios.get(`https://webapisv5t20210310232507.azurewebsites.net/api/TimelineActivity/${props.IdTieuChi}/false/31181020049`)
                .then(res => {
                    setActivitys([...res.data]);
                })
                .catch(error => console.log(error));
        }

    }, [])

    const ListActivity = Activitys.map(
        (activity, index) => {

            if (activity.IsComplete === true) {
                // const a = {
                //     b: "",
                //     c: '',
                //     d: {
                //         e: ''
                //     }
                // };

                // const {
                //     d: {
                //         e = 'default'
                //     } = ''
                // } = a;

                // console.log(e);

                return (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        style={{ padding: '1em' }}
                        contentStyle={{ borderTop: '7px solid rgb(16, 204, 82)', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82' }}
                        iconStyle={{ background: 'rgb(16, 204, 82', color: '#fff' }}
                        icon={<CheckIcon />}
                    >
                        {/* <h4 className="vertical-timeline-element-subtitle">{activity.Name}</h4> */}
                        <p>{activity.Name}</p>
                    </VerticalTimelineElement>
                );

            } else {
                return (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ borderTop: '7px solid #EC4520', color: 'black' }}
                        contentArrowStyle={{ borderRight: '7px solid  #EC4520' }}
                        iconStyle={{ background: '#EC4520', color: '#fff' }}
                        icon={< ClearIcon />}
                    >
                        {/* <h4 className="vertical-timeline-element-subtitle">{activity.Name}</h4> */}
                        < p > {activity.Name}</p >
                    </VerticalTimelineElement >
                );
            }
        }
    );

    return (
        <VerticalTimeline >

            {ListActivity}

        </VerticalTimeline>
    );
}
export default TimelineActivity;