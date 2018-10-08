import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from '../screens/Home/HomeContainer';

describe('HomeComponent', () => {
  it('should call deleteUser method', () => {
    const wrapper = shallow(<HomeContainer />).dive();
    const spy =jest.On(wrapper.instance(), 'deleteUser');
    expect(spy).toHaveBeenCalled();
  });
})