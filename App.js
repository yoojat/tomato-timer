import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Timer from './components/Timer';
import reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

let store = createStore(reducer);
export default class App extends React.Component {
  render() {
    return (
      //Provider의 역할은 스토어를 복사해서 칠드런 컴포넌트에 넣는 것
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
