let time = 0;
let wave = [];
let slider;


function setup() {
  createCanvas(1000, 600);
  slider = createSlider(1,50,1);
  textSize(28);

}

function draw() {
  background(0);
  translate(150,200);
  stroke(255);
  noFill();
  
  fill(0, 102, 153);
  stroke(0);
  text(slider.value(),750,-80);
  slider.position(850,70);
  let x = 0;
  let y = 0;
  for( let i = 0; i < slider.value(); i++)
  {
  
  let prevx = x;
  let prevy = y;
  let n = i * 2+1;
  let radius = 50 * (4/(n * PI));
  
   x += radius * cos(n * time);
   y += radius * sin(n * time);

    
  stroke(255,50);
  noFill();
  ellipse(prevx,prevy,radius*2);
    
  //fill(255);
  stroke(255);
  line(prevx,prevy,x,y);
  //ellipse(x,y,8);
  
  
  }
  wave.unshift(y);
  translate(200,0);
  line(x-200,y,0,wave[0]);
  
  beginShape();
  noFill();
  for(let i = 0; i < wave.length; i++){
    stroke(255);
    vertex(i, wave[i]);
  }
 endShape();
  
  
  time += 0.03;
  
  if (wave.length > 800)
  {
    wave.pop();
  }
}