import React, { useState } from 'react'

const AddItemButton = ({ handleAddTodoItem }) => {
	const [itemTitle, setItemTitle] = useState('')

	const handleAdd = () => {
		if (itemTitle.trim() === '') return

		const newItem = {
			label: itemTitle,
			important: false,
			success: false,
			id: Math.random(),
		}
		handleAddTodoItem(newItem)
		setItemTitle('')
	}

	return (
		<div className='input-group mb-3'>
			<div className='input-group-prepend'>
				<button
					className='btn btn-outline-secondary'
					onClick={handleAdd}
					type='button'
				>
					Add
				</button>
			</div>
			<input
				type='text'
				value={itemTitle}
				onChange={e => setItemTitle(e.target.value)}
				className='form-control'
				placeholder='Type task'
				aria-label=''
				aria-describedby='basic-addon1'
			/>
		</div>
	)
}

export default AddItemButton
