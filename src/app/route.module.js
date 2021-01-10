import HomePage from './views/HomePage.view.js';
import AboutPage from './views/About.view.js';
import PostsPage from './views/Posts.view.js';

const appRoutes = [
  {
    path: '/',
    view: HomePage,
  },
  {
    path: '/about',
    view: AboutPage,
  },
  {
    path: '/posts',
    view: PostsPage,
  },
];

export { appRoutes };
