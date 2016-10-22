var countries = [],
    country;          

p5.midi.onInput = function(event) {
    //console.log(event);
    console.dir(event);

    if (event.data[0] == 128 || event.data[0] == 144) { 
      country = {};
      country.data = event.data;
      country.x = 20;
      country.y = 128;
      countries[0] = country;

      printMidi(countries);
      console.log('1');
    } else {
      country = {};
      country.data = event.data;
      country.x = 300;
      country.y = 128;
      countries[1] = country;
      console.log('2');
    }
}

function setup() {
    createCanvas(660, 400);
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

function printMidi(countries) {

  //console.log('print midi:' + event.data[0] + ',' + event.data[1] + ',' + event.data[2] );
  var country1 = countries[0],
      country2 = countries[1];

  clear();
  strokeWeight(0);

  if (country1){
    text(country1.data[0], country1.x, country1.y);  
  }
  
  if (country2) {
    text(country2.data[0], country2.x, country2.y);
  }

}
