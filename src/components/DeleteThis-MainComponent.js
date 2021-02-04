import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  CardBody,
  Checkbox,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Text,
  Container,
  Row,
  Col
} from "reactstrap";
import { Image } from "react-bootstrap";
import { Parallax } from "react-parallax";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaClipboardCheck, FaPlus } from "react-icons/fa";
import FadeIn from "react-fade-in";
import { Button, Form } from "semantic-ui-react";
import Counter from "./TestCounter";
// Testing Counter feature for risk checklist- remember to remove component before submitting!!!
function Splash() {
  return (
    <React.Fragment>
      <Counter />
      <FadeIn transitionDuration={1400}>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://loren-hicks.com/images/passport.jpg"
            alt="Card image cap"
          />
          <CardBody>
            <CardHeader
              className="title-style"
              style={{
                backgroundColor: "rgba(33,33,69, 0.98)",
                color: "white"
              }}
            >
              Bahamas Health Travel Visa Survey
              <Row className="subtitle-style">
                <Col>
                  <br />
                  Bahamas Ministry of Tourism
                  <br />
                  <FaPlus style={{ fontSize: ".7em" }} />
                  <br />
                  Bahamas Ministry of Health
                </Col>
              </Row>
            </CardHeader>
            <CardText style={{ backgroundColor: "rgba(211,211,211,0.3)" }}>
              <Row className="body-style">
                <Col>
                  <strong>The Islands of The Bahamas</strong> has implemented a
                  series of public health measures to protect the wellbeing of
                  all citizens, residents and visitors. <br />
                  <u>
                    The following health survey is an important part of
                    preventing the spread of COVID-19 and ensuring The Bahamas
                    is safe for all to enjoy.
                  </u>
                </Col>
              </Row>
              <Row className="body-style">
                <Col>
                  <br />
                  <em>
                    All travelers are <strong>required</strong> to complete this
                    short survey each day of their trip, starting on their
                    arrival date <strong>(Day 1)</strong> or{" "}
                    <strong>a maximum of 14-days</strong>.
                  </em>
                </Col>
              </Row>
              <Row className="body-style">
                <Col style={{ color: "red" }}>
                  <br />
                  <input type="checkbox" required /> I commit to completing this
                  survey every day of my trip
                </Col>
              </Row>
              <Row className="body-style">
                <Col style={{ fontSize: "1.1rem" }}>
                  <br />
                  <strong>Traveler Information</strong>
                </Col>
              </Row>
              <Row style={{ fontSize: ".75rem" }} className="body-style">
                <Col>Name</Col>
              </Row>
              <Row className="body-style">
                <Col>
                  <strong>Raul Francisco La Rosa</strong>
                </Col>
                <br />
              </Row>
              <Row style={{ fontSize: ".75rem" }} className="body-style">
                <Col>Account ID</Col>
              </Row>
              <Row className="body-style">
                <Col>
                  <strong>TUYW2468</strong>
                </Col>
                <br />
              </Row>
              <Row style={{ fontSize: ".75rem" }} className="body-style">
                <Col>Trip ID</Col>
              </Row>
              <Row className="body-style">
                <Col>
                  <strong>KZ2348</strong>
                </Col>
                <br />
              </Row>
              <Row className="body-style">
                <Col style={{ color: "red" }}>
                  <input type="checkbox" required /> I verify that the above
                  information is correct
                </Col>
              </Row>
            </CardText>
          </CardBody>
        </Card>
      </FadeIn>
    </React.Fragment>
  );
}

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" }
];

class FormExampleSubcomponentControl extends Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;
    return (
      <React.Fragment>
        <Splash />
        <Form style={{ padding: 10 }}>
          <Form.Group widths="equal">
            <Form.Input fluid label="First name" placeholder="First name" />
            <Form.Input fluid label="Last name" placeholder="Last name" />
            <Form.Select
              fluid
              label="Gender"
              options={options}
              placeholder="Gender"
            />
          </Form.Group>
          <Form.Group inline>
            <label>Size</label>
            <Form.Radio
              label="Small"
              value="sm"
              checked={value === "sm"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Medium"
              value="md"
              checked={value === "md"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Large"
              value="lg"
              checked={value === "lg"}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.TextArea
            label="About"
            placeholder="Tell us more about you..."
          />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <div style={{ padding: 10 }}>
            <Button.Group>
              <Button positive onClick={this.toggleModal}>
                Submit
              </Button>
              <Button.Or />
              <Button negative>Reset</Button>
            </Button.Group>
          </div>
        </Form>
      </React.Fragment>
    );
  }
}

export default FormExampleSubcomponentControl;
/* Authors: Raul La Rosa and Loren Hicks */
