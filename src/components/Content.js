import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initList } from "../redux/reducer";
import "../styles/Content.css";
import OrderList from "./OrderList";
import axios from "axios";
import { prolist, comlist } from "../redux/reducer";

function Content() {
  const [progressShow, setProShow] = useState(true);
  const [completedShow, setComShow] = useState(true);
  const dispatch = useDispatch();
  // 進行中的list
  const proList = useSelector(prolist);
  // 完成的list
  const comList = useSelector(comlist);

  const handleShow = (show, a) => {
    a === 1 ? setProShow(!show) : setComShow(!show);
  };

  // get data
  useEffect(() => {
    axios
      .get("http://localhost:3020/orders")
      .then((res) => {
        // console.log(res.data);
        dispatch(initList(res.data));
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className="content">
      <h2>訂單查詢</h2>
      {/* 訂單區塊 */}
      <div className="content__lists">
        {/* 進行中 */}
        {/* 進行中 status===1|| status===2 */}
        <h3 onClick={() => handleShow(progressShow, 1)}>進行中</h3>
        {progressShow && proList.length !== 0 ? (
          <OrderList data={proList} state={true} />
        ) : null}

        {/* 已完成 */}
        {/* 已完成 status===3|| status===4 */}
        <h3 onClick={() => handleShow(completedShow, 2)}>已完成</h3>
        {completedShow && comList.length !== 0 ? (
          <OrderList data={comList} state={false} />
        ) : null}
      </div>
    </div>
  );
}

export default Content;
