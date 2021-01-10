import AbstractView from './Abstract.view.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('About Page');
  }

  async render() {
    return `<h1>About Page</h1>`;
  }
}
