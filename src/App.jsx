import  {useEffect, useState} from 'react';
import { Row, Col, Progress } from 'antd';
import Navigator from './routes/Navigator';
import { AppContextProvider } from './contexts/appContext/appContext';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
 
  return (
    <QueryClientProvider client={queryClient}>
    <div className="hackathon-app">
      <AppContextProvider>
        <Navigator/>
      </AppContextProvider>
    </div>
    </QueryClientProvider>
  );
}

export default App;
