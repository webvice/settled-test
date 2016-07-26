import React from 'react';
import Menu from './Menu';

class App extends React.Component {
   render() {
      return (
         <div>
            <Menu/>
            {this.props.children}
         </div>
      );
   }
}

// class Counter extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state= {
//      count: 0
//    }
//    this.incrementCount = this.incrementCount.bind(this);
//  }

//  incrementCount() {
//    this.setState({
//      count: this.state.count + 1
//    });
//  } 

//  render() {
//    return (
//      <div>
//        <h3>Counter</h3>
//        <h1>{this.state.count}</h1>
//        <button type="button" onClick={this.incrementCount}>Increment</button>
//      </div>
//    );
//  }
// }

export default App;
// export default Counter;