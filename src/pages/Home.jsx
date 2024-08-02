import { Row } from 'antd'
import styles from './Home.module.css'
import ToDoManager from '../components/ToDoManager'
import Chat from '../components/Chat'

export default function Home() {
    return (
        <div className={`${styles.wrapper}`}>
            <Row className={`${styles.container}`}>
                <ToDoManager />
                <Chat />
            </Row>
        </div>
    )
}
