import React from 'react';
import { shallow } from 'enzyme';
import { AreasContainer } from './AreasContainer';

describe('AreasContainer', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    let areas = [{
      nickname: 'test nickname',
      longname: 'test longname',
      description: 'test description',
      id: 5
    }];
    const wrapper = shallow(<AreasContainer
      areas={areas}
    />);
  expect(wrapper).toMatchSnapshot();
  });
});
