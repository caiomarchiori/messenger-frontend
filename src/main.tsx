
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './routes'
import AuthProvider from './provider/authProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider>
        <Routes />
    </AuthProvider>
)