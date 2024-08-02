import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {
    MainContainer,
    ChatContainer,
    TypingIndicator,
    MessageList,
    Message,
    MessageInput,
} from '@chatscope/chat-ui-kit-react'
import { Col } from 'antd'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAI } from '../redux/slices/gptSlice'

export default function Chat() {
    const [query, setQuery] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const { gptResponse, status, error } = useSelector((state) => state.gpt)
    const [conversation, setConversation] = useState([
        {
            props: {
                model: {
                    message: '',
                    sender: '',
                    position: 'single',
                    direction: '',
                },
            },
        },
    ])

    useEffect(() => {
        setConversation((prevConversation) => [
            ...prevConversation,
            {
                props: {
                    message: gptResponse,
                    position: 'single',
                    sender: 'GPT',
                    direction: 'incoming',
                },
            },
        ])
    }, [gptResponse, conversation])

    const sendQuery = () => {
        dispatch(fetchAI(query))
        setMessage(query)
        setConversation((prevConversation) => [
            ...prevConversation,
            {
                props: {
                    message: message,
                    position: 'single',
                    sender: 'User',
                    direction: 'outgoing',
                },
            },
        ])
        setQuery('')
    }

    return (
        <Col className="chatContainer">
            <MainContainer>
                <ChatContainer>
                    <MessageList
                        typingIndicator={
                            status === 'loading' ? (
                                <TypingIndicator content="GPT is typing" />
                            ) : null
                        }
                    >
                        {conversation.map((m, i) => {
                            ;<Message key={i} {...m.props} />
                        })}
                    </MessageList>
                    <MessageInput
                        placeholder="Type message here"
                        attachButton="false"
                        onChange={(textContent) => {
                            setQuery(textContent)
                        }}
                        onSend={sendQuery}
                    />
                </ChatContainer>
            </MainContainer>
        </Col>
    )
}
