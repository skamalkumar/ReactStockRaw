import React, { useContext } from "react";
// import Card from "./Card";
import { mockCompanyDetails, mockHistoricalData } from "../constants/mock";
import Header from "./Header";
import Details from "./Details";
import Overview from "./Overview";
import HistoricalResults from "./HistoricalResults";
import ThemeContext from "../context/ThemeContext";

const Dashboard = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div
      className={`h-screen grid grid-cols-1 md:grid-cols-2 grid-rows-5 md:grid-rows-4 xl:grid-rows-3 auto-rows-fr gap-6 p-10 ${
        darkMode ? "bg-blue-200 text-black-900" : "bg-neutral-100"
      }`}
    >
      <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1">
        <Header name={mockCompanyDetails.name}></Header>
      </div>
      <div className="md:col-span-2 row-span-4">
        <HistoricalResults history={mockHistoricalData}>EPS</HistoricalResults>
      </div>
      <div>
        <Overview
          symbol={mockCompanyDetails.ticker}
          price={300}
          change={30}
          changePercent={10.1}
          currency={"usd"}
        ></Overview>
      </div>
      <div className="row-span-2 xl:row-span-3">
        <Details details={mockCompanyDetails}></Details>
      </div>
    </div>
  );
};

export default Dashboard;
