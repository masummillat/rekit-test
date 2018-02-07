import React, { Component } from 'react';

export default class ListToggle extends Component {
  constructor(){
    super();
    this.state={
      toggled: false,
    }

  }

  handleClick(){
    if(this.state.toggled === true){
      this.setState({toggled:false})
    }else{
      this.setState({toggled:true})
    }
    console.log(this.state.toggled)
  }

  render() {
    return (
      <div className="ListToggle" onClick={this.handleClick.bind(this)} data-toggled={this.state.toggled}>
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    );
  }
}
