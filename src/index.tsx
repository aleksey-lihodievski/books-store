import React, { StrictMode, Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import LoadingScreen from 'pages/LoadingScreen';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { theme } from 'styles/theme';
import './index.css';

const App = React.lazy(() => import('./App'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<LoadingScreen />}>
          <App />
        </Suspense>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
