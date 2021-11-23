import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
