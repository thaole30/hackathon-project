import React, { useContext } from 'react';
import "./TrendingTag.scss";
import { Space, Tag  } from 'antd';
import { tags } from '../data/data';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../../contexts/appContext/appContext';
import { searchProjectsByKeyword } from '../../../contexts/appContext/appActions';

const TrendingTag = () => {

    const {appContext, dispatch} = useContext(AppContext);

    let navigate = useNavigate();

  return (
    <div className="trending-tag">
        <div className="container-lg trending-tag-wrapper">
            <h2 className="mb-32">TRENDING TAG</h2>
            <div className="trending-tag-divider"></div>
            <Space>
                {
                    tags.map((tag, index) => (
                        <Tag className="tag-item" key={index}
                            onClick={() => {
                                dispatch(searchProjectsByKeyword(tag));
                                navigate(`/software?search=${tag}&category=${appContext.selectedCategory}`)
                            }}
                        >{tag}</Tag>
                    ))
                }
            </Space>
        </div>
    </div>
  )
}

export default TrendingTag