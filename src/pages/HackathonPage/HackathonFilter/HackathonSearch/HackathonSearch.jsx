import React, { useEffect, useState } from 'react';
import { Space } from 'antd';
import { connectAppContext } from '../../../../contexts/appContext/appContext';
import { openDrawer } from '../../../../contexts/appContext/appActions';
import SearchComponent from '../../../../components/SearchComponent/SearchComponent';
import { filterByTitle } from '../hackathonReducer/hackathonAction';
import FilterHackathonDrawer from './FilterHackathonDrawer';
import useMediaQuery from '../../../../hooks/useMediaQuery';

const HackathonSearch = ({dispatchHackathon}) => {

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    // const showDrawer = () => {
    //     dispatch(openDrawer());
    //   };
    
    // const isMatchQuery = useMediaQuery(768);

    // useEffect(() => {
    //     if(!isMatchQuery) {
    //         setIsOpenDrawer(false);
    //     }
    // }, [isMatchQuery])

    const [valueSearch, setValueSearch] = useState("");

    const handleChangeInputSearch = (e) => {
        setValueSearch(e.target.value);
    }

    const handleInputSearch = (e) => {
        e.preventDefault();
        dispatchHackathon(filterByTitle(valueSearch));
    }

  return (
      <>      
        <SearchComponent
            placeholder="Search with hackathon name, skills, tech, etc."
            valueSearch={valueSearch}
            onChangeInputSearch={handleChangeInputSearch}
            onHandleInput={handleInputSearch}
        >
            <Space>
                <button type="button" className="filter-btn"
                    // onClick={showDrawer}
                    onClick={() => setIsOpenDrawer(true)}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z" stroke="#080A25" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                </button>
                <button type="button" className="filter-btn">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 21H10.5V18.6667H3.5V21ZM3.5 7V9.33333H24.5V7H3.5ZM3.5 15.1667H17.5V12.8333H3.5V15.1667Z" fill="black"></path></svg>
                </button>
            </Space>
        </SearchComponent>
        <FilterHackathonDrawer isOpenDrawer={isOpenDrawer} setIsOpenDrawer={setIsOpenDrawer} dispatchHackathon={dispatchHackathon}/>
      </>
  )
}

export default connectAppContext(HackathonSearch);