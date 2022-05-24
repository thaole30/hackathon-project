import { Button } from 'antd'
import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const Discusstions = () => {

  const {hackathonId} = useParams();
  console.log("hackathonId in Overview", hackathonId);

  const [isSubscribe, setIsSubscribe] = useState(false);


  return (
    <div className="discusstions">
      <ul className="discusstions-list">
        <li className="discusstion-item f-between mt-16">
            <NavLink to="/" className="text-20">
              Need to validate my Web3 Project
            </NavLink>
            <div className="chat-icon-wrapper relative">
              <svg width="30" aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment" className="svg-inline--fa fa-comment fa-w-16 fa-3x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg>
              <span className="number h-100 absolute">
                2
              </span>
            </div>
        </li>
        <li className="discusstion-item f-between mt-16">
            <NavLink to="/" className="text-20">
              Can I ask my friends to Join?
            </NavLink>
            <div className="chat-icon-wrapper relative">
              <svg width="30" aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment" className="svg-inline--fa fa-comment fa-w-16 fa-3x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg>
              <span className="number h-100 absolute">
                3
              </span>
            </div>
        </li>
        <li className="discusstion-item f-between mt-16">
            <NavLink to="/" className="text-20">
              Is it okay to use an existing product?
            </NavLink>
            <div className="chat-icon-wrapper relative">
              <svg width="30" aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment" className="svg-inline--fa fa-comment fa-w-16 fa-3x " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg>
              <span className="number h-100 absolute">
                4
              </span>
            </div>
        </li>
      </ul>

      <div className="post-new-discussion-wrapper mt-24 mb-24">
        <Button className="post-new-discussion-btn relative">
          <NavLink to={`/challenges/discussions/${hackathonId}/new-topic`} className="text-20">
            Post a New Discussion Topic
          </NavLink>
          <svg width="62" viewBox="0 0 62 48" fill="none" className="styles_vortexBackground__gaJqK"><path d="M13 0H3V10H13V0Z" fill="#303EFC"></path><path d="M28 0H20V8H28V0Z" fill="#303EFC"></path><path d="M25 13H20V17H25V13Z" fill="#303EFC"></path><path d="M29 24H21V32H29V24Z" fill="#303EFC"></path><path d="M40 32H32V40H40V32Z" fill="#303EFC"></path><path d="M17 37H0V48H17V37Z" fill="#303EFC"></path><path d="M50 10H46V14H50V10Z" fill="#303EFC"></path><path d="M39 17H35V21H39V17Z" fill="#303EFC"></path><path d="M48 39H44V43H48V39Z" fill="#303EFC"></path><path d="M62 43H59V46H62V43Z" fill="#303EFC"></path><path d="M58 32H55V35H58V32Z" fill="#303EFC"></path><path d="M49 24H46V27H49V24Z" fill="#303EFC"></path><path d="M29 43H26V46H29V43Z" fill="#303EFC"></path><path d="M23 36H20V39H23V36Z" fill="#303EFC"></path><path d="M55 2H51V6H55V2Z" fill="#303EFC"></path><path d="M39 5H36V8H39V5Z" fill="#303EFC"></path></svg>
        </Button>
      </div>

      {
        !isSubscribe ? (
          <div className="email-me text-20">
            <Button className="email-btn discuss-btn info text-20" onClick={() => setIsSubscribe(prevState => !prevState)}>
              <u>Email me</u> 
            </Button>
            <span>
              when new discussions are added
            </span>
          </div>
        ) : (
          <div className="unsubscribe-me text-20">
            <span>
              You'll receive emails when new discussions are added.
            </span>
            <Button className="unsubscribe-btn discuss-btn info text-20" onClick={() => setIsSubscribe(prevState => !prevState)}>
              <u>Unsubscribe</u> 
            </Button>
          </div>
        )
      }

    </div>
  )
}

export default Discusstions