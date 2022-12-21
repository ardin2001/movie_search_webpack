import axios from 'axios';
import '../component/film-list/film-list.js'
const search_movie = document.querySelector('search-movie');
const search = search_movie.shadowDOM.getElementById('search');

search.addEventListener('keyup', () =>{
  try {
    axios(`http://www.omdbapi.com?apikey=72cd8846&s=${search.value}`)
    .then(result => {
      return result.data;
    })
    .then(DataFilm => {
      if (DataFilm.Response == 'True') {
        const data = DataFilm.Search
        const film_list = document.querySelector('film-list')
        if(film_list != null){
          film_list.remove()
        }
        const FilmList = document.createElement('film-list');
        document.body.appendChild(FilmList)
        FilmList.film = data
      } else {
        film_list.innerHTML =`<div class="alert alert-danger text-center m-5" role="alert">
        Film yang anda cari tidak ada, silahkan gunakan keyword yang benar!.</div>`
      }
    })
    .catch(error => {
      const film_list = document.querySelector('film-list')
      if(film_list != null){
        film_list.innerHTML =`<div class="alert alert-danger text-center m-5" role="alert">
        Film yang anda cari tidak ada, silahkan gunakan keyword yang benar!.</div>`
      }else{
        const list = document.createElement('film-list')
        list.innerHTML = `<div class="alert alert-danger text-center m-5" role="alert">
        Film yang anda cari tidak ada, silahkan gunakan keyword yang benar!.</div>`
        document.body.appendChild(list)
      }
    });
  } catch (error) {
    console.log(error)
  }
})