import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

const TimelineActivity = () => {

    const [Activitys, setActivitys] = useState([]);

    useEffect(() => {
        
        axios.get('https://601ce4671a9c220017060f4b.mockapi.io/RequiredActivity')
            .then(res => {
                setActivitys([...res.data]);
            })
            .catch(error => console.log(error));
    }, [])

    const ListActivity = Activitys.map(
        (activity, index) => {

            if (activity.IsComplete === true) {
                
                return(
                    <VerticalTimelineElement
                    key = {index}
                    className="vertical-timeline-element--work"
                    contentStyle={{ borderTop: '7px solid rgb(16, 204, 82)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82' }}
                    iconStyle={{ background: 'rgb(16, 204, 82', color: '#fff' }}
                    icon={<CheckIcon />}
                >
                    <h4 className="vertical-timeline-element-subtitle">{activity.Name}</h4>
                    <p>{activity.Description}</p>
                </VerticalTimelineElement>
                );

            } else {
                return(
                    <VerticalTimelineElement
                key = {index}
                className="vertical-timeline-element--work"
                contentStyle={{ borderTop: '7px solid #EC4520', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #EC4520' }}
                iconStyle={{ background: '#EC4520', color: '#fff' }}
                icon={<ClearIcon />}
            >
                <h4 className="vertical-timeline-element-subtitle">{activity.Name}</h4>
                <p>{activity.Description}</p>
            </VerticalTimelineElement>
                );
            }
        }
    );

    return (
        <VerticalTimeline >

            {ListActivity}
            {/* <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ borderTop: '7px solid rgb(16, 204, 82)', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(16, 204, 82', color: '#fff' }}
                icon={<CheckIcon />}
            >
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ borderTop: '7px solid rgb(16, 204, 82)', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(16, 204, 82', color: '#fff' }}
                icon={<CheckIcon />}
            >
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ borderTop: '7px solid #EC4520', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #EC4520' }}
                date="2011 - present"
                iconStyle={{ background: '#EC4520', color: '#fff' }}
                icon={<ClearIcon />}
            >
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ borderTop: '7px solid #EC4520', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  #EC4520' }}
                date="2011 - present"
                iconStyle={{ background: '#EC4520', color: '#fff' }}
                icon={<ClearIcon />}
            >
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
            </VerticalTimelineElement> */}
            
        </VerticalTimeline>
    );
}
export default TimelineActivity;