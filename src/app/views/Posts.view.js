import AbstractView from './Abstract.view.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Posts Page');
  }

  async render() {
    return `
         <h1>Posts page</h1>
      `;
  }
}
