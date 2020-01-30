import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe("<App />", () => {
  it('works', () => {
    // when
    const appShallow = shallow(<App/>);
    // then
    expect(appShallow.exists()).toBeTruthy();
  });
});
