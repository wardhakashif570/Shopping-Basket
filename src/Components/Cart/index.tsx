import React, { useEffect, useState } from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCart,
  checkout,
} from "../../Reducers/cartReducer";
import { cartItemType, cardType3, stateType } from "../Types/types";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  let [a, setA] = useState(0);
  const [data, setData] = useState<cardType3[ ]>([]);
  let cartValue = useSelector((state: stateType) => {
    return state.cartSlice.cartArray;
  });

  const handleTotal = () => {
    let p = 0;
    cartValue &&
      cartValue?.map((x: cardType3) => {
        p = p + x.subTotal;
        setA(p);
      });
  };
  useEffect(() => {
    setData(cartValue);
    handleTotal();
  }, [cartValue]);
  if (data.length === 0) {
    return (
      <h1
        className="mt-5  "
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        Cart Is Empty
      </h1>
    );
  }

  const handleChange = (e: any, id: string) => {
    let Quantity = e.target.value;
    let obj = {
      Quantity,
      id,
    };
    dispatch(updateCart(obj));
    handleTotal();
  };
  const handleCheckout = () => {
    toast.success("✔️ ThankYou For Shopping ", {
      position: "top-center",
      autoClose: 5200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch(checkout());
  };
  return (
    <div>
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
      <div className="container">
        <div className="row rowBar ">
          <div className="col-sm-6 col">Products</div>
          <div className="col-sm-3 col">Quantity</div>
          <div className="col-sm-3 col">Subtotal</div>
        </div>
        {data &&
          data?.map((item: cardType3, index: number) => {
            return (
              <div className="row  no-gutters mb-2" key={index}>
                <div className="col-sm-6 col" key={index}>
                  <div className="singleCart_Wrapper">
                    <img className="cartProductImage" src={item.image} alt="" />
                    <div>
                      <p className="dynamic_Cart_Data">{item.title}</p>
                      <p className="dynamic_Cart_Data">{item.price} PKR</p>

                      <p
                        className="removeBtn dynamic_Cart_Data"
                        onClick={() => {
                          dispatch(removeFromCart(item.id));
                        }}
                      >
                        Remove
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3 col mt-5 justify-content-center align-item-center">
                  <input
                    type="number"
                    min="0"
                    max="50"
                    defaultValue="1"
                    onChange={(e) => handleChange(e, item.id)}
                  />
                </div>
                <div className="col-sm-3 col mt-5 dynamic_Cart_Data d-flex justify-content-center align-item-center">
                  {item.price * item.Quantity}
                </div>
              </div>
            );
          })}
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-3"></div>
          <div className="col-md-6 col-sm-12  col subTotal">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5px",
              }}
            >
              <span>Total </span>
              <span className="subTotalPrice">{a}</span>
            </div>
            <button className="checkoutButton" onClick={handleCheckout}>
              Check Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;