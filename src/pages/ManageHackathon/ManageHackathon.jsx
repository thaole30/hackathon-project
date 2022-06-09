import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import SpinLoading from '../../components/SpinLoading/SpinLoading';
import { fetchHackathonDetail } from '../../redux/hackathonSlice';
import MainTab from './MainTab/MainTab';
import ManageHackathonBanner from './ManageHackathonBanner/ManageHackathonBanner';
import "./ManageHackathon.scss";
import { useHackathonByIdQuery } from '../../query/useHackathonQuery';



const ManageHackathon = () => {

const { hackathonId } = useParams();
// const { isLoading, hackathonDetail } = useSelector(
//     (state) => state.hackathon
//   );
//   console.log("hackathonDetail", hackathonDetail);

  
  const location = useLocation();
  const dispatch = useDispatch();


  const [currentTab, setcurrentTab] = useState("");
  console.log("currentTab", currentTab);
  // console.log("location", location)


  const {data :hackathonDetail, isFetching, isLoading, isSuccess, isError, mutationUpdateHackathon } = useHackathonByIdQuery(hackathonId);


  useEffect(() => {
    const currentTab = location.pathname.split("/")[location.pathname.split("/").length-1];
    setcurrentTab(currentTab);
  }, [])



  // useEffect(() => {
  //   if (hackathonId) {
  //     dispatch(fetchHackathonDetail(hackathonId));
  //   }
  // }, [hackathonId]);

  if (isLoading) {
    return (
      <>
        {/* <ProgressLoading/> */}
        <SpinLoading />
      </>
    );
  }



  return (
    <div className="manage-hackathon-page">
        <ManageHackathonBanner hackathonDetail={hackathonDetail}/>
        <MainTab hackathonId={hackathonId} currentTab={currentTab}/>
        <div className="container">
          <div className="tab-divider">

          </div>
        </div>
        <div className="manage-hackathon-content">
          <Outlet context={[hackathonDetail, mutationUpdateHackathon, isSuccess, isError]}/>
          
        </div>
    </div>
  )
}

export default ManageHackathon