import React from "react";
import "../styles/OrderList.css";
import Order from "./Order";

function OrderList({ data, state }) {
  // state是要控制灰階圖片
  return (
    <div className="orderList">
      {/* data要排序 */}
      {data.map((order, index) => (
        <Order key={index} order={order} state={state} />
      ))}
    </div>
  );
}

export default OrderList;
