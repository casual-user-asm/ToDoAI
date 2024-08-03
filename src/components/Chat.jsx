import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import {
    MainContainer,
    ChatContainer,
    TypingIndicator,
    MessageList,
    Message,
    Avatar,
    MessageInput,
    Button,
    ConversationHeader,
} from '@chatscope/chat-ui-kit-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Col } from 'antd'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAI } from '../redux/slices/gptSlice'

export default function Chat() {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
    const { gptResponse, status, error } = useSelector((state) => state.gpt)
    const [conversation, setConversation] = useState([])

    useEffect(() => {
        if (gptResponse) {
            setConversation([
                ...conversation,
                {
                    props: {
                        message: gptResponse,
                        position: 'single',
                        sender: 'GPT',
                        direction: 'incoming',
                    },
                },
            ])
        }
    }, [gptResponse])

    const sendQuery = () => {
        if (query.trim()) {
            setConversation([
                ...conversation,
                {
                    props: {
                        message: query,
                        position: 'single',
                        sender: 'User',
                        direction: 'outgoing',
                    },
                },
            ])
            dispatch(fetchAI(query))
        }
    }

    const clearChat = () => {
        setConversation([])
    }

    return (
        <Col className="chatContainer">
            <ConversationHeader>
                <Avatar
                    name="GPT"
                    size="md"
                    src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Round&hairColor=BrownDark&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Gray02&eyeType=Cry&eyebrowType=Angry&mouthType=Twinkle&skinColor=Tanned'
'
"
                />
                <ConversationHeader.Content
                    info="How can I help you out? Just let me know!"
                    userName="ToDo Assistant"
                />
                <ConversationHeader.Actions>
                    <Button
                        icon={<FontAwesomeIcon icon={faTrashCan} />}
                        onClick={clearChat}
                    >
                        Press to clear chat
                    </Button>
                </ConversationHeader.Actions>
            </ConversationHeader>

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
                            return (
                                <Message
                                    style={{
                                        marginBottom: '8px',
                                    }}
                                    key={i}
                                    model={{
                                        message: m.props.message,
                                        sender: m.props.sender,
                                        position: 'single',
                                        direction: m.props.direction,
                                    }}
                                />
                            )
                        })}
                    </MessageList>
                    <MessageInput
                        autoFocus
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
