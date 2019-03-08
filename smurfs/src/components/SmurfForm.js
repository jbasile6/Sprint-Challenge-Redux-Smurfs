import React from 'react';
import {connect} from 'react-redux';

import { addSmurf } from '../actions';


class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        //i think its this.state because its a child component, remove 'this' if error occurs
        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }

    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addSmurf(this.state.name, this.state.age, this.state.height);
        //clear out inputs
        this.setState({ 
            name: '',
            age: '',
            height: ''
         })
    }

    render() {
        return (
            <div className='smurf-form'>
            <form>
                <input 
                onChange={this.changeHandler}
                type='text'
                name='name'
                placeholder='Smurf Name'
                value={this.state.name}
                />
            </form>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm);