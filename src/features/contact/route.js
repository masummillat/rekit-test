import {
  DefaultPage,
  TestContact
} from './';

export default {
  path: '/contact',
  name: 'Contact',
  childRoutes: [
    { path: 'default-page', name: 'Default page', component: DefaultPage, isIndex: true },
    { path: 'test-contact', name: 'Test Contact', component: TestContact },
  ],
};
