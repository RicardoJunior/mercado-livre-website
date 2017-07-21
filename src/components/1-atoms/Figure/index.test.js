import React from 'react';
import { shallow } from 'enzyme';
import Figure from '.';

const wrap = ({ logo, title, ...props }) => shallow(<Figure {...props} />);

it('renders props when passed in', () => {
  const wrapper = wrap({ src: 'http://placehold.it/200x200', title: 'Test' });
  expect(wrapper.find({ src: 'http://placehold.it/200x200', title: 'Test' })).toHaveLength(2);
});

it('renders aditional props when passed in', () => {
  const wrapper = wrap({ src: 'http://placehold.it/200x200', title: 'Test', id: 'test' });
  expect(wrapper.find({ src: 'http://placehold.it/200x200', title: 'Test', id: 'test' })).toHaveLength(3);
});
