// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteButton} = props
  const onDelete = () => {
    deleteButton(todoDetails.id)
  }
  return (
    <li className="list-item">
      <div className="todo-item">
        <p className="todo">{todoDetails.title}</p>
        <button type="button" className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
export default TodoItem
