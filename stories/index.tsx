import * as React from 'react';
import { storiesOf, action, addDecorator } from '@kadira/storybook';
import backgroundColor from 'react-storybook-decorator-background'

import DateLabel from './DateLabel'

const today = new Date();

storiesOf('DateLabel', module)
  .add('default', () => (
    <div>
      <DateLabel fullDate={today} onClick={action('onClick')} />
    </div>
));