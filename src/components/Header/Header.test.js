import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const mockUser = {
      name: 'Jeff',
      email: 'jeff@turing.org',
      purpose: 'vacation',
    };
    const wrapper = shallow(<Header
      user={mockUser}
      logout={jest.fn()}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
