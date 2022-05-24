import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { searchProjectsByCategory } from "../../../contexts/appContext/appActions";
import { AppContext } from "../../../contexts/appContext/appContext";
import { categories } from "../data/data";
import "./ProjectsList.scss";


const CategoryCard = () => {
  const {appContext, dispatch} = useContext(AppContext);

  let navigate = useNavigate();

  return (
    <div className="category-card">
      <h2>Categories</h2>
      <div className="f-column">
        {
          categories.map((category) => (
            <button key={category.desc} className="filter-item f-between"
              onClick={() => {
                dispatch(searchProjectsByCategory(category.desc));
                navigate(`/software?search=${appContext.projectKeyword}&category=${category.desc}`)
              }}
            >
              <p>{category.desc}</p>
              <p>{category.quantity}</p>
            </button>
          ))
        }
       
      </div>
    </div>
  );
};

export default CategoryCard;
