import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("data/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2 className="font-semibold text-2xl mb-2">All categories</h2>
      <div className="flex flex-col text-lg">
        {categories.map((category) => (
          <NavLink
            key={category.id}
            className="hover:link"
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
