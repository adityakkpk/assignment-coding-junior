import CoursePlatform from "./Components/CoursePlatform"
import { Provider } from 'react-redux';
import { store } from './store/store.ts';

const App = () => (
  <Provider store={store}>
    <CoursePlatform />
  </Provider>
);

export default App