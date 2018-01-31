import {
  DefaultPage,
} from './';

export default {
  path: '/test',
  name: 'Test',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
  ],
};
