import React, { Component } from "react";

class ClassBasedComponent extends Component {
  state = {
    //write all state properties
    count: 0,
    //initial value of count property
    flag: false,
  };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     //write all state properties inside it
  //     count: 0,
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  handleClick = () => {
    // whenever we need to do mutating the state we only use this.setState
    // this.state.count =this.state.count +1; //directly mutation the state /////// this is wrong
    //setState method

    const { count } = this.state;

    this.setState(
      {
        count: count + 1,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  componentDidMount() {
    console.log("component is mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state, prevState);
    if (
      prevState &&
      prevState.count !== this.state.count &&
      this.state.count === 10
    ) {
      this.setState({
        flag: true,
      });
    }
  }
  // React.useEffect(()=>{
  //  if(state.count === 10 ){
  //    setState()
  //  }
  //  return ()=>{

  //  }
  // },[count])
  // componentWillUnmount(){

  // }
  render() {
    console.log(this.state);
    return (
      <div>
        <button onClick={this.handleClick}>Click</button>
        {this.state.count === 5 && "hello"}
        {this.state.flag && <p>flag is true</p>}
      </div>
    );
  }
}

export default ClassBasedComponent;
