import React from "react";
import { Cascader } from "antd";
import axios from "axios";

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

const onChange = () => {
  axios.get(`https://restcountries.eu/rest/v2/`).then((response) => {
    console.log(response.data);
    response.data.map((items, index) => <div key={index}>{items.name}</div>);
  });
};

const accessories = () => {
  return (
    <div>
      {" "}
      <Cascader
        defaultValue={["zhejiang", "hangzhou", "xihu"]}
        options={options}
        onChange={onChange}
      />
    </div>
  );
};

export default accessories;
