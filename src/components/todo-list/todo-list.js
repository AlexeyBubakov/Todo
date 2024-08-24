import React from 'react'
import TodoListItem from '../todo-list-item/todo-list-item.js'
import './todo-list.css'

const TodoList = ({ todoData, changeTodoItemStatus, deleteTodoItemStatus }) => {
	return (
		<ul className='todo-list'>
			{todoData.map(item => (
				<TodoListItem
					key={item.id}
					item={item}
					changeTodoItemStatus={changeTodoItemStatus}
					deleteTodoItemStatus={deleteTodoItemStatus}
				/>
			))}
		</ul>
	)
}

export default TodoList
