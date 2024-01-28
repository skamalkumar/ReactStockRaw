import React from "react";
import Card from "./Card";

const HistoricalResults = ({ history }) => {
  return (
    <Card>
      {Object.keys(history.metric).map((item) => {
        // const {
        //   TenDayAverageTradingVolume,
        //   FiftyTwoWeekHigh,
        //   FiftyTwoWeekLow,
        //   FiftyTwoWeekLowDate,
        //   FiftyTwoWeekPriceReturnDaily,
        //   beta,
        // } = item;
        return (
          <ul className="">
            <li
              key={item.symbol}
              className="cursor-pointer p-4 m-2 flex items-center justify-center rounded-md hover:bg-indigo-100"
            >
              {item}: <span className="ml-5"> {history.metric[item]} </span>
            </li>
          </ul>
        );
      })}
    </Card>
  );
};

export default HistoricalResults;
