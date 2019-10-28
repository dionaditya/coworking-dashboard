/*
 * Content Messages
 *
 * This contains all the text for the Content component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Content';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Content component!',
  },
});
