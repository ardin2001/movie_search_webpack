class Footer extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
 
  connectedCallback(){
    this.author = this.getAttribute('author') || null;
    this.caption = this.getAttribute('caption') || null;
    this.render();
  }
 
  render() {
    this.shadowDOM.innerHTML = `
    <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      width: 100%;
      background-color: #212429;
      color: white;
      position: fixed;
      bottom: 0;
      left: 0;
      padding : 15px;
      text-align : center;
    }
  </style>
      <h3>Design By ${this.author}</h3>
      <p>${this.caption}</p>
    `;
  }
}
   
customElements.define('footer-movie', Footer);