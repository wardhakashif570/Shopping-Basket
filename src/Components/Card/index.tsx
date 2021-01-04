import React, { useEffect, useState } from "react";
import { addtoCart } from "../../Reducers/cartReducer";

import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./card.css";
import { cardType3, stateType } from "../Types/types";

const Card: React.FunctionComponent<any> = ({ obj }) => {
  const [isOffline, setIsOffline] = useState(false);
  function isOnline() {
    console.log("Offline Func");
    if (navigator.onLine) {
      console.log(true);
      setIsOffline(false);
    } else {
      console.log(true);
      setIsOffline(true);
    }
  }
  useEffect(() => {
    console.log(isOffline)
    if (navigator.onLine) {
      setIsOffline(false);
      console.log("online");
    } else {
      setIsOffline(true);
      console.log("offline");
    }
    // isOnline();
  }, [isOffline]);
  const dispatch = useDispatch();
  let cartValue = useSelector((state: stateType) => {
    return state.cartSlice.cartArray;
  });
  // let favValue = useSelector((state: stateType) => {
  //   return state.favSlice.favArray;
  // });

  // const addFav = (obj: cardType3) => {
  //   if (favValue.find((x: cardType3) => x.id === obj.id)) {
  //     return toast.error("❌Item Already Added!", {
  //       position: "top-center",
  //       autoClose: 1500,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //     });
  //   } 
  // };
  const addCart = (param: cardType3) => {
    if (cartValue.find((x: cardType3) => x.id === param.id)) {
      return toast.error("❌Item Already Added!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch(addtoCart(obj));
      toast.success("✔️ Item Added", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="card">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />{" "}

      <img
        src={obj.image}
        className="card-img-top"
        alt={obj.title}
        height="200px"
      />

      <div className="card-body">
        <h5 className="card-title">{obj.name}</h5>

        <p className="card-text">Price: {obj.price}</p>
        <button
          className="btn btn-warning m-1"

          onClick={() => addCart(obj)}
        >
          Add To Cart
        </button>


      </div>
    </div>
  );
};

export default Card;