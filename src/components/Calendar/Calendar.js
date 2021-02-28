import React from 'react';
import { Inject,ScheduleComponent,Day,Week,Month,Agenda} from '@syncfusion/ej2-react-schedule';
import { DataManager,WebApiAdaptor } from '@syncfusion/ej2-data';

const remoteData = new DataManager({
    //https://ej2services.syncfusion.com/production/web-services/api/Schedule
    //https://localhost:44391/TimeLineEvent
    url: 'https://webapisv5t20210228221308.azurewebsites.net/TimeLineEvent',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

const Calendar = () => {
    return(
        <ScheduleComponent width='100%' height='650px' selectedDate={new Date(2020, 4, 3)} eventSettings={{ dataSource: remoteData }} readonly={true}>
        <Inject services={[Day, Week, Month, Agenda]}/>
      </ScheduleComponent>
    );
}

export default Calendar;