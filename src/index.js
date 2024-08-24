import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import AddItemButton from './components/add-item-button/add-item-button.jsx'
import AppHeader from './components/app-header/app-header.js'
import ButtonGroupTodo from './components/button-group.js'
import SearchPanel from './components/search-panel/search-panel.js'
import TodoList from './components/todo-list/todo-list.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

const style = {
	display: 'flex',
	flexWrap: 'wrap',
	flexDirection: 'column',
	alignContent: 'space-around',
	margin: '30px',
}
const mockDate = [
	{ label: 'Drink Coffee', important: false, success: false, id: 1 },
	{ label: 'Make Awesome App', important: true, success: false, id: 2 },
	{ label: 'Have a lunch', important: false, success: false, id: 3 },
]

const App = () => {
	const [todoData, setTodoData] = useState(mockDate)
	const [viewTodoData, setViewTodoData] = useState(mockDate)

	const handleButtonGroup = status => {
		if (status === 'ALL') {
			setViewTodoData(todoData)
		} else if (status === 'DONE') {
			const filteredTodo = todoData.filter(item => item.success)
			setViewTodoData(filteredTodo)
		} else if (status === 'ACTIVE') {
			const filteredTodo = todoData.filter(item => !item.success)
			setViewTodoData(filteredTodo)
		}
	}

	const changeTodoItemStatus = id => {
		const updatedTodoData = todoData.map(item =>
			item.id === id ? { ...item, success: !item.success } : item
		)
		setTodoData(updatedTodoData)
		setViewTodoData(updatedTodoData)
	}

	const deleteTodoItemStatus = id => {
		const updatedTodoData = todoData.filter(item => item.id !== id)
		setTodoData(updatedTodoData)
		setViewTodoData(updatedTodoData)
	}

	const handleAddTodoItem = item => {
		setTodoData(prev => [...prev, item])
		setViewTodoData(prev => [...prev, item])
	}
	console.log(todoData)
	return (
		<div style={style}>
			<AppHeader />
			<SearchPanel />
			<AddItemButton handleAddTodoItem={handleAddTodoItem} />
			<ButtonGroupTodo handleButtonGroup={handleButtonGroup} />
			<TodoList
				todoData={viewTodoData}
				changeTodoItemStatus={changeTodoItemStatus}
				deleteTodoItemStatus={deleteTodoItemStatus}
			/>
		</div>
	)
}

root.render(<App />, document.getElementById('root'))
