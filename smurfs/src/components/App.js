import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { smurfFetch } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.smurfFetch();

  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map((smurf, index) => {
          return (
            <div key={index}>
              <h2>{smurf.name} </h2>
              <p><strong>Description:</strong>{'    '}{smurf.name} is a {smurf.age} year old Smurf that stands {smurf.height} tall.</p>
             
            </div>
          )
        })}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}


export default connect(mapStateToProps, { smurfFetch })(App);
