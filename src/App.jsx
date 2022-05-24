import  {useEffect, useState} from 'react';
import { Row, Col, Progress } from 'antd';
import Navigator from './routes/Navigator';
import { AppContextProvider } from './contexts/appContext/appContext';

function App() {

 
  return (
    <div className="hackathon-app">
      <AppContextProvider>
        <Navigator/>
      </AppContextProvider>
    </div>
  );
}

export default App;
