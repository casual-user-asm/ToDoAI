import { Col, Row, Divider, Button, Input, Avatar, List, Space } from 'antd'
import styles from './Home.module.css'
import { useEffect, useState } from 'react'
import { CloseCircleFilled, CheckSquareOutlined } from '@ant-design/icons'

export default function Home() {
    const data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ]

    return (
        <div className={`${styles.wrapper}`}>
            <Row className={`${styles.container}`}>
                <Col className={`${styles.content}`} flex={2}>
                    <Divider orientation="left">
                        <p className={`${styles.text}`}>Manage your tasks</p>
                    </Divider>
                    <Space.Compact
                        style={{
                            width: '85%',
                            'margin-left': '35px',
                        }}
                    >
                        <Input placeholder="Write your next task" />
                        <Button className={`${styles.button}`} type="primary">
                            Add task
                        </Button>
                    </Space.Compact>
                    <div className={`${styles.listWrapper}`}>
                        <List
                            itemLayout="horizontal"
                            dataSource={data}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <p className={`${styles.textTask}`}>
                                        {item.title}
                                    </p>
                                    <CheckSquareOutlined
                                        className={`${styles.completeBut}`}
                                        title="Complete task"
                                    />
                                    <CloseCircleFilled
                                        className={`${styles.deleteBut}`}
                                        title="Delete task"
                                    />
                                </List.Item>
                            )}
                        />
                    </div>
                </Col>
                <Col className={`${styles.content2}`} flex={3}>
                    3 / 5
                </Col>
            </Row>
        </div>
    )
}
