import React from 'react';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import HomeContainer from '../screens/Home/HomeContainer';
import home from '../redux/reducers/HomeReducer';

home.users = [
  {
    id: 0,
    first_name: 'Test',
    avatar: 'Test.jpg',
  }
];
const middlewares = [thunk];
const store = configureStore(middlewares)({ home });

describe('HomeComponent', () => {
  it('should call deleteUser method', () => {
    const wrapper = shallow(<HomeContainer store={store} />).dive();
    const spy = jest.spyOn(wrapper.instance(), 'deleteUser');
    wrapper.find('button').at(0).simulate('click');
    expect(spy).toHaveBeenCalled();
  });
})
