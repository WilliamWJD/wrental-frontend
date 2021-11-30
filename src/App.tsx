import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/GlobalStyles';

import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './hooks/AuthContext';

function App() {
  return (
    <AuthProvider>
      <GlobalStyles/>
      <BrowserRouter>
        <ToastContainer />
        <AppRoutes/>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
