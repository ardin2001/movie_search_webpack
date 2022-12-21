class Search extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
  connectedCallback(){
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
    :host{
      display : flex;
      justify-content : center;
    }
    #search{
      border: 2px solid #212429;
      box-shadow: 0px 0px 4px 4px rgba(52, 52, 52,0.2);
      padding: 10px;
      width: 70%;
      border-radius: 10px;
      margin: 40px 0px 0px;
    }
    #search:focus{
      outline: none;
    }
    </style>
      <input type="search" id="search" name="search" placeholder="Cari Buku...">
      `;
  }
}
   
customElements.define('search-movie', Search);