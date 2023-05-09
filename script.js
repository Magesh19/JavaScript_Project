const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const price = document.getElementById('price');

const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }

  if (selectedMoviePrice !== null) {
    count.innerText = selectedSeats.length;
    price.innerText = selectedSeats.length * +selectedMoviePrice;
  }
};

populateUI();

selectedMovie = (movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
};

const updateSelectedSeatsCount = () => {
  const selectedSeats = document.querySelectorAll('.row .selected');

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  price.innerText = selectedSeatsCount * ticketPrice;
const messageElement = document.querySelector('#message');

if (selectedSeatsCount>0) {
    // User has selected a seat
    messageElement.textContent = 'User has selected a seat';
} else {
    // User has not selected a seat
    messageElement.textContent = 'Your are not selected a seat please select the seats that are available';
}
};

// Seat select event
container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedSeatsCount();
  }
});
const movieList = ["Ponniyin Selvan-2","Fast X","Gaurdians Of The Galaxey","Evil Dead Rise -- (A)"];
const searchBox = document.getElementById('search-box');
const suggestionList = document.getElementById('suggestion-list');

searchBox.addEventListener('input', function() {
  const searchTerm = searchBox.value;
  const matches = movieList.filter(function(movie) {
    return movie.toLowerCase().includes(searchTerm.toLowerCase());
  });
  suggestionList.innerHTML = '';
  matches.forEach(function(match) {
    const li = document.createElement('li');
    li.textContent = match;
    suggestionList.appendChild(li);
  });
});

// Movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  selectedMovie(e.target.selectedIndex, e.target.value);

  updateSelectedSeatsCount();
});
const selectedSeat = document.querySelector('.seat.selected');
const messageElement = document.querySelector('#message');

if (selectedSeat) {
    // User has selected a seat
    messageElement.textContent = 'User has selected a seat';
} else {
    // User has not selected a seat
    messageElement.textContent = 'User has not selected a seat';
}

// Set the date and time of the next show
const nextShowDate = new Date("2023-05-09T19:30:00");

// Get the countdown element from the DOM
const countdownElement = document.getElementById("countdown");

// Update the countdown every second
setInterval(() => {
  // Calculate the time remaining until the next show
  const timeRemaining = nextShowDate - new Date();

  // If the show has already started, display a message
  if (timeRemaining < 0) {
    countdownElement.textContent = "The show has already started!";
  } else {
    // Otherwise, calculate the hours, minutes, and seconds remaining
    const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
    const minutesRemaining = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsRemaining = Math.floor(
      (timeRemaining % (1000 * 60)) / 1000
    );

    // Display the remaining time in the countdown element
    countdownElement.textContent = `${hoursRemaining}h ${minutesRemaining}m ${secondsRemaining}s`;
  }
}, 1000);

