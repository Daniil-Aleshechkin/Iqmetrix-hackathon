import React, { Component } from "react";

import {Button, Card, CardBody, Form, FormInput} from "shards-react";
import ReactQuill from "react-quill";
import MaterialDatePicker from "./MaterialDatePicker";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

class General extends Component {
  constructor(props) {
    super(props);

  }
  printDocument() {
    html2canvas(document.querySelector("#allDatas")).then(canvas => {
       // if you want see your screenshot in body.
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save("download.pdf");
    });
  }

   refreshPage() {
    window.location.reload(false);
  }
  render() {
    return (
      <Card small className="mb-3">
        <CardBody className="p-1 table-bordered text-center">
          <Form className="add-new-post">
            <button theme="dark"  onClick={this.refreshPage} type="button" class="btn btn-dark"  style={{"width":"80%", "marginTop": "20px"}}>Reset All</button>
            <button type="button" onClick={this.printDocument} class="btn btn-dark"  style={{"width":"80%", "marginTop": "20px"}}>Download All</button>
            <MaterialDatePicker  style={{"width":"80%", "marginTop": "20px"}}/>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default General;
