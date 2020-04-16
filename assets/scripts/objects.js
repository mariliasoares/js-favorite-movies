const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');

const movies = [];

const renderMovies = () => {
  const moviesList = document.getElementById('movie-list');

  if (movies.length === 0) {
    moviesList.classList.remove('visible');
  } else {
    moviesList.classList.add('visible');
  }
  moviesList.innerHTML = '';

  movies.forEach((movie) => {
    const movieEl = document.createElement('li');
    let text = movie.info.title + ' - ';
    for (const key in movie.info) {
      if(key !== 'title') {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    moviesList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
    return;
  }

  const newMovie = {
    //if key name and value name are the same, just use like that
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random()
  };

  movies.push(newMovie);
  renderMovies();

  console.log(newMovie);
}





addMovieBtn.addEventListener('click', addMovieHandler);
