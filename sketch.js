let dataJSON;
let currentYear = "2025"
function preload() {
  dataJSON = loadJSON("data/nba.json")
  
}
function setup() {
  createCanvas(600, 400);
  console.log(dataJSON['2025'])
  
}

function draw() {
  background(190,192,194);
  textSize(16)
  textAlign(CENTER,CENTER)
  fill(0,0,0)
  text("Top Knicks Players Avg Points Per Game "+currentYear,width/2,20)
  textSize(12)
  text("Press Space bar to change year",width/2,40)
  let players = dataJSON[currentYear]
  let playerNames = players.map(player => player.name)
  let ppg = players.map(player => player.ppg)
  let maxppg = max(ppg)
  let barWidth = 100
  let margin = 30  
  
  for(i=0;i<players.length;i++){
    let x = margin + i*(barWidth+10)
    let h = map(ppg[i], 0, maxppg, 0, height - 150);
    let y = height-h-50
    
    
    fill(0,107,182 )
    if(mouseX>x && mouseX<x+barWidth && mouseY>y){
      fill(245,132,38)
    }
    text(ppg[i],x+barWidth/2,y-10)
    rect(x,y,barWidth,h)
    text(playerNames[i],x+barWidth/2,height-35)
  } 
  textSize(14)
  fill(0,0,0)
  text("Players",width/2,height-15)
 
}
function keyPressed(){
  if (key === " "){
    if (currentYear == "2025"){ 
      currentYear = "2024"
      
    }
    else {
      currentYear = "2025"
    }
    redraw()
  }
}

// let = names ["Cody", "Zidan", "Ozzy"]

// let firstLetter = names.map(name => name[0]);
// console.log(firstLetter);

// ["C", "Z", "O"]