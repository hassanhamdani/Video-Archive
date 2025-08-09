function changeText(val) {
  var headerText = "";
  switch (val) {
    case 's1':
      headerText = "\"Intro\"";
      break;
    case 's2':
      headerText = "\"Tea Time\"";
      break;
    case 's3':
      headerText = "\"Highline Hentai\"";
      break;
    case 's4':
      headerText = "\"Last Look\"";
      break;
  }
  document.getElementById("header").innerHTML = headerText;
}

document.addEventListener('DOMContentLoaded', function() {
  var currentDate = new Date();
  var releaseDates = {
      video1: new Date('2024-06-15'),
      video2: new Date('2025-06-15'),
      video3: new Date('2026-06-15'),
      video4: new Date('2027-06-15')
  };

  function updateVideoAvailability() {
      Object.keys(releaseDates).forEach(function(video) {
          if (currentDate >= releaseDates[video]) {
              var container = document.getElementById(video + 'container');
              container.innerHTML = `<video width="100%" height="100%" controls>
                  <source src="${video}.mp4" type="video/mp4">
                  Your browser does not support the video tag.
              </video>`;
          }
      });
  }

  updateVideoAvailability();
});

