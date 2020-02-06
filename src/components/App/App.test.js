import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('should start off with a default state', () => {
    const expected = {
      isLoggedIn: false,
      areas: '',
      error: '',
      user: {name: '', email: '', purpose: ''},
      isLoading: true
    };
    expect(wrapper.state()).toEqual(expected);
  });

  it('should set state with user info when addUser is called', () => {
    const mockUser = {name: 'Jeff', email: 'jeff@turing.org', purpose: 'vacation'};

    wrapper.instance().addUser(mockUser);
    expect(wrapper.state()).toEqual({
      isLoggedIn: true,
      areas: '',
      error: '',
      user: {name: 'Jeff', email: 'jeff@turing.org', purpose: 'vacation'},
      isLoading: true
    });
  });

  it('should reset user info in state when logout is called', () => {
      const mockUser = {name: 'Jeff', email: 'jeff@turing.org', purpose: 'vacation'};

      wrapper.instance().addUser(mockUser);
      wrapper.instance().logout();
      expect(wrapper.state()).toEqual({
        isLoggedIn: false,
        areas: '',
        error: '',
        user: { name: '', email: '', purpose: ''},
        isLoading: true
      });
  });
});
