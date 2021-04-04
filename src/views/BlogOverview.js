import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import MainSubCharts from "./../components/charts/MainSubCharts";
import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import UsersOverview from "./../components/blog/UsersOverview";
import UsersByDevice from "./../components/blog/UsersByDevice";
import NewDraft from "./../components/blog/NewDraft";
import Discussions from "./../components/blog/Discussions";
import TopReferrals from "./../components/common/TopReferrals";

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
        console.log(nextMonths);
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
        <Row noGutters className="page-header py-4">
          <PageTitle subtitle="Dashboard" className="text-sm-left mb-1" />
        </Row>
        <MainSubCharts
          getCovidData={this.getCovidData}
          getPredictionData={this.getPredictionData}
          getRetailData={this.getRetailData}
        />
        {/* Small Stats Blocks */}
        <Row>
          {this.state.smallStats.map((stats, idx) => (
            <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
              <SmallStats
                id={`small-stats-${idx}`}
                variation="1"
                chartData={stats.datasets}
                chartLabels={stats.chartLabels}
                label={stats.label}
                value={stats.value}
                percentage={stats.percentage}
                increase={stats.increase}
                decrease={stats.decrease}
              />
            </Col>
          ))}
        </Row>

        <Row>
          {/* Users Overview */}
          <Col lg="8" md="12" sm="12" className="mb-4">
            <UsersOverview />
          </Col>

          {/* Users by Device */}
          <Col lg="4" md="6" sm="12" className="mb-4">
            <UsersByDevice />
          </Col>

          {/* New Draft */}
          <Col lg="4" md="6" sm="12" className="mb-4">
            <NewDraft />
          </Col>

          {/* Discussions */}
          <Col lg="5" md="12" sm="12" className="mb-4">
            <Discussions />
          </Col>

          {/* Top Referrals */}
          <Col lg="3" md="12" sm="12" className="mb-4">
            <TopReferrals />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BlogOverview;
