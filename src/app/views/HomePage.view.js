import AbstractView from './Abstract.view.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Home Page');
  }

  async render() {
    return `
         <h1>Welcome to Home page</h1>
      `;
  }
}
