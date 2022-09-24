import React, { Component } from 'react';
import Child from '../props/child';
export class Parent extends Component {
    constructor() {
        super();
        this.state = {
          name: 'React',
          data: null
        };
      }
    
      receiveDataFromChild = (data) => {
        this.setState({data});
      }
    render() {
        return (
            <div>
            <Child name={this.state.name} sendDataToParent={this.receiveDataFromChild}/>
            <p>
              Start editing to see some magic happen :)
            </p>
            {this.state.data && <div>Data From Child: {this.state.data}</div>}
          </div>
        )
    }
}

export default Parent