import React from 'react';
import ToDo from '../../../components/todo/todo.js';
import LoginContext from '../../../components/auth/context.js';
// jest.mock('../../../components/auth/context.js');

describe('<ToDo />', () => {

  xit('is alive at application start', () => {
    let app = shallow(
      <LoginContext><ToDo /></LoginContext>
    );
    expect(app.find('span').exists()).toBeTruthy();
  });

  xit('changes state on typing', () => {
    let app = mount(<LoginContext><ToDo /></LoginContext>);
    let input = app.find('input');
    let itemText = 'Item 1';
    input.simulate('change', { target: { value: itemText }});
    expect(app.state('item')).toEqual(itemText);
  });

});
