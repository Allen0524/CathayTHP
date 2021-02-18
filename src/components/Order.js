import React from "react";
import "../styles/Order.css";

function Order({ order, state }) {
  return (
    <div className={`order ${state ? "" : "grayImg"}`}>
      {/* 左區塊 logo */}
      <div className="order__left">
        <img src={order.logo} alt="Tree Mall logo" style={{ height: "50px" }} />
      </div>
      {/* 中間 */}
      <div className="order__center">
        {/* 上面： status & date*/}
        <div className="center__up">
          <h5 className="status">{order.status.type}</h5>
          <h5>{state ? `預計出貨：${order.date}` : ``}</h5>
        </div>
        {/* 下面： details*/}
        <div className="center__down">
          <p>{order.name}</p>
        </div>
      </div>
      {/* 右區塊 > */}
      <div className="order__right">
        <span>{">"}</span>
      </div>
    </div>
  );
}

export default Order;
