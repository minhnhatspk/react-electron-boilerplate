import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import HomeContainer from '../screens/Home/HomeContainer';
import home from '../redux/reducers/HomeReducer';

const reducers = combineReducers({ home });
const middlewares = applyMiddleware(thunk);
const store = createStore(reducers, middlewares);

describe('HomeComponent', () => {
  it('should call deleteUser method', () => {
    const wrapper = shallow(<HomeContainer store={store} />).dive();
    const spy = jest.spyOn(wrapper.instance(), 'deleteUser');
    wrapper.setProps({
      users: [
        {
          id: 0,
          first_name: 'Test',
          avatar: 'Test.jpg',
        }
      ]
    });
    wrapper.find('button').at(0).simulate('click');
    expect(spy).toHaveBeenCalled();
  });
})
