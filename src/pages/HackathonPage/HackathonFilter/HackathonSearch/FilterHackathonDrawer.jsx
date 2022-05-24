import React, { useEffect, useState } from 'react'
import AntdDrawer from '../../../../components/AntdDrawer/AntdDrawer'
import CustomButton from '../../../../components/CustomButton/CustomButton';
import { Select, Switch, Radio } from 'antd';
import { hosts, tags } from '../../data/data';
import { filterByHost, filterByPopularTags } from '../hackathonReducer/hackathonAction';
import "../HackathonFilter.scss";
import useMediaQuery from '../../../../hooks/useMediaQuery';


const { Option } = Select;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChangeTag(value) {
  console.log(`selected arr`, value);
}


const FilterHackathonDrawer = ({isOpenDrawer, setIsOpenDrawer, dispatchHackathon}) => {
  
  // const isMatchQuery = useMediaQuery(768);
 

  const [valueDate, setValueDate] = React.useState(1);

  function handleSelectTag(value) {
    console.log('value select tag', value);
    dispatchHackathon(filterByPopularTags(value));
  }

  function handleSelectTagHost(value) {
    console.log('value select host', value);  
    dispatchHackathon(filterByHost(value));
  }

  function onChangeSwitch(checked) {
    console.log("switch value", checked);
  }

  function onChangeRadio(e) {
    console.log('radio checked', e.target.value);
    setValueDate(e.target.value);
  }


  return (

    <AntdDrawer className="hackathon-filter-drawer" title="Filter" isOpenDrawer={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
            <div className="tags-filter">
                <div className="f-between mb-20">
                    <h3 className="m-0">Tags</h3>
                    <CustomButton size="small" name="secondary">Remove All Tags</CustomButton>
                </div>
                <div className="input-filter-tags">
                  <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Search by keyword to add tag"
                    defaultValue={[]}
                    onChange={handleChangeTag}
                    onSelect={handleSelectTag}
                  >
                    {
                      tags.map((item, index) => {
                        return <Option key={item}>{item}</Option>
                      })
                    }
                  </Select>
                </div>
            </div>
            <div className="host-filter mt-16">
              <h3 className="mb-16">Host</h3>
              <Select
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Select Host"
                    defaultValue={[]}
                    onSelect={handleSelectTagHost}
                  >
                    {
                      hosts.map((item, index) => {
                        return <Option key={item}>{item}</Option>
                      })
                    }
                  </Select>
            </div>
            <div className="eligibility f-between mt-16">
              <h3>Check your eligibility</h3>
              <Switch onChange={onChangeSwitch} />
            </div>

            <div className="length-filter">
                <h3 className="mt-16">Length</h3>
                <Radio.Group onChange={onChangeRadio} value={valueDate} className="days-list">
                  <li className="mb-16">
                    <Radio value={1}>1 – 6 days</Radio >
                  </li>
                  <li className="mb-16">
                    <Radio value={2}>1 – 4 weeks</Radio >
                  </li>
                  <li className="mb-16">
                    <Radio value={3}>1+ month</Radio >
                  </li>
                </Radio.Group>
            </div>
    </AntdDrawer>
  )
}

export default FilterHackathonDrawer