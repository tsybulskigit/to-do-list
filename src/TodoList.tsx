import React, {ChangeEvent, FC, RefObject, useRef, useState, KeyboardEvent} from 'react';
import TasksList from "./TasksList";
import {FilteredValuesType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    setFilter: (filter: FilteredValuesType) => void
    removeTask: (taskId: string) => void
    addTask: (title: string) => void
}

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

const TodoList: FC<TodoListPropsType> = (props) => {
    const [title, setTitle] = useState<string>('')
    // const addTaskInput: RefObject<HTMLInputElement> = useRef(null)
    // const addTask = () => {
    //     if (addTaskInput.current) {
    //         props.addTask(addTaskInput.current.value)
    //         addTaskInput.current.value = ''
    //     }
    // }
    const changeLocalTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const addTask = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            props.addTask(trimmedTitle)
        }
        setTitle('')
    }

    const setAllFilterValue = () => props.setFilter('all')
    const setActiveFilterValue = () => props.setFilter('active')
    const setCompletedFilterValue = () => props.setFilter('completed')
    const onKeyDownEnterAddTask = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addTask()

    return (
        <div className="todolist">
            <h3>{props.title}</h3>
            <div>
                {/*<input ref={addTaskInput}/>*/}
                {/*<button onClick={addTask}>+</button>*/}
                <input
                    value={title}
                    onChange={changeLocalTitle}
                    onKeyDown={onKeyDownEnterAddTask}
                />
                <button disabled={title.length === 0} onClick={addTask}>+</button>
                {title.length > 15 && <div>Task title is too long</div>}
            </div>
            <TasksList tasks={props.tasks} removeTask={props.removeTask}/>
            <div>
                <button onClick={setAllFilterValue}>All</button>
                <button onClick={setActiveFilterValue}>Active</button>
                <button onClick={setCompletedFilterValue}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;