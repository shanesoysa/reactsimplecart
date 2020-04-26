import React, { Component } from 'react';

class Counter extends Component {


    style = {
        
        fontSize: 30
    }



    render() { 
        

        return (
            <div>
            <button onClick={() => this.props.onMinus(this.props.counter)} className="btn-secondary btn-sm">-</button>
            <span style={{ fontSize: 20 }}className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
            <button  onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            
            </div>

        );
    }
    getBadgeClasses() {
        let classses = "badge m-2 badge-";
        classses += this.props.counter.value === 0 ? "warning" : "primary";
        return classses;
    }

    formatCount(){
        const{value}=this.props.counter;
        return value === 0 ? "zero":value;
    }


}
 
export default Counter; 