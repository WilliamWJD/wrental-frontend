import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyles from './styles/GlobalStyles';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <ToastContainer />
        <AppRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
