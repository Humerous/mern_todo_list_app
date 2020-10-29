import React, { Component } from 'react';
import NavBar from './components/NavBar';
import TodoList from './components/TodoList';
import ItemModal from './components/ItemModals/ItemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <NavBar />
          <Container>
            <ItemModal />
            <TodoList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
