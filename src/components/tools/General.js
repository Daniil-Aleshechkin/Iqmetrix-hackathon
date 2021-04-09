import React, { Component } from "react";

import {Button, Card, CardBody, Form, FormInput} from "shards-react";
import ReactQuill from "react-quill";
import MaterialDatePicker from "./MaterialDatePicker";

class General extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Card small className="mb-3">
        <CardBody className="p-1 table-bordered text-center">
          <Form className="add-new-post">
            <Button theme="dark"  style={{"width":"80%", "marginTop": "20px"}}>Reset All</Button>
            <Button theme="dark"  style={{"width":"80%", "marginTop": "20px"}}>Download All</Button>
            <MaterialDatePicker  style={{"width":"80%", "marginTop": "20px"}}/>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default General;
