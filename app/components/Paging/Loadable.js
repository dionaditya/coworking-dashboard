/**
 *
 * Asynchronously loads the component for Paging
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
