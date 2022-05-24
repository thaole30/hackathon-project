import React, { useEffect, useState } from 'react';
import { Tabs } from "antd";
import { editHktSteps } from './data';
import { NavLink, useLocation, useNavigate, useOutletContext, useParams, useSearchParams } from 'react-router-dom';
import Essentials from './Essentials/Essentials';
import Eligibility from './Eligibility/Eligibility';
import Design from './Design/Design';
import HackathonSite from './HackathonSite/HackathonSite';
import Todos from './Todos/Todos';
import StarterKit from './StarterKit/StarterKit';
import Submissions from './Submissions/Submissions';
import PublicVoting from './PublicVoting/PublicVoting';
import Judging from './Judging/Judging';
import Prizes from './Prizes/Prizes';
import { useSelector } from 'react-redux';
import MyDivider from '../../../../components/MyDivider/MyDivider';
import EditHktTabs from './EditHktTabs/EditHktTabs';

const { TabPane } = Tabs;

const EditHkt = () => {
    const { hackathonId } = useParams();
    // const {hackathonDetail } = useSelector(
    //     (state) => state.hackathon
    //   );
    //   console.log("hackathonDetail", hackathonDetail);

    const [hackathonDetail] = useOutletContext();

    const location = useLocation();
    // console.log("edit location", location);
    const [searchParams] = useSearchParams();
    // console.log( "edit tab", searchParams.get("form"));

    const [activeEditTab, setActiveEditTab] = useState("essentials");
    console.log("activeEditTab", activeEditTab);

    useEffect(() => {
      if(searchParams.get("form")) {
        setActiveEditTab(searchParams.get("form"));
      } else {
        setActiveEditTab("essentials");
      }
    }, [location])

    const renderRelativeEditContent = () => {
        switch (activeEditTab) {
            case "essentials": {
                return <Essentials hackathonId={hackathonId} hackathonDetail={hackathonDetail}/>
            }
        
            case "eligibility": {
                return <Eligibility hackathonId={hackathonId}/>
            }
            case "design": {
                return <Design/>
            }
            case "hackathon-site": {
                return <HackathonSite/>
            }
            case "todos": {
                return <Todos/>
            }
            case "starter-kit": {
                return <StarterKit/>
            }
            case "submissions": {
                return <Submissions/>
            }
            case "public-voting": {
                return <PublicVoting/>
            }
            case "judging": {
                return <Judging/>
            }
            case "prizes": {
                return <Prizes/>
            }
        
            default:
                break;
        }
    }

  
      return (
        <div className="edit-hkt-section">
          <div className="container">
   
            <EditHktTabs activeEditTab={activeEditTab} setActiveEditTab={setActiveEditTab}/>
          </div>

          <div className="edit-hkt-relative-content">
              {renderRelativeEditContent()}
               
            <MyDivider/>
            <p className="text-12 text-gray">Need help? Learn more about managing your hackathon at &nbsp;
              <NavLink to="/help">help.CrowdHack.com</NavLink>
            </p>
          </div>
        </div>
      );
}


const HeaderTab = ({title, name, value, isComplete}) => {
    const navigate = useNavigate();
    const { hackathonId } = useParams();
  
    return (
      <div className="m-0 portfolio-tab-header text-center f-center"
        onClick={() => {
          navigate(`/hackathon/manage/${hackathonId}/edit?form=${name}`);
      
        }}
      >
        {
            !isComplete && (
                <div className="red-dot"></div>
            )
        }
        <div className="f f-column relative">
            <h1 className="m-0 bold text-24">{title}</h1>
            {
                value && (<span className="text-12 text-center w-100 absolute" style ={{top: '30px'}}>{value}</span>)
            }
        </div>
      </div>
    );
  };
  

export default EditHkt