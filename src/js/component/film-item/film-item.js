class FilmItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
  set film(film) {
    this._film = film;
    this.setAttribute('class','mb-5')
    this.style.width = '18rem'
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
    :host .card{
      text-align: justify;           
      padding: 15px;
      height : 100%;
      border-radius: 10px;
      border : solid #212429;
      background-color : white;
    }
    :host .card:hover{
      box-shadow: 0px 0px 8px 6px rgba(69, 69, 69, 0.4);
    }
    :host .card img{
      width: 100%;
      border-radius: 10px;
      object-fit: cover; 
      object-position: center;
    }
    </style>
    <article class="card">
      <img src="${this._film.Poster}" alt="">
      <h2>${this._film.Title}</h2>
      <p>Type : ${this._film.Type}</p>
      <p>Tahun : ${this._film.Year}</p>
    </article>`;
  }
}
   
customElements.define('film-item', FilmItem);