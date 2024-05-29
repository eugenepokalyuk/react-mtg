import { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import Header from '../Header/Header';
import Main from '../Main/Main';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles.app}>
          <Header />
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
