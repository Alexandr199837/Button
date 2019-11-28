import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import axios from 'axios'

//This Component is a child Component of Customers Component
export default class CustomerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  //Function which is called when the component loads for the first time
  componentDidMount() {
    this.getCustomerDetails(this.props.val)
  }

  //Function which is called whenver the component is updated
  componentDidUpdate(prevProps) {

    //get Customer Details only if props has changed
    if (this.props.val !== prevProps.val) {
      this.getCustomerDetails(this.props.val)
    }
  }

  //Function to Load the customerdetails data from json.
  getCustomerDetails(id) {
    axios.get('assets/samplejson/customer' + id + '.json').then(response => {
      this.setState({customerDetails: response})
    })
  };

  render() {
    if (!this.state.customerDetails)
      return (<p>Loading Data</p>)
    return (<div className="customerdetails">
      <Panel bsStyle="primary" className="centeralign">
        <Panel.Heading>
          <Panel.Title componentClass="h3">{this.state.customerDetails.data.name}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>Номер регистрационного удостоверения / реестровой записи : {this.state.customerDetails.data.name}</p>
          <p>МНН / группировочное (химическое) наименование : {this.state.customerDetails.data.email}</p>
          <p>Лекарственная форма	: {this.state.customerDetails.data.phone}</p>
          <p>Торговое наименование	 : {this.state.customerDetails.data.city}</p>
          <p>Наименование держателя / владельца регистрационного удостоверения: {this.state.customerDetails.data.state}</p>
          <p>Производитель : {this.state.customerDetails.data.country}</p>
          <p>Страна : {this.state.customerDetails.data.organization}</p>
          <p>Состояние : {this.state.customerDetails.data.jobProfile}</p>

        </Panel.Body>
      </Panel>
    </div>)
  }
}
