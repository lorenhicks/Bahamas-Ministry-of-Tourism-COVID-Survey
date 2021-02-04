import React, { Component } from "react";
import {
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  Form,
  Header,
  Icon,
  Label,
  Modal,
  Table
} from "semantic-ui-react";
import {
  tripSurveyContent,
  tripSurveyQuestions,
  symptomList,
  documentationContent
} from "../helpers/content";
import { fetchTravelerData } from "../helpers/data";
import { checkHighRisk } from "../helpers/data";
import "./SvgIcon/SvgIcon.css";

class Counter extends Component {
  state = {};
  handleChange = (e, { value }) => this.setState({ value });
  constructor(props) {
    super(props);
    this.state = {
      tripSurveyContent,
      tripSurveyQuestions,
      symptomList,
      documentationContent,
      count: 0
    };
  }

  // change code below this line

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  // change code above this line
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Form>
            <Form.Field>
              Selected value: <b>{this.state.value}</b>
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="Choose this"
                name="checkboxRadioGroup"
                value="this"
                checked={this.state.value === "this"}
                onChange={this.handleChange}
                onClick={(e) => this.increment(e)}
              />
            </Form.Field>
            <Form.Field>
              <Checkbox
                radio
                label="Or that"
                name="checkboxRadioGroup"
                value="that"
                checked={this.state.value === "that"}
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form>
          <Form>
            <Container text>
              <div>{tripSurveyContent.title}</div>
              <br />
              <div>{tripSurveyContent.sub_title}</div>
              <br />
              <div>{tripSurveyContent.info_parapgraphs}</div>
              <br />
              <Form.Checkbox
                label={tripSurveyContent.commitLabel}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
            </Container>
            <br />
            <Container text>
              <Header as="h3">Traveler Information</Header>
              <p>Name</p>
              <Header as="h4">
                {fetchTravelerData().firstName} {"\n"}
                {fetchTravelerData().middleName} {"\n"}
                {fetchTravelerData().lastName}
              </Header>
              <p>Account ID</p>
              <Header as="h4">{fetchTravelerData().accountID}</Header>
              <p>Trip ID</p>
              <Header as="h4">{fetchTravelerData().tripID}</Header>
              <Form.Checkbox
                label={tripSurveyContent.verifyTravelerInformatiionLabel}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
            </Container>
            <Divider horizontal>
              <Header as="h4">Health Travel Visa Survey</Header>
            </Divider>
            <Container text>
              <Header as="h5">
                {tripSurveyQuestions.closeContact.label}
                <span style={{ color: "red" }}>*</span>
              </Header>
              <Form>
                <Form.Field>
                  Selected value: <b>{this.state.value}</b>
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    name="checkboxRadioGroup"
                    value="this"
                    checked={this.state.value === "this"}
                    onChange={this.handleChange}
                    label="Yes!"
                    className="inc"
                    onClick={(e) => this.increment(e)}
                  />
                </Form.Field>
                <Form.Field>
                  <Checkbox
                    radio
                    name="checkboxRadioGroup"
                    value="this"
                    checked={this.state.value === "this"}
                    onChange={this.handleChange}
                    label="No"
                    className="inc"
                    onClick={null}
                  />
                </Form.Field>
              </Form>
            </Container>
            <h1>Risk Count: {this.state.count}</h1>
            <br />
            <Container text>
              <Header as="h5">
                {tripSurveyQuestions.symptoms.label}
                <span style={{ color: "red" }}>*</span>
              </Header>
              <Form.Checkbox
                label={symptomList.fever.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
              <Form.Checkbox
                label={symptomList.chills.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
              <Form.Checkbox
                label={symptomList.cough.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
              <Form.Checkbox
                label={symptomList.shortnessBreath.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
              <Form.Checkbox
                label={symptomList.fatigue.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
              <Form.Checkbox
                label={symptomList.bodyAches.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
              <Form.Checkbox
                label={symptomList.headache.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
              <Form.Checkbox
                label={symptomList.tasteLoss.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
              <Form.Checkbox
                label={symptomList.smellLoss.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
              <Form.Checkbox
                label={symptomList.soreThoat.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
              <Form.Checkbox
                label={symptomList.congestion.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
              <Form.Checkbox
                label={symptomList.nausea.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
              <Form.Checkbox
                label={symptomList.vomiting.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
              <Form.Checkbox
                label={symptomList.diarrhea.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
              <Form.Checkbox
                label={symptomList.abPain.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
              <Form.Checkbox
                label={symptomList.none.label}
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Checkbox>
            </Container>
            <br />
            <Container text>
              <Header as="h5">
                {tripSurveyQuestions.certifySigns.label}
                <span style={{ color: "red" }}>*</span>
              </Header>
              <Form.Radio
                label="Yes"
                className="inc"
                onClick={null}
              ></Form.Radio>
              <Form.Radio
                label="No"
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Radio>
            </Container>
            <br />
            <Container text>
              <Header as="h5">
                {tripSurveyQuestions.abideHealthMeasures.label}
                <span style={{ color: "red" }}>*</span>
              </Header>
              <Form.Radio
                label="Yes"
                className="inc"
                onClick={null}
              ></Form.Radio>
              <Form.Radio
                label="No"
                className="inc"
                onClick={(e) => this.increment(e)}
              ></Form.Radio>
            </Container>
            <br />
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

/* This code is for implementing if statement for tracking and displaying high risk or low risk survey outcome in UI:

 <Form.Checkbox
            className="inc"
            onClick={(e) => this.increment(e)}
          ></Form.Checkbox>
          <Label>Risk Factor 2</Label>
          <Form.Radio className="inc" onClick={(e) => this.increment(e)}>
            Increment!
          </Form.Radio>
          <Form.Radio className="inc" onClick={(e) => this.increment(e)}>
            Increment!
          </Form.Radio>
          <Form.Radio className="inc" onClick={(e) => this.increment(e)}>
            Increment!
          </Form.Radio>

          <h1>Risk Count: {this.state.count}</h1>
*/

export default Counter;
