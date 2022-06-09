import  {useEffect, useState} from 'react';
import { Row, Col, Progress } from 'antd';
import Navigator from './routes/Navigator';
import { AppContextProvider } from './contexts/appContext/appContext';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const queryClient = new QueryClient();
 
  return (
    <GoogleOAuthProvider clientId="39336608773-ttq6cf0bsq3ns1g1acsb3nq6a4cu50ac.apps.googleusercontent.com">
      <QueryClientProvider client={queryClient}>
      <div className="hackathon-app">
        <AppContextProvider>
          <Navigator/>
        </AppContextProvider>
      </div>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
