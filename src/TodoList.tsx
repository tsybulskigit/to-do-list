import React, {FC} from 'react';
import TasksList from "./TasksList";
import {FilteredValuesType} from "./App";

type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    setFilter: (filter: FilteredValuesType) => void
    removeTask: (taskId: number) => void
}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList: FC<TodoListPropsType> = (props) => {
    return (
        <div className="todolist">
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <TasksList tasks={props.tasks} removeTask={props.removeTask}/>
            <div>
                <button onClick={() => props.setFilter('all')}>All</button>
                <button onClick={() => props.setFilter('active')}>Active</button>
                <button onClick={() => props.setFilter('completed')}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;