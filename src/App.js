import {useDispatch, useSelector} from 'react-redux'
import {allTodos} from './redux/selectors/todoSelectors'
import {addTodo, loadTodos, removeTodo} from './redux/actions/todoActions'
import {useEffect, useState} from 'react'
import './App.css'

export const App = () => {
    const todos = useSelector(allTodos)
    const dispatch = useDispatch()

    const [inputName, setInputName] = useState('')


    useEffect(() => {
        if (localStorage.todos) {
            dispatch(loadTodos(JSON.parse(localStorage.todos)))
        }
    }, [])

    useEffect(() => {
        localStorage.todos = JSON.stringify(todos)
    }, [todos])

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(inputName))
    }

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id))
    }

    return (
        <div className='App'>
            <h1 className='main-title'>Todo App</h1>
            <form onSubmit={handleSubmit} className='todo-form'>
                <input placeholder='Input here your todo' value={inputName}
                       onChange={e => setInputName(e.target.value)}/>
                <button type='submit'>Add todo</button>
            </form>
            <div className='todos'>
                {todos.map(todo => (
                    <div>
                        <div className='todo'>
                            <div>ID: {todo.id}</div>
                            <div>Name: {todo.name}</div>
                            <button onClick={() => handleRemoveTodo(todo.id)}>Remove todo</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}