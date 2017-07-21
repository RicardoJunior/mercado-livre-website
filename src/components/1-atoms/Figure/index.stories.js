import React from 'react';
import { storiesOf } from '@storybook/react';
import Figure from '.';

storiesOf('Figure', module)
  .add('default', () => (
    <Figure src="http://placehold.it/200x200" />
  ))
  .add('defaultWithTitle', () => (
    <Figure src="http://placehold.it/200x200" title="Test" />
  ));
