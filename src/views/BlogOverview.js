import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";

import Map from "./../components/charts/Map";

import MainSubCharts from "./../components/charts/MainSubCharts";
import PageTitle from "./../components/common/PageTitle";

import "../assets/map.css";

class BlogOverview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smallStats: [
        {
          label: "Posts",
          value: "2,390",
          percentage: "4.7%",
          increase: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "6", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(0, 184, 216, 0.1)",
              borderColor: "rgb(0, 184, 216)",
              data: [1, 2, 1, 3, 5, 4, 7]
            }
          ]
        },
        {
          label: "Pages",
          value: "182",
          percentage: "12.4",
          increase: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "6", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(23,198,113,0.1)",
              borderColor: "rgb(23,198,113)",
              data: [1, 2, 3, 3, 3, 4, 4]
            }
          ]
        },
        {
          label: "Comments",
          value: "8,147",
          percentage: "3.8%",
          increase: false,
          decrease: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "4", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(255,180,0,0.1)",
              borderColor: "rgb(255,180,0)",
              data: [2, 3, 3, 3, 4, 3, 3]
            }
          ]
        },
        {
          label: "New Customers",
          value: "29",
          percentage: "2.71%",
          increase: false,
          decrease: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "4", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgba(255,65,105,0.1)",
              borderColor: "rgb(255,65,105)",
              data: [1, 7, 1, 3, 1, 4, 8]
            }
          ]
        },
        {
          label: "Subscribers",
          value: "17,281",
          percentage: "2.4%",
          increase: false,
          decrease: true,
          chartLabels: [null, null, null, null, null, null, null],
          attrs: { md: "4", sm: "6" },
          datasets: [
            {
              label: "Today",
              fill: "start",
              borderWidth: 1.5,
              backgroundColor: "rgb(0,123,255,0.1)",
              borderColor: "rgb(0,123,255)",
              data: [3, 2, 3, 2, 4, 5, 4]
            }
          ]
        }
      ]
    };
  }

  //Grabbing data functions
  //Will replace with api calls also upgrade them to get yearly, montly, and daily inputs
  getRetailData = {
    stock: () => {
      const responseLabels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July"
      ];
      const responseValues = Array.from(
        new Array(7),
        () => Math.random() * 100
      );
      var data = {};
      responseLabels.forEach((label, i) => {
        data[label] = responseValues[i];
      });

      return { data };
    },
    sales: () => {
      const responseLabels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July"
      ];
      const responseValues = Array.from(
        new Array(7),
        () => Math.random() * 100
      );
      var data = {};
      responseLabels.forEach((label, i) => {
        data[label] = responseValues[i];
      });

      return { data };
    },
    revenue: () => {
      const responseLabels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July"
      ];
      const responseValues = Array.from(
        new Array(7),
        () => Math.random() * 100
      );
      var data = {};
      responseLabels.forEach((label, i) => {
        data[label] = responseValues[i];
      });

      return { data };
    },
    customer: () => {
      const responseLabels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July"
      ];
      const responseValues = Array.from(
        new Array(7),
        () => Math.random() * 100
      );
      var data = {};
      responseLabels.forEach((label, i) => {
        data[label] = responseValues[i];
      });

      return { data };
    }
  };
  getCovidData = {
    cases: () => {
      const responseLabels = Array.from(new Array(30), (_, i) => i + 1);
      const responseValues = Array.from(
        new Array(30),
        () => Math.random() * 1000
      );

      var data = {};
      responseLabels.forEach((label, i) => {
        data[label] = responseValues[i];
      });

      return { data };
    }
  };
  getPredictionData = {
    sales: () => {
      const responseLabels = (() => {
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ];
        const thisMonth = new Date().getMonth();
        var nextMonths = [];

        for (var i = 0; i < 5; i++) {
          nextMonths.push(months[(i + thisMonth) % 12]);
        }
        return nextMonths;
      })();
      const responseValues = Array.from(
        new Array(5),
        () => Math.random() * 1000
      );

      var data = {};
      responseLabels.forEach((label, i) => {
        data[label] = responseValues[i];
      });

      return { data };
    },
    revenue: () => {
      const responseLabels = (() => {
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ];
        const thisMonth = new Date().getMonth();
        var nextMonths = [];

        for (var i = 0; i < 5; i++) {
          nextMonths.push(months[(i + thisMonth) % 12]);
        }
        return nextMonths;
      })();
      const responseValues = Array.from(
        new Array(5),
        () => Math.random() * 1000
      );

      var data = {};
      responseLabels.forEach((label, i) => {
        data[label] = responseValues[i];
      });

      return { data };
    },
    customer: () => {
      const responseLabels = (() => {
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ];
        const thisMonth = new Date().getMonth();
        var nextMonths = [];

        for (var i = 0; i < 5; i++) {
          nextMonths.push(months[(i + thisMonth) % 12]);
        }
        return nextMonths;
      })();
      const responseValues = Array.from(
        new Array(5),
        () => Math.random() * 1000
      );

      var data = {};
      responseLabels.forEach((label, i) => {
        data[label] = responseValues[i];
      });

      return { data };
    }
  };

  render() {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-2">
          <PageTitle subtitle="" className="text-sm-left mb-1" />
        </Row>
        <Row>
          <div className="col">
            <div className="card card-small mb-4">
              <div className="card-body p-10 pb-3">
                <div
                  id={"maps_MapAreaBorder0"}
                  className="ag-theme-alpine"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Map />
                </div>
              </div>
            </div>
          </div>
        </Row>

        {/*All charts under the map should be rendered here */}
        <MainSubCharts
          getCovidData={this.getCovidData}
          getPredictionData={this.getPredictionData}
          getRetailData={this.getRetailData}
        />
      </Container>
    );
  }
}

export default BlogOverview;
