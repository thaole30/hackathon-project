import React from 'react';
import ExclusiveHackathon from './ExclusiveHackathon/ExclusiveHackathon';
import HackathonBanner from './HackathonBanner/HackathonBanner';
import HackathonFilter from './HackathonFilter/HackathonFilter';
import "./HackathonPage.scss";
import LookingMore from './LookingMore/LookingMore';

const HackathonPage = () => {
  return (
    <div className="hackathon-page">
      <HackathonBanner/>
      <HackathonFilter/>
      <ExclusiveHackathon/>
      <LookingMore/>
    </div>
  )
}

export default HackathonPage