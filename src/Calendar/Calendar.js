import React from 'react';
import { Inject,ScheduleComponent,Day,Week,WorkWeek,Month,Agenda} from '@syncfusion/ej2-react-schedule';
import { DataManager,WebApiAdaptor } from '@syncfusion/ej2-data';

const remoteData = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Schedule',
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

const Calendar = () => {
    return(
        <ScheduleComponent width='100%' height='650px' selectedDate={new Date(2020, 10, 22)} eventSettings={{ dataSource: remoteData }} readonly={true}>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      </ScheduleComponent>
    );
}

export default Calendar;