import React, { Component } from 'react';
import NavBar from './components/navbar';
import './App.css';
import Counters from './components/counters'


class App extends Component {
  state = {
    counters:[
        {id:1,value:0},
        {id:2,value:0},
        {id:3,value:0},
        {id:4,value:0}
    ]
};

handleIncrement= counter =>{
   const counters=[...this.state.counters];
   const index=counters.indexOf(counter);
   counters[index]={...counter};
   counters[index].value++;
   console.log(this.state.counters[index]);
   this.setState({counters});

};

handleReset = () =>{
  console.log("reset called");
    var counters=this.state.counters.map(c =>{
        c.value=0;
        return c;
    })
    this.setState({counters});
};

handleDelete = (counterID)=>{ 
    console.log("delete called",counterID);
    var counters =this.state.counters.filter(c => c.id!==counterID);
    this.setState({counters});
};

handleMinus = counter =>{
  const counters=[...this.state.counters];
  const index=counters.indexOf(counter);
  counters[index]={...counter};
  counters[index].value--;
  console.log(this.state.counters[index]);
  this.setState({counters});

};

  render(){
    
  return (
    <React.Fragment>
    <NavBar
    totalItems={this.state.counters.filter(c=>c.value>0).length}
    />
    <main className="container">
      <Counters
      counters={this.state.counters}
      onReset={this.handleReset}
      onDelete={this.handleDelete}
      onIncrement={this.handleIncrement}
      onMinus={this.handleMinus}
      />
    </main>
    </React.Fragment>
  );
  }
}

export default App;
