import React, {createContext, useEffect, useState, useRef} from 'react';
import {v4 as uuidv4} from 'uuid';
import logsStorage from '../storages/logsStorage';

const LogContext = createContext();

type logType = {
  [id: string]: string;
  title: string;
  body: string;
  date: string;
};

type stringObject = {
  [id: string]: string;
};

export function LogContextProvider({children}: any): React.ReactElement {
  const initialLogsRef = useRef(null);
  const [logs, setLogs] = useState<logType[]>([]);
  const onCreate = ({title, body, date}: stringObject) => {
    const log: logType = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };
  const onModify = (modified: logType) => {
    const nextLogs = logs.map(log => (log.id === modified.id ? modified : log));
    setLogs(nextLogs);
  };
  const onRemove = (id: string) => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };
  useEffect(() => {
    (async () => {
      const savedLogs = await logsStorage.get();
      if (savedLogs) {
        initialLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);
  useEffect(() => {
    if (logs === initialLogsRef.current) {
      return;
    }
    logsStorage.set(logs);
  }, [logs]);
  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
