function changeText(val){
  if(val=='s1'){
    document.getElementById("header").innerHTML="\"EK JANAM\""
    document.getElementById("legend").innerHTML="<br>This video is a bollywood music video adaptation <br> shot on the Hudson River. It is a sarcastic play on <br> common themes present in traditional bollywood <br> music videos."
  }
  else if (val=='s2'){
    document.getElementById("header").innerHTML="\"POOL 2.0\""
    document.getElementById("legend").innerHTML="<br>A cinematic action video shot in 80 Lafayette. <br>This piece is showcasing different pool shots <br> with background music and editing to provide<br> a thrilling touch."
  }
  else if (val=='s3'){
    document.getElementById("header").innerHTML="\"TRIP TO MIAMI\""
    document.getElementById("legend").innerHTML="<br>This is travel blog shot on the Miami Beach.<br> It is a video that shows a variety of activities<br> and shows the beauty of Miami Beach. "
  }
  else if (val=='s4'){
    document.getElementById("header").innerHTML="\"SLOW DOWN\""
    document.getElementById("legend").innerHTML="<br>This video is about a man late for a job interview <br> which is shot in a dorm in 80 Lafayette. He<br> is seen flustering and messing up his <br>interview in a rush and has a dreadful end.  "
  }
  else if (val=='s5'){
    document.getElementById("header").innerHTML="\"CHANGE OF VIEW\""
    document.getElementById("legend").innerHTML="<br>This is a video showcasing interactive technology <br> which is shot in the Arts Center. The actor picks<br> up a conspicuous pair of eye glasses which <br> adds human tracking to his eye sight."
  }
}
