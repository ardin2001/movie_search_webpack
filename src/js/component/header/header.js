class AppBar extends HTMLElement {
  connectedCallback() {
    this.title = this.getAttribute('title') || null;
    this.user = this.getAttribute('user') || null;
    this.render();
  }
  render() {
    this.innerHTML = `<div class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <span class="navbar-brand">${this.title}</span>
      <div class="row align-items-center">
        <span class="text-white">${this.user}</span>
      </div>
    </div>
  </div>`;
  }
}
   
customElements.define('header-movie', AppBar);