import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";

import Map from "./../components/charts/Map";

import MainSubCharts from "./../components/charts/MainSubCharts";
import PageTitle from "./../components/common/PageTitle";

import "../assets/map.css";

class BlogOverview extends Component {
  //Grabbing data functions
  //Will replace with api calls also upgrade them to get yearly, montly, and daily inputs
  getRetailData = {
    stock: () => {
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
    },
    sales: () => {
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
    },
    revenue: () => {
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
    },
    customer: () => {
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
    },
    deaths: () => {
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
    },
    vacinations: () => {
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
