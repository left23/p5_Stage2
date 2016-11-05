var countries = [],
    country,
    indCountry;

var notes = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];


jQuery.get('countries.json', function(json) {
     countries = json.countries;
});

var myVoice = new p5.Speech(); // new P5.Speech object


p5.midi.onInput = function(event) {
    //console.log(event);

    if (event.data[0] == 248) {
        return;
    }

    console.dir(event);

    //if (event.data[0] == 128 || event.data[0] == 144) {

      for (var i = 0; i < 5; i++) {
        //console.log(countries[i]);
        //var indCountry = countries[i];
        var indCountry = countries[Math.floor(Math.random()*countries.length)]

      }

      country = {};
      country.data = [event.data[0], event.data[1], event.data[2]];

        //console.log(typeof event.data);

        country.data.push(notes[country.data[1] % 12]);

        console.log(country.data[3]);

      country.x = 20;
      country.y = 128;

      countries[0] = country;
      console.log('Country:' + indCountry);

      printMidi(country, indCountry);

      //console.log('1');

    /*} else {

      country = {};
      country.data = event.data;
      country.x = 300;
      country.y = 128;
      countries[1] = country;
      console.log('2');
    }*/
}
function printMidi(country,indCountry) {

  //var country = countries[0];
  //,      country2 = countries[1];

  clear();
  strokeWeight(0);

  text(indCountry, 10, 300);


    var currentNote = country.data[3];
    console.log("current note: " + country.data[3]);

    text(currentNote,10,400);


  if (country){
    text(country.data, country.x, country.y);
  }

  myVoice.speak(indCountry);

  //if (country2) {
  //  text(country2.data[0], country2.x, country2.y);
  //}

}


function setup(indCountry) {
    createCanvas(640, 480);
    textFont('arial', 64);
    textAlign(LEFT);
}

function mousePressed(){
    // if in bounds:
    if(mouseX<width && mouseY<height) {
        stroke('rgb(255,255,0)');
        strokeWeight(2);
        fill('rgba(255,255,0, 0.25)');
        ellipse(mouseX, mouseY, 50, 50); // circle
    }
}

function mouseClicked() {
    // if in bounds:
    if(mouseX<width && mouseY<height) {
        stroke('rgb(0,255,0)');
        strokeWeight(2);
        fill('rgba(0,255,0, 0.25)');
        ellipse(mouseX, mouseY, 50, 50);
        x = y = 50;
    }
}
