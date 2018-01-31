import {
  DefaultPage,
} from './';

export default {
  path: '/about',
  name: 'About',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
  ],
};
