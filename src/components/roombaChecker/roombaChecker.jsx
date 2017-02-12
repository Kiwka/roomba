import React, {Component} from 'react';
import autobind from 'class-autobind';
import { Section, SectionHeader, Button, DataTextarea, ErrorHolder, Holder } from './roombaChecker.styl.js';
import { parseRawData, verifyData, calculateRoombaPath, generateOutput } from '../../helpers/helpers.js';
import Instruction from './instruction.jsx';

const initialState = {
  data: {},
  rawData: '',
  outputData: '',
  error: '',
}

class RoombaChecker extends Component {
  constructor(props) {
    super(props);
    autobind(this);
    this.state = {...initialState};
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.error && prevState.rawData !== this.state.rawData){
      this.setState({ error: '' });
    }
  }

  checkHowRoombaWorked(data) {
    return [parseRawData, verifyData, calculateRoombaPath, generateOutput]
      .reduce((result, step) => step(result), data);
  }

  submitData() {
    let result = this.checkHowRoombaWorked(this.state.rawData);
    this.setState({
      error: result.error ? result.error : '',
      outputData: result.outputData ? result.outputData : '',
    });
  }

  resetData() {
    this.setState({...initialState});
  }

  mailTo() {
    window.location = "mailto:olenasovyn@gmail.com?subject=I like the Roomba checker that you have created soo much";
  }

  render() {
    return (
      <div>
        {!!this.state.error && <ErrorHolder>{this.state.error}</ErrorHolder>}
        <Holder>
          <Section>
            <SectionHeader>Instruction</SectionHeader>
            <Instruction />
          </Section>
          <Section>
            <SectionHeader>Please, put your data in the field below</SectionHeader>
            <DataTextarea value={this.state.rawData}
              onChange={e => this.setState({rawData: e.target.value})}
              rows={15} placeholder="Put you data here"/>
            <div>
              <Button onClick={this.submitData} disabled={!this.state.rawData}>Check how clean room is!</Button>
              <Button onClick={this.resetData}>Reset</Button>
            </div>
          </Section>
          <Section>
            <SectionHeader>Results of cleaning</SectionHeader>
            <DataTextarea rows={15} placeholder="Results will appear here"
              value={this.state.outputData}/>
            <Button onClick={this.mailTo}>I am so happy with this Roomba checker!</Button>
          </Section>
        </Holder>
      </div>
    );
  }
}

export default RoombaChecker;
