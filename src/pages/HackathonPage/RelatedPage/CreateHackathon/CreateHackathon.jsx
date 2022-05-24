import React from 'react'
import CreateBasicInfoHkt from './CreateBasicInfoHkt/CreateBasicInfoHkt'
import CreateHackathonTab from './CreateHackathonTab/CreateHackathonTab'
import "./CreateHackathon.scss";


const CreateHackathon = () => {
  return (
    <div className="create-hackathon-page">
        <CreateHackathonTab/>
        <CreateBasicInfoHkt/>
    </div>
  )
}

export default CreateHackathon