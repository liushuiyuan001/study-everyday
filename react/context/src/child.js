import React, { useContext } from 'react'
import contextValue, { Consumer } from './context'
export default function Child() {
	const context = useContext(contextValue) // 函数组件的hooks写法
	// static contextType = context // 类组件的类属性
	// render() {
	// const context = this.context
	return (
		// 函数组件和类组件都可以这样写 
		// 感觉比较麻烦 好处是 类组件不用把context变为组件的类属性 函数组件不用useContext hook了
		// <Consumer>
		// 	{(context) => {
		// 		console.log('this.context', context)
		// 		return <p onClick={() => context.changeContext(context.info + '2')}>{context.info}</p>
		// 	}}
		// </Consumer >
		<p onClick={() => context.changeContext(context.info + '2')}>{context.info}</p>
	)
	// }
}

// 类组件的类属性
// Child.contextType = contextValue