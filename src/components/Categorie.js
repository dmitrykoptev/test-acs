import React from "react";
import MenuItem from "./MenuItem";
import classes from "./Categorie.module.css";

const Categorie = (props) => {
  return (
    <div className={classes.categorie}>
      <h2>{props.title}</h2>
      <ul className={classes.list}>
        {props.items.map((item) => (
          <li key={item.itemCode}>
            <MenuItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categorie;
