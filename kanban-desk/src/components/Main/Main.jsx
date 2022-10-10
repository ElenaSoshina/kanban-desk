import React from 'react';
import css from './Main.module.css'
import TaskListContainer from "../TaskListContainer/TaskListContainer";
import { Outlet } from 'react-router-dom'

const Main = (props) => {
    const { tasks, handleAddTask, handleMoveTask } = props
    return (
        <main className={css.main}>
            <div className={css.taskList}>
                <TaskListContainer tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
            </div>
            <div className={css.taskContent}>
                <Outlet />
            </div>
        </main>
    )
}

export default Main