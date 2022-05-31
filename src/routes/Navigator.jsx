import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import AntdDrawer from '../components/AntdDrawer/AntdDrawer';
import { connectAppContext } from '../contexts/appContext/appContext';
import RootLayout from '../layout/RootLayout';
import SignInPage from '../pages/AuthPage/SignInPage/SignInPage';
import SignUpPage from '../pages/AuthPage/SignUpPage/SignUpPage';
import EditProject from '../pages/EditProject/EditProject';
import HackathonPage from '../pages/HackathonPage/HackathonPage';
import CreateHackathon from '../pages/HackathonPage/RelatedPage/CreateHackathon/CreateHackathon';
import HackathonListPage from '../pages/HackathonPage/RelatedPage/HackathonListPage/HackathonListPage';
import HelpPage from '../pages/HelpPage/HelpPage';
import General from '../pages/HelpPage/RelatedPages/General/General';
import GeneralToArticle from '../pages/HelpPage/RelatedPages/GeneralToArticle/GeneralToArticle';
import HackathonParticipants from '../pages/HelpPage/RelatedPages/HackathonParticipants/HackathonParticipants';
import HomePage from '../pages/HomePage/HomePage';
import PaymentPage from '../pages/PaymentPage/PaymentPage';
import PortfolioPage from '../pages/PortfolioPage/PortfolioPage';
import ProjectPage from '../pages/ProjectPage/ProjectPage';
import SettingPage from '../pages/SettingPage/SettingPage';
import Challenges from '../pages/Challenges/Challenges';
import Overview from '../pages/Challenges/Overview';
import MyProjects from '../pages/Challenges/MyProjects';
import Participants from '../pages/Challenges/Participants';
import Rules from '../pages/Challenges/Rules';
import ProjectGallery from '../pages/Challenges/ProjectGallery';
import Updates from '../pages/Challenges/Updates/Updates';
import Discusstions from '../pages/Challenges/Discusstions';
import SpinLoading from '../components/SpinLoading/SpinLoading';
import ProgressLoading from '../components/ProgressLoading/ProgressLoading';
import UpdatesDetail from '../pages/Challenges/Updates/UpdatesDetail';
import ProjectDetail from '../pages/ProjectDetail/ProjectDetail';
import HktRecommendationsPage from '../pages/HktRecommendationsPage/HktRecommendationsPage';
import ManageHackathon from '../pages/ManageHackathon/ManageHackathon';
import EditHkt from '../pages/ManageHackathon/ChildPage/EditHkt/EditHkt';
import UpdateHkt from '../pages/ManageHackathon/ChildPage/UpdateHkt/UpdateHkt';
import DiscussionHkt from '../pages/ManageHackathon/ChildPage/DiscussionHkt/DiscussionHkt';

const Navigator = ({ appContext }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
          <ToastContainer />
          {/* <ProgressLoading/> */}

          <Routes>
            <Route path="/hackathon-recommendations" element={<HktRecommendationsPage/>} />
            <Route path="/" element={<RootLayout />}>
              <Route index element={<HomePage/>} />

              <Route path="user/sign-in" element={<SignInPage />} />
              <Route path="user/sign-up" element={<SignUpPage />} />


              <Route path="hackathon" element={<HackathonPage />} />
              <Route path="hackathon/new" element={<CreateHackathon />} />
              <Route path="hackathon/list" element={<HackathonListPage />} />
              <Route path="hackathon/manage/:hackathonId" element={<ManageHackathon />} >
                <Route path="edit" element={<EditHkt />} />
                <Route path="update" element={<UpdateHkt />} />
                <Route path="discussion" element={<DiscussionHkt />} />
              </Route>

              <Route path="project/edit/:projectId" element={<EditProject />} />

              <Route path="software" element={<ProjectPage />} />
              <Route path="project/:projectId" element={<ProjectDetail />} />
              <Route path="payment" element={<PaymentPage />} />
              <Route path="portfolio/:userName" element={<PortfolioPage />} />
              <Route path="settings" element={<SettingPage />} />


              <Route path="challenges" element={<Challenges/>}>
                <Route path="overview/:hackathonId" element={<Overview />} />
                <Route path="my-project/:hackathonId" element={<MyProjects />} />
                <Route path="participants/:hackathonId" element={<Participants />} />
                <Route path="rules/:hackathonId" element={<Rules />} />
                <Route path="project-gallery/:hackathonId" element={<ProjectGallery />} />
                <Route path="updates/:hackathonId" element={<Updates />} />
                <Route path="updates/:hackathonId/detail" element={<UpdatesDetail />} />
                <Route path="discussions/:hackathonId" element={<Discusstions />} />
              </Route>


              <Route path="help" element={<HelpPage />}/>
              <Route path="help/categories/General" element={<General />} />
              <Route path="help/categories/General/:articleName" element={<GeneralToArticle />} />
              <Route path="help/categories/Hackathon_Participants" element={<HackathonParticipants />} />
              <Route path="help/categories/Hackathon_Managers" element={<HackathonParticipants />} />


            </Route>
          </Routes>
          

      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default connectAppContext(Navigator)