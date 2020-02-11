import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper;
  const mockAddUser = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form
      addUser={mockAddUser}
    />);
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should start off with a default state', () => {
    expect(wrapper.state()).toEqual({ name: '', email: '', purpose: '', error: false });
  });

  it('should update state with new user info when handleChange is called', () => {
    const mockEvent = { target: { name: 'name', value: 'Jeff' } };
    const expected = { name: 'Jeff', email: '', purpose: '', error: false };

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state()).toEqual(expected);
  });

  it('should check that all inputs fields contain information when checkInputs is called', () => {
    const mockEvent = { preventDefault: jest.fn() };
    const mockState = { name: 'Jeff', email: 'jeff@turing.org', purpose: 'vacation', error: false };
    wrapper.instance().addUser = jest.fn();

    wrapper.setState(mockState);
    wrapper.instance().checkInputs(mockEvent);
    expect(wrapper.instance().addUser).toHaveBeenCalledWith(mockEvent);
  });

  it('should update state with an error any fields do not contain information when checkInputs is called', () => {
    const mockEvent = { preventDefault: jest.fn() };
    const expected = { name: '', email: '', purpose: '', error: true };
    wrapper.instance().addUser = jest.fn();

    wrapper.instance().checkInputs(mockEvent);
    expect(wrapper.state()).toEqual(expected);
  });


  it('should add a user when addUser is called and reset state', () => {
    const mockEvent = { preventDefault: jest.fn() };
    const mockState = { name: 'Jeff', email: 'jeff@turing.org', purpose: 'vacation', error: false };
    const expectedUser = { name: 'Jeff', email: 'jeff@turing.org', purpose: 'vacation' };
    const expectedState = { name: '', email: '', purpose: '', error: false };

    wrapper.setState(mockState);
    wrapper.instance().addUser(mockEvent);
    expect(mockAddUser).toHaveBeenCalledWith(expectedUser);
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should call the checkInputs method when the submit button is clicked', () => {
    wrapper.instance().checkInputs = jest.fn();
    wrapper.instance().forceUpdate();
    const mockEvent = { preventDefault: jest.fn() };

    wrapper.find('.submit-button').simulate('click', mockEvent);
    expect(wrapper.instance().checkInputs).toHaveBeenCalledWith(mockEvent);
  });
});
