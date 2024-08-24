import React, { useState } from 'react'
import ImportantButton from '../button-important/button-important.js'
import './todo-list-item.css'

const TodoListItem = ({ item, changeTodoItemStatus, deleteTodoItemStatus }) => {
	const [isEditing, setIsEditing] = useState(false)
	const [currentLabel, setCurrentLabel] = useState(item.label)

	const styleImportant = {
		color: item.important ? 'tomato' : 'black',
		paddingTop: '5px',
		textDecoration: item.success ? 'line-through' : 'none',
	}

	return (
		<li className='list-group-item list-group-item-spacebetween'>
			{isEditing ? (
				<input
					type='text'
					value={currentLabel}
					onChange={() => {}}
					onBlur={() => {}}
					style={styleImportant}
				/>
			) : (
				<span className='todo-list-item'>{item.label}</span>
			)}
			<span>
				<button
					type='button'
					onClick={() => changeTodoItemStatus(item.id)}
					className='btn btn-outline-secondary btn-sm'
				>
					✔️
				</button>

				<button
					onClick={() => deleteTodoItemStatus(item.id)}
					type='button'
					className='btn btn-outline-danger'
				>
					DELETE
				</button>
				<ImportantButton isEditing={isEditing} setIsEditing={setIsEditing} />
			</span>
		</li>
	)
}

export default TodoListItem
