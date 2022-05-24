import { Tabs } from 'antd';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editHktSteps } from '../data';

const { TabPane } = Tabs;


const EditHktTabs = ({activeEditTab, setActiveEditTab}) => {

    function callback(key) {
        console.log("key", key)
        setActiveEditTab(key);
      }
    

  return (
    <Tabs
        className="edit-hkt-tab"
        defaultActiveKey={activeEditTab}
        activeKey={activeEditTab}
        onChange={callback}
    >
        {
            editHktSteps.map((item) => (
            <TabPane
                tab={<HeaderTab title={item.title} name={item.name} value={item.value ? item.value : ""} isComplete ={item.isComplete} />}
                key={item.name}
            >
                {/* Content of Tab Pane 1 */}
            </TabPane>
            ))
        }

    </Tabs>
  )
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
  

export default EditHktTabs