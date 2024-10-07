import {format} from 'date-fns';
import React from 'react';
import CalendarView from '../components/CalanderView';
import {useContext, useState, useMemo} from 'react';
import LogContext from '../context/LogContext';
import FeedList from '../components/FeedList';

function CalendarScreen(): React.ReactElement {
  const {logs}: any = useContext(LogContext);
  const markedDates = useMemo(
    () =>
      logs.reduce((acc: any, current: any) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = {marked: true};
        return acc;
      }, {}),
    [logs],
  );
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  const filteredLogs = logs.filter(
    (log: any) => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );
  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
}

export default CalendarScreen;
