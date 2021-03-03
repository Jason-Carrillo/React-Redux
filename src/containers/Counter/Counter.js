import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actions'

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 15" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            <hr />
            <button onClick={() => this.props.onStoreResults(this.props.ctr)}>Store Results</button>
            <ul>
                {this.props.storeResults.map(strResult => {
                    <li key={strResult.id} onClick={() => this.props.onDeleteResults(strResult.Results.id)} >{strResult.value}</li>
                })}
                
            </ul>
            </div>
        );
    }
}

const mapStatetoProps = state => {
    return {
        ctr: state.ctr.counter,
        storeResults: state.res.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(15)),
        onStoreResults: (result) =>dispatch(actionCreators.storeResult(result)),
        onDeleteResults: (id) =>dispatch(actionCreators.deleteResult(id))
    };
};


export default connect(mapStatetoProps, mapDispatchToProps)(Counter);