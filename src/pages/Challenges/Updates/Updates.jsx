import React from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom';

const Updates = () => {

  const {hackathonId} = useParams();
  console.log("hackathonId in Overview", hackathonId);

  return (
    <div className="updates">
      <p className="text-20 text-gray italic">3 months ago</p>
      <NavLink to={`/challenges/updates/${hackathonId}/detail?updateId=${hackathonId}`}>
        <h2 className="info text-28 bold">
          Final call for submissions - Web3 Discovery
        </h2>
      </NavLink>
      <p className="mb-24">
          There are only 3 days left to complete your submission for Web3 Discovery.
      </p>
      <NavLink to={`/challenges/updates/${hackathonId}/detail?updateId=${hackathonId}`}>
        <p className="text28 uppercase">READ MORE</p>
      </NavLink>
      <p className="text-20 text-gray italic mb-16">3 months ago</p>
      <NavLink to={`/challenges/updates/${hackathonId}/detail?updateId=${hackathonId}`}>
        <h2 className="info text-28 bold mb-24">
          And the winner is...
        </h2>
      </NavLink>
      <p className="mb-24">
      The judges have weighed in, and we're excited to share the news! Go to the Web3 Discovery gallery to congratulate the winners and check out all of the awesome submissions. …
      </p>

      <NavLink to={`/challenges/updates/${hackathonId}/detail?updateId=${hackathonId}`}>
        <p className="text28 uppercase">READ MORE</p>
      </NavLink>

    </div>
  )
}

export default Updates