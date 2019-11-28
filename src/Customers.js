import React, {Component} from 'react';
import Panel from 'react-bootstrap/lib/Panel'
import Button from 'react-bootstrap/lib/Button'
import CustomerDetails from './CustomerDetails'
import axios from 'axios'

export default class Customers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedCustomer: 0
    }
  }

  //function which is called the first time the component loads
  componentDidMount() {
    this.getCustomerData();
  }

  //Function to get the Customer Data from json
  getCustomerData() {
    axios.get('assets/samplejson/customerlist.json').then(response => {
      this.setState({customerList: response})
    })
  };

  render() {
    if (!this.state.customerList)
      return (<p>Loading data</p>)
    return (<div className="addmargin">
      <div className="col-md-3">
        {

          this.state.customerList.data.map(customer => <p1 key={customer.name} className="centeralign">
        <div className='bgr'>
              <button className ='App-button' onClick={() => this.setState({selectedCustomer: customer.id})}>             
                {customer.name}
              </button>          
                <button className ='App-button' onClick={() => {}}>
                Производитель
                </button> 
                  <button className ='App-button' onClick={() => {}}>
                Поставщик
                  </button> 
                    <button className ='App-button' onClick={() => {}}>
                Поступление
                    </button> 
                      <button className ='App-button' onClick={() => {}}>
                Продажа
                      </button> 
                        <button className ='App-button' onClick={() => {}}>
                История цены
                        </button> 
                          <button className ='App-button' onClick={() => {}}>
                Единица измерения
                          </button> 
                            <button className ='App-button' onClick={() => {}}>
                Место хранения
                            </button>  
            </div>
          </p1>)
        }
      </div>
      <div className="col-md-6">
        <CustomerDetails val={this.state.selectedCustomer}/>
      </div>
    </div>)
  }

}
