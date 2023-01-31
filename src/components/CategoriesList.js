import CatName from "./Categorie";
import classes from "./CategoriesList.module.css";
import { useSelector } from "react-redux";

function CategoriesList() {
  const catList = useSelector((state) => state.menu.categories);

  return (
    <div className={classes.container}>
      <ul>
        {catList.map((el) => (
          <li key={el.catCode}>
            <CatName title={el.catName} items={el.menuItems} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesList;
