import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";

export type FilteredValuesType = 'all' | 'active' | 'completed'


function App() {
    const TodoListTitle: string = "What to learn"

    const [tasks, setTasks] = useState<TaskType[]>([
        {id: v1(), title: "HTML & CSS", isDone: true},
        {id: v1(), title: "ES6 & TS", isDone: true},
        {id: v1(), title: "React & Redux", isDone: false},
    ])

    const removeTask = (taskId: string) => {
        setTasks(tasks.filter(t => t.id !== taskId))
    }

    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }

    const [filter, setFilter] = useState<FilteredValuesType>("all")

    const getFilteredTasks = (tasks: TaskType[], filter: FilteredValuesType): TaskType[] => {
        switch (filter) {
            case 'active':
                return tasks.filter(t => !t.isDone)
            case 'completed':
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }

    let filteredTasks: TaskType[] = getFilteredTasks(tasks, filter)

    return (
        <div className="App">
            <TodoList
                title={TodoListTitle}
                tasks={filteredTasks}
                setFilter={setFilter}
                removeTask={removeTask}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
