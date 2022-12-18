import React from "react";
import Dashbaord from "./DashboardTop";
import "./style.scss";
import Tr from "./Tr";

const DashboardBottom = () => {
  const users = [
    {
      img: "bi bi-person",
      text: "Spicy seasoned seafood noodles ",
      status: "Completed",
      price: "$125",
      names: "Eren Jaegar",
    },
    {
      img: "bi bi-person",
      text: "Spicy seasoned seafood noodles ",
      status: "Preparing",
      price: "$1452",
      names: "Jek",
    },
    {
      img: "bi bi-person",
      text: "Spicy seasoned seafood noodles ",
      status: "Pending",
      price: "$45",
      names: "Jaegar",
    },
    {
      img: "bi bi-person",
      text: "Spicy seasoned seafood noodles ",
      status: "Completed",
      price: "$95",
      names: "lady",
    },
    {
      img: "bi bi-person",
      text: "Spicy seasoned seafoo ",
      status: "Pending",
      price: "$45",
      names: "sojdn",
    },
    {
      img: "bi bi-person",
      text: "Spicy seasoned seafood noodles ",
      status: "Completed",
      price: "$125",
      names: "Eren Jaegar",
    },
    {
      img: "bi bi-person",
      text: "Spicy seasoned seafood noodles ",
      status: "Preparing",
      price: "$1452",
      names: "Jek",
    },
    {
      img: "bi bi-person",
      text: "Spicy seasoned seafood noodles ",
      status: "Pending",
      price: "$45",
      names: "Jaegar",
    },
    {
      img: "bi bi-person",
      text: "Spicy seasoned seafood noodles ",
      status: "Completed",
      price: "$95",
      names: "lady",
    },
    {
      img: "bi bi-person",
      text: "Spicy seasoned seafoo ",
      status: "Pending",
      price: "$45",
      names: "sojdn",
    },
  ];
  return (
    <>
      <section className="cold__dishest">
        <div className="row">
          <Dashbaord
            iconInfo="bi bi-currency-dollar"
            foiz="+32.40%"
            arrowIcon="bi bi-arrow-up"
            CardPrice="$10,243.00"
            CardTotol="Total Revenue"
            iconInfoColor="#9288E0"
            foizColor=" #50D1AA"
            arrowColor="#50D1AA"
            bgIcon="rgba(136, 224, 145, 0.24)"
          />
          <Dashbaord
            iconInfo="bi bi-box-arrow-down"
            foiz="-12.40%"
            arrowIcon="bi bi-arrow-down"
            CardPrice="23,456"
            CardTotol="Total Revenue"
            iconInfoColor="#FFB572"
            foizColor=" #FF7CA3"
            arrowColor="#FF7CA3"
            bgIcon="rgba(136, 224, 145, 0.24)"
          />
          <Dashbaord
            iconInfo="bi bi-people-fill"
            foiz="+2.40%"
            arrowIcon="bi bi-arrow-up"
            CardPrice="1,234"
            CardTotol="Total Revenue"
            iconInfoColor="#FFB572"
            foizColor=" #50D1AA"
            arrowColor="#50D1AA"
            bgIcon="rgba(136, 224, 145, 0.24)"
          />
        </div>
        <div className="row mt-3 userPromis">
          <div className="col-12 userSorts">
            <h2>Order Report</h2>
            <button className="btn">
              <i class="bi bi-filter"></i>
              <span className="ms-2">Filter Order</span>
            </button>
          </div>
          <div className="col-12 table-responsive-sm table-responsive-md table-responsive-lg tableWrapper">
            <div className="table-striped ">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Customer</th>
                    <th scope="col">Menu</th>
                    <th scope="col">Total Payment</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item) => {
                    return <Tr data={item} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardBottom;
