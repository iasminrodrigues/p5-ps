function setup() {
    createCanvas(600, 600);
    background("purple")
    
  }
  
  function draw() {
                   
    stroke ("black")
    fill('rgb(207,56,83)');
    
    // console.log(mouseIsPressed)
    
    if (mouseIsPressed) {
      rect(mouseX,mouseY,20,30)
    }
  }