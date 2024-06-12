/* eslint-disable @typescript-eslint/no-explicit-any */
import { Provider } from 'react-redux';
import store from '../../store/store';

const ReduxProvider = ({children}: any) => {
  return(
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default ReduxProvider;