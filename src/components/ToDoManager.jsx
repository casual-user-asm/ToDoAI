import { useState } from 'react'
import { CloseCircleFilled, CheckSquareOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { add_task, complete_task, delete_task } from '../redux/slices/taskSlice'
import { Col, Divider, Button, Input, List, Space, Alert } from 'antd'
import styles from './ToDoManager.module.css'

export default function ToDoManager() {
    const [task, setTask] = useState('')
    const [actionAlert, setActionAlert] = useState({
        text: '',
        type: 'success',
    })
    const selectTasks = useSelector((state) => state.task)
    const dispatch = useDispatch()

    const confirmTask = () => {
        dispatch(add_task(task))
        setTask('')
    }

    const completeTask = (task) => {
        dispatch(complete_task(task))
        setActionAlert({
            text: 'Task completed',
            type: 'success',
        })
        setTimeout(() => setActionAlert({ text: '' }), 2000)
    }

    const deleteTask = (task) => {
        dispatch(delete_task(task))
        setActionAlert({ text: 'Task deleted', type: 'error' })
        setTimeout(() => setActionAlert({ text: '' }), 2000)
    }

    return (
        <Col className={`${styles.content}`}>
            <Divider orientation="left">
                <p className={`${styles.text}`}>Manage your tasks</p>
            </Divider>

            <Space.Compact
                style={{
                    width: '85%',
                    'margin-left': '35px',
                }}
            >
                <Input
                    placeholder="Write your next task"
                    value={task}
                    onChange={(e) => {
                        setTask(e.target.value)
                    }}
                />
                <Button
                    className={`${styles.button}`}
                    type="submit"
                    onClick={confirmTask}
                >
                    Add task
                </Button>
            </Space.Compact>

            <div className={`${styles.listWrapper}`}>
                {actionAlert.text ? (
                    <Alert
                        className={styles.alert}
                        message={actionAlert.text}
                        type={actionAlert.type}
                        showIcon
                    />
                ) : (
                    <List
                        itemLayout="horizontal"
                        dataSource={selectTasks}
                        renderItem={(item, index) => (
                            <List.Item className={`${styles.listItem}`}>
                                <p className={`${styles.textTask}`} key={index}>
                                    {item}
                                </p>

                                <CheckSquareOutlined
                                    className={`${styles.completeBut}`}
                                    title="Complete task"
                                    onClick={() => {
                                        return completeTask(item)
                                    }}
                                />
                                <CloseCircleFilled
                                    className={`${styles.deleteBut}`}
                                    title="Delete task"
                                    onClick={() => {
                                        return deleteTask(item)
                                    }}
                                />
                            </List.Item>
                        )}
                    />
                )}
            </div>
        </Col>
    )
}
