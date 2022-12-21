class FilmList extends HTMLElement {
  set film(films) {
    this._films = films;
    this.setAttribute('class','row d-flex justify-content-evenly m-5')
    this.render();
  }
 
  render() {
    this.innerHTML = '';
    this._films.forEach(film => {
      const FilmItem = document.createElement('film-item')
      FilmItem.film = film
      this.appendChild(FilmItem);
    });
  }
}   
customElements.define('film-list', FilmList);