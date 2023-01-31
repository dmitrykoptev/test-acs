import React, { useState } from "react";
import classes from "./MenuItem.module.css";
import { BiRuble } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";

const MenuItem = (props) => {
  const url = `https://smartapp.acs-cis.ru/assets/img/Menu/${props.item.url}`;
  const priceInit = props.item.itemPrice;
  const weightInt = props.item.itemWeight;
  const [price, setPrice] = useState(priceInit);
  const [weight, setWeight] = useState(weightInt);
  const [quantity, setQuantity] = useState(null);

  const addPriceHandle = () => {
    setQuantity((prev) => prev + 1);
    if (quantity < 1) {
      return;
    } else {
      setPrice((prev) => prev + priceInit);
      setWeight((prev) => prev + weightInt);
    }
  };

  const removePriceHandle = () => {
    if (price === priceInit) {
      if (quantity === 1) {
        setQuantity((prev) => prev - 1);
      }
      return;
    }
    setQuantity((prev) => prev - 1);
    setPrice((prev) => prev - priceInit);
    setWeight((prev) => prev - weightInt);
  };

  return (
    <div className={classes.itemCard}>
      <div className={classes.imgContainer}>
        <img className={classes.itemImg} src={url} />
        <CSSTransition
          mountOnEnter
          unmountOnExit
          in={!!quantity}
          timeout={250}
          classNames={{
            enter: "",
            enterActive: classes.openModal,
            exit: "",
            exitActive: classes.closeModal,
          }}
        >
          <div className={classes.itemQuantity}>
            {quantity ? <span>{quantity}</span> : ""}
          </div>
        </CSSTransition>
      </div>
      <div className={classes.itemInfo}>
        <h3>{props.item.itemName}</h3>
        <p className={classes.itemDescription}>{props.item.itemDescription}</p>
        <div className={classes.itemCardBottom}>
          <p>{weight} гр</p>
          <div className={classes.priceBlock}>
            <button onClick={addPriceHandle} className={classes.btnQuantity}>
              <AiOutlinePlus />
            </button>
            <span className={classes.price}>
              <span>{price}</span>
              <BiRuble />
            </span>
            <button onClick={removePriceHandle} className={classes.btnQuantity}>
              <AiOutlineMinus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
