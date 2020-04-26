import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {


    render() { 
        const {onDelete,onIncrement,onReset,onMinus}=this.props;
        return ( <div>
            <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
            {this.props.counters.map (counter => 
            <Counter
            key={counter.id} 
            onDelete={onDelete}
            counter={counter}
            onIncrement={onIncrement}
            onMinus={onMinus}
            
              />)}
            
        </div> );
    }
}
 
export default Counters;