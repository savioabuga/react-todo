import React, { Component } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import actions from '../redux/actions'

class App extends Component {

    render() {
        return (
            <div>
                <h1>Todo List</h1>
                <TodoInput addTodo={this.props.actions.addTodo}/>
                <TodoList  dispatch={this.props.dispatch}  todos={this.props.todos}/>
            </div>
            )
    }
}

function mapStateToProp(state){
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(App)
