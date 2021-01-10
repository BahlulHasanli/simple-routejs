import { appRoutes } from './route.module.js';

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = appRoutes;

  const potensionalMatch = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  let match = potensionalMatch.find((match) => match.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  document.querySelector('#app').innerHTML = await view.render();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
