import React, { useEffect, useState } from "react";
import { SELECTED_USERS } from "./Mock_data";

const Filter = () => {
  // const [android, setAndriod] = useState([]);
  const [select, setSelect] = useState({
    androids: false,
    ios: false,
    ott: false
  });

  const [category, setCategory] = useState([]);
  const [categorydevices, setCategorydevices] = useState([]);

  console.log("nn", categorydevices);

  useEffect(() => {}, [category, categorydevices]);

  const select_dv = (e) => {
    const { value } = e.target;
    if (value === "ANDROID") {
      setSelect({
        ...select,
        androids: true,
        ios: false,
        ott: false
      });
      setCategory(Object.keys(SELECTED_USERS.ANDROID));
    } else if (value === "IOS") {
      setSelect({
        ...select,
        androids: false,
        ios: true,
        ott: false
      });
      setCategory(Object.keys(SELECTED_USERS.IOS));
    } else if (value === "OTT") {
      setSelect({
        ...select,
        androids: false,
        ios: false,
        ott: true
      });
      setCategory(Object.keys(SELECTED_USERS.OTT));
    }
  };

  const select_catone = (e) => {
    const { value } = e.target;
    const filterDevices =
      value === "android1"
        ? setCategorydevices(Object.values(SELECTED_USERS.ANDROID.android1))
        : value === "android2"
        ? setCategorydevices(Object.values(SELECTED_USERS.ANDROID.android2))
        : value === "android3"
        ? setCategorydevices(Object.values(SELECTED_USERS.ANDROID.android3))
        : value === "android4"
        ? setCategorydevices(Object.values(SELECTED_USERS.ANDROID.android4))
        : value === "ios1"
        ? setCategorydevices(Object.values(SELECTED_USERS.IOS.ios1))
        : value === "ios2"
        ? setCategorydevices(Object.values(SELECTED_USERS.IOS.ios2))
        : value === "ios3"
        ? setCategorydevices(Object.values(SELECTED_USERS.IOS.ios3))
        : value === "ios4"
        ? setCategorydevices(Object.values(SELECTED_USERS.IOS.ios4))
        : value === "ott1"
        ? setCategorydevices(Object.values(SELECTED_USERS.OTT.ott1))
        : value === "ott2"
        ? setCategorydevices(Object.values(SELECTED_USERS.OTT.ott2))
        : value === "ott3"
        ? setCategorydevices(Object.values(SELECTED_USERS.OTT.ott3))
        : value === "ott4"
        ? setCategorydevices(Object.values(SELECTED_USERS.OTT.ott4))
        : "";
  };

  return (
    <div className="filters_data m-3">
      <div>devices</div>
      <select onChange={select_dv} className="m-2">
        <option>plz select devices</option>
        {Object.keys(SELECTED_USERS).map((item) => {
          return <option>{item}</option>;
        })}
      </select>

      <select onChange={select_catone} className="m-2">
        <option>category1</option>
        {category?.map((ele) => {
          return <option value={ele}>{ele}</option>;
        })}
      </select>

      <select className="m-3">
        <option>Devices</option>
        {categorydevices?.map((ele) => {
          return <option value={ele}>{ele}</option>;
        })}
      </select>
    </div>
  );
};
export default Filter;
