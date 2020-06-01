// GET ELEMENTS
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
// [data-skip] means any element with the data-skip attribute
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

// BUILD FUNCTIONS
const togglePlay = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const updateButton = () => {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
};

// doesn't seem to like arrow functions for this particular method
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

// const handleRangeUpdate = () => {};

// HOOK EVENT LISTENERS
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
