

const Texts = [
  'HTML', 'CSS', 'JAVASCRIPT',
  'NODE.JS', 'BOOTSTRAP',
  'MYSQL', 'JQUERY', 'JAVA', 'VUE.JS'
];

var tagCloud = TagCloud('.Sphere', Texts, {
  // Sphere radius in px
  radius: 200,
  // animation speed
  // slow, normal, fast
  maxSpeed: 'normal',
  initSpeed: 'fast',
  // Rolling direction [0 (top) , 90 (left), 135 (right-bottom)] 
  direction: 135,
  // interaction with mouse or not [Default true (decelerate to rolling init speed, and keep rolling with mouse).]
  keep: true
});
let storage = document.querySelectorAll(".tagcloud--item");
let responseStorage = [["Hello", "There"], ["This", "What"], [,], [,], [,], [,], [,], [,], [,]];
const textResponse = new Map();
textResponse.set("HTML", responseStorage[0]);
textResponse.set("CSS", responseStorage[1]);
textResponse.set("JAVASCRIPT", responseStorage[2]);
textResponse.set("NODE.JS", responseStorage[3]);
textResponse.set("BOOTSTRAP", responseStorage[4]);
textResponse.set("MYSQL", responseStorage[5]);
textResponse.set("JQUERY", responseStorage[6]);
textResponse.set("JAVA", responseStorage[7]);
textResponse.set("VUE.JS", responseStorage[8]);
$(document).ready(function() {
  $("#about").hide();
  $(".tagcloud--item").on("click", function(event) {
    let text = event.target.innerHTML;
    let response = textResponse.get(text);
    if ($("#about").is(":hidden")) {
      $("#about").fadeIn("slow", function() {
      });
      document.getElementById("title").innerHTML = text;
      document.getElementById("details").innerHTML = response[0];
    }
  })
})

// Giving color to each text in sphere
var color = 'black';
document.querySelector('.Sphere').style.color = color;