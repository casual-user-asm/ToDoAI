import './App.css'
import Home from './pages/Home'
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Home />
            </div>
        </Provider>
    )
}

export default App
