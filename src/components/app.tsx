import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@modules/store';
import Dashboard from '@views/pages/dashboard';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
