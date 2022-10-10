import React from 'react';
import TaskList from "../TaskList/TaskList";
import { TASK_TYPE} from "../../consts";

const TaskListContainer = (props) => {
    const { tasks, handleAddTask, handleMoveTask } = props
    return(
        <>
            <TaskList type={TASK_TYPE.BACKLOG} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
            <TaskList type={TASK_TYPE.READY} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
            <TaskList type={TASK_TYPE.IN_PROGRESS} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
            <TaskList type={TASK_TYPE.FINISHED} tasks={tasks} handleAddTask={handleAddTask} handleMoveTask={handleMoveTask} />
        </>
    )
}

export default TaskListContainer