function changeText(val){
  if(val=='s1'){
    document.getElementById("header").innerHTML="\"EK JANAM\""
  }
  else if (val=='s2'){
    document.getElementById("header").innerHTML="\"POOL 2.0\""
  }
  else if (val=='s3'){
    document.getElementById("header").innerHTML="\"TRIP TO MIAMI\""
  }
  else if (val=='s4'){
    document.getElementById("header").innerHTML="\"SLOW DOWN\""
  }
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

