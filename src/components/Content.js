import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initList } from "../redux/reducer";
import "../styles/Content.css";
import OrderList from "./OrderList";
import axios from "axios";
import { prolist, comlist } from "../redux/reducer";

function Content() {
  // list開關
  const [progressShow, setProShow] = useState(true);
  const [completedShow, setComShow] = useState(true);

  const dispatch = useDispatch();
  // 進行中的list
  const proList = useSelector(prolist);
  // 完成的list
  const comList = useSelector(comlist);

  // 額外功能：點選進行中或已完成可以收合list
  // code === ing -> 進行中
  const handleShow = (show, code) => {
    code === "ing" ? setProShow(!show) : setComShow(!show);
  };

  // get data
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios
        .get("http://localhost:3020/orders")
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          alert(err);
        });
      dispatch(initList(data));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="content">
      <h2>訂單查詢</h2>
      {/* 訂單區塊 */}
      <div className="content__lists">
        {/* 進行中 */}
        <h3 onClick={() => handleShow(progressShow, "ing")}>進行中</h3>
        {progressShow ? (
          <OrderList data={proList} state={true} />
        ) : proList.length === 0 ? (
          <h4>目前無訂單呦～</h4>
        ) : null}

        {/* 已完成 */}
        <h3 onClick={() => handleShow(completedShow, "com")}>已完成</h3>
        {completedShow ? (
          <OrderList data={comList} state={false} />
        ) : comList.length === 0 ? (
          <h4>目前無訂單呦～</h4>
        ) : null}
      </div>
    </div>
  );
}

export default Content;
