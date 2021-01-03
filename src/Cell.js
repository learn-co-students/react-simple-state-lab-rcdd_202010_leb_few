import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props){
    super(props)
    this.state={
      color:props.value
    }
  }
  click=()=>{
    this.state({
       color: "#333"
    })
  }
  

  render(){
    return <div  onclick={this.click} style={{backgroundColor:this.state}}
  }