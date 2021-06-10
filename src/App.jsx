import { store } from './store/store'
import { Provider } from 'react-redux';

import "./App.css";

import GoogleMapCustom from './components/GoogleMapCustom';


function App() {
  return (
    <div className="main-wrapper">
       
    <Provider store={ store }>
        <GoogleMapCustom />
    </Provider>
    </div>
  );
}

export default App;