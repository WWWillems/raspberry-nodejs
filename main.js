import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return (<h1>This is a testttt</h1>);
  }
}

export default Main;


ReactDOM.render(<Main />, document.getElementById('app'));
