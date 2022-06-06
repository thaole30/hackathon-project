import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { getUserDetail } from '../../contexts/appContext/appActions';
import { AppContext } from '../../contexts/appContext/appContext';
import { useUserInfoByUsernameQuery } from '../../query/useUserQuery';
import { normalUpdate } from '../../redux/userSlice';
import PortfolioBody from './PortfolioBody/PortfolioBody';
import PortfolioHeader from './PortfolioHeader/PortfolioHeader';



const PortfolioPage = () => {
  let location = useLocation();
// console.log("userId", location.state.userId);
  const {userName} = useParams();
  // console.log("userName", userName)
  const {appContext, dispatch} = useContext(AppContext);


  const {data, isFetching, isLoading } = useUserInfoByUsernameQuery(userName);
  // console.log("userdataaaaaaaaaaaa", data);

  // if(Object.values(data).length) {
  //   dispatch(getUserDetail(data))
  // }

  return (
    <div className="portfolio-page">
      <PortfolioHeader userInfo={data}/>
      <PortfolioBody userInfo={data}/>
    </div>
  )
}

export default PortfolioPage