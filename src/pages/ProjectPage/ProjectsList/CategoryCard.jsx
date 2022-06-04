import React, { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { searchProjectsByCategory } from "../../../contexts/appContext/appActions";
import { AppContext } from "../../../contexts/appContext/appContext";
import { categories } from "../data/data";
import "./ProjectsList.scss";


const CategoryCard = () => {
  const {appContext, dispatch} = useContext(AppContext);

  let navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const categorySearch = searchParams.get("category");



  return (
    <div className="category-card">
      <h2>Categories</h2>
      <div className="f-column">
        {
          categories.map((category) => {
            const activeBtn = categorySearch === category.desc;
            return (
              <button key={category.desc} className={`filter-item f-between ${activeBtn ? "active" : ""}`}
              onClick={() => {
                dispatch(searchProjectsByCategory(category.desc));
                navigate(`/software?search=${appContext.projectKeyword}&category=${category.desc}`)
              }}
            >
              <p>{category.desc}</p>
              <p>{category.quantity}</p>
            </button>
            )
          })
            
        }
       
      </div>
    </div>
  );
};

export default CategoryCard;
