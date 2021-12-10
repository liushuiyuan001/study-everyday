
import React, { useState, memo, useCallback, useMemo, useReducer } from 'react';
import 'antd/dist/antd.css';
import './index.css';
// import Child from './Child'


const initState = {
	count: 0
}

const reducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return { count: state.count + 1 }
		case 'decrement':
			return { count: state.count - 1 }
		default: return state
	}
}
const Child = memo((props) => {
	console.log('child-render')
	const [state, dispatch] = useReducer(reducer, initState)
	return (
		<>
			<div>{props.render}</div>
			<div>{state.count}</div>
			<button onClick={() => dispatch({ type: 'add' })}>+</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
		</>
	)
})

const App = (params) => {

	const [count, setCount] = useState(0)
	const [max, setMax] = useState(10)
	const change = (c) => {
		setCount(count + 1)
	}

	const render = useMemo(() => {
		const list = []
		for (let i = 0; i < max; i++) {
			list.push(<div>{i}</div>)
		}
		return list
	}, [max])
	return (
		<div>
			<div>{count}</div>
			<button onClick={change}>点击</button>
			<Child render={render}></Child>
		</div>
	)
}
export default App

// class HorizontalLoginForm extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			name: 'Hello World'
// 		}

// 		console.log('constructor')
// 	}

// 	static getDerivedStateFromProps() {
// 		console.log('getDerivedStateFromProps', arguments);

// 		return null;
// 	}

// 	// getSnapshotBeforeUpdate() {
// 	// 	console.log('getSnapshotBeforeUpdate')
// 	// }

// 	componentDidUpdate() {
// 		console.log('componentDidUpdate')

// 	}

// 	componentDidMount() {
// 		console.log('componentDidMount')
// 	}

// 	change = () => {
// 		const time = new Date().getTime();
// 		this.setState({
// 			name: {
// 				test: 'Hello World' + time
// 			}
// 		})
// 	}

// 	render() {
// 		console.log('render')
// 		return (
// 			<>
// 				<button onClick={this.change}>点击</button>
// 				<Child></Child>
// 			</>
// 		)
// 	}
// }

// export default HorizontalLoginForm