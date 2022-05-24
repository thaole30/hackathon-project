import React from 'react'
import { NavLink, useSearchParams } from 'react-router-dom';

const UpdatesDetail = () => {
    const [searchParams] = useSearchParams();
    const hackathonId = searchParams.get('updateId');
    console.log( "hackathonId in UpdatesDetail",searchParams.get('updateId'));

  return (
    <div className="updates-detail">
        <NavLink to={`/challenges/updates/${hackathonId}`}>
         <p className="mb-24 info uppercase">
            BACK TO ALL UPDATES
         </p>
      </NavLink>
      <p className="text-20 text-gray italic">3 months ago</p>
      <NavLink to={`/challenges/updates/${hackathonId}/detail?updateId=${hackathonId}`}>
        <h2 className="info text-28 bold">
          Final call for submissions - Web3 Discovery
        </h2>
      </NavLink>

      <p className="mb-24">
          There are only 3 days left to complete your submission for Web3 Discovery.
      </p>

    </div>
  )
}

export default UpdatesDetail