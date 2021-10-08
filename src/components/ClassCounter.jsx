import React from 'react';


class ClassCounter extends React.Component {

    constructor(props){
            super(props);
            this.state = {
                count:1,
                name:"Alex"
            };
            this.increment = this.increment.bind(this);
        
            
    }

    increment (){
       this.setState({count:this.state.count+1});
    }

    decrement (){
        this.setState({count:this.state.count-1});
    }

    render(){
        return (
            <div>
               Cont:{this.state.count} 
             
               <button onClick={this.increment}>Increment (bind func)</button>
               <button onClick={()=>this.decrement()}>Decrement (Arrow func)</button>
           
               
           </div>
       );
    }
}
export default ClassCounter;