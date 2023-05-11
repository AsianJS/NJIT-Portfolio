

const Texts = [
  'HTML', 'CSS', 'JAVASCRIPT',
  'NODE.JS', 'BOOTSTRAP',
  'MYSQL', 'JQUERY', 'JAVA', 'VUE.JS'
];

var tagCloud = TagCloud('.Sphere', Texts, {
  // Sphere radius in px
  radius: 180,
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
let responseStorage = [["HTML is more like something necessary to completely know to code websites. I believed I learned everything to know about the \"language\".", "There"], ["CSS is one of those languages in which you think you know everything, but new things always pop up in the most random places. However, I still do believe I pretty much know most things when it comes to CSS as I have been using it for three years.", "What"], ["Javascript is extremely simple to learn when it comes to programming. However, I still do have difficulty when applying Javascript to certain things.",], ["I know how to use Node.js. Simple as that.",], ["I have been coding Bootstrap for over two years. I started to fall away from its fixed structure, but it is still useful at times. ",], ["MYSQL is something I put as I seen before. I do not have much experience in it, but I do know what it is and how to kind of use it.",], ["I try to avoid to use this framework as it is dying, but it does make some applications of Javascript a lot more easier.",], ["Java is my best language currently. I know how to use most of it, but anything too deep are a little difficult to use.",], ["I have half of a year in experienc in Vue.js. I am not an expert in it, but it is fun to use.",]];
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
    console.log("Hi");
    if ($("#about").is(":hidden")) {
        document.getElementById("title").innerHTML = text;
        document.getElementById("details").innerHTML = response[0];
      $("#about").fadeIn("slow");
    } else {
      $(".stuffy").fadeOut("slow", function() {
        document.getElementById("title").innerHTML = text;
        document.getElementById("details").innerHTML = response[0];
        $(".stuffy").fadeIn("slow");
      });
    }
  })
})

// Giving color to each text in sphere
var color = 'black';
document.querySelector('.Sphere').style.color = color;