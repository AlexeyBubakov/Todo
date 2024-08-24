const TODO_ITEM_STATUS = [
	{ id: 'ALL', class: 'btn btn-primary', title: 'All' },
	{ id: 'ACTIVE', class: 'btn btn-primary', title: 'Active' },
	{ id: 'DONE', class: 'btn btn-primary', title: 'Done' },
]

const ButtonGroupTodo = ({ handleButtonGroup }) => {
	return (
		<div class='btn-group' role='group' aria-label='Basic example'>
			{TODO_ITEM_STATUS.map(btn => (
				<button
					id={btn.id}
					className={btn.class}
					onClick={e => handleButtonGroup(e.target.id)}
				>
					{btn.title}
				</button>
			))}
		</div>
	)
}

export default ButtonGroupTodo
