import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import { RoutesPages } from './Routes';
import { GlobalStyle } from './Styles/Global';
import { AppDiv } from './styled';
import { AuthProvider } from './Contexts/AuthContext';

import 'react-toastify/dist/ReactToastify.min.css'
import { TechProvider } from './Contexts/TechContext';

function App() {
  return (
    <AppDiv>
      <GlobalStyle />
      <AuthProvider>
        <TechProvider>
          <RoutesPages />
        </TechProvider>
      </AuthProvider>
      <ToastContainer />
    </AppDiv>
  );
}

export default App;
