function setup() {

    // create a 640x480 pixel canvas and attach it to your HTML
    createCanvas(840, 480).parent('p5')

    print("This is the setup")

    background(0, 0, 0)

}

//red brush variable

let brush_type = "pencil_brush"

//brush color

let brush_color = "black"

//variable to track strokeWeight

let current_stroke = 1

//variable shape size

let shape_size = 20

//let r for random button

let r = 0

//rand variable

let rand = false

function draw() {
print(r)

  if (mouseIsPressed) {
    cursor(CROSS)

    if(rand == false) {

    if (brush_color == "red_brush") {
      stroke(209, 45, 54)
      fill(209, 45, 54)
      strokeWeight(current_stroke)

    }

    if (brush_color == "blue_brush") {
      stroke(101, 157, 189)
      fill(101, 157, 189)
      strokeWeight(current_stroke)

    }

    if (brush_color == "green_brush") {
      stroke(55, 150, 131)
      fill(55, 150, 131)
      strokeWeight(current_stroke)

    }

    if (brush_color == "yellow_brush") {
      stroke(249, 215, 28)
      fill(249, 215, 28)
      strokeWeight(current_stroke)

    }

    if (brush_color == "purple_brush") {
      stroke(177, 156, 217)
      fill(177, 156, 217)
      strokeWeight(current_stroke)
    }

    if (brush_color == "grey_brush") {
      stroke(174, 173, 165)
      fill(174, 173, 165)
      strokeWeight(current_stroke)
    }

    if (brush_color == "brown_brush") {
      stroke(112, 72, 60)
      fill(112, 72, 60)
      strokeWeight(current_stroke)
    }

    if (brush_color == "orange_brush") {
      stroke(253, 184, 19)
      fill(253, 184, 19)
      strokeWeight(current_stroke)
    }

    if (brush_color == "white_brush") {
      stroke(255, 245, 238)
      fill(255, 245, 238)
      strokeWeight(current_stroke)
    }

    if (brush_color == "black_brush") {
      stroke(19, 27, 34)
      fill(19, 27, 34)
      strokeWeight(current_stroke)
    }

    if (brush_color == "eraser_brush") {
      stroke(0, 0, 0)
      fill(0, 0, 0)
      strokeWeight(current_stroke + 20)
    }

    if (brush_type == "circle_brush") {
      circle(mouseX, mouseY, shape_size)
    }

    if (brush_type == "square_brush") {
      rect(mouseX, mouseY, shape_size, shape_size)
    }

    if (brush_type == "triangle_brush") {
      triangle(mouseX, mouseY, mouseX - shape_size, mouseY + shape_size, mouseX + shape_size, mouseY + shape_size)
    }

    if (brush_type == "ellipse_brush") {
      ellipse(mouseX, mouseY, shape_size, shape_size - 10)
    }

    if (brush_type == "line_brush") {
      line(pmouseX, pmouseY, mouseX, mouseY)
    }

    if (brush_type == "clouds_brush") {
      noStroke()
      ellipse(mouseX, mouseY, shape_size, shape_size - 10);
      ellipse(mouseX - 10, mouseY - 5 , shape_size, shape_size - 10);
      ellipse(mouseX - 10, mouseY - 10 , shape_size, shape_size - 10);
      ellipse(mouseX - 10, mouseY - 15 , shape_size, shape_size - 10);
      ellipse(mouseX - 10, mouseY - 20 , shape_size, shape_size - 10);
      ellipse(mouseX - 15, mouseY - 10 , shape_size, shape_size - 10);
      ellipse(mouseX - 20, mouseY - 10 , shape_size, shape_size - 10);
    }

  } else if (rand == true) {

    if (r == 1) {
      noStroke()
      fill(0, 50, 100, random(100))
      circle(mouseX + random(-20, 20), mouseY + random(-20, 20), random(2, 30))
    }

    if (r == 2) {
      stroke(128, 132, 135)
      line(mouseX, mouseY, mouseX + random(-50, 50), mouseY + random(-50, 50))
    }

    if (r == 3) {
      stroke(135, 206, 235)
      line(0, 0, mouseX, mouseY)
      line(width, 0, mouseX, mouseY)
      line(0, height, mouseX, mouseY)
      line(width, height, mouseX, mouseY)
    }

  }

  }

  //toolbar area left side

  stroke(0)
  strokeWeight(1)

  fill(253, 184, 19)
  rect(0, 0, 100, 480)

  //red button

  fill(209, 45, 54)
  rect(10, 10, 30, 30)

  //blue button

  fill(101, 157, 189)
  rect(10, 50, 30, 30)

  //green button

  fill(55, 150, 131)
  rect(10, 90, 30, 30)

  //yellow

  fill(249, 215, 28)
  rect(10, 130, 30, 30)

  //purple

  fill(177, 156, 217)
  rect(10, 170, 30, 30)

  //grey

  fill(174, 173, 165)
  rect(10, 210, 30, 30)

  //brown

  fill(112, 72, 60)
  rect(10, 250, 30, 30)

  //orange
  fill(253, 184, 19)
  rect(10, 290, 30, 30)

  //white
  fill(255, 245, 238)
  rect(10, 330, 30, 30)

  //black
  fill(19, 27, 34)
  rect(10, 370, 30, 30)

  //clear button

  strokeWeight(1)
    fill(255, 255, 255)
    rect(10, 450, 30, 30)
    fill(0)
    text("C", 20, 470)

  //random button
  strokeWeight(1)
    fill(255, 255, 255)
    rect(10, 410, 30, 30)
    fill(0)
    text("R", 20, 430)

   //toolbar area right side

   //decrease strokeWeight button
   fill(255)
   rect(60, 10, 30, 30)
   line(65, 25, 85, 25)

   //circle
   fill(255)
   rect(60, 90, 30, 30)
   fill(0)
   text("C", 70, 110)

   //square
   fill(255)
   rect(60, 130, 30, 30)
   fill(0)
   text("S", 70, 150)

   //triangle
   fill(255)
   rect(60, 170, 30, 30)
   fill(0)
   text("T", 70, 190)

   //ellp
   fill(255)
   rect(60, 210, 30, 30)
   fill(0)
   text("E", 70, 230)

   //line
   fill(255)
   rect(60, 250, 30, 30)
   fill(0)
   text("L", 70, 270)

   //erase
   fill(255)
   rect(60, 290, 30, 30)
   fill(0)
   text("E", 70, 310)

   //clouds
   fill(255)
   rect(60, 330, 30, 30)
   fill(0)
   text("CLO", 63, 350)

   //decrease
   fill(255)
   rect(60, 370, 30, 30)
   fill(0)
   text("DE", 67, 390)

   //increase
   fill(255)
   rect(60, 410, 30, 30)
   fill(0)
   text("IN", 70, 430)

   //Save
   fill(255)
   rect(60, 450, 30, 30)
   fill(0)
   text("S", 70, 470)

   //increase strokeWeight Button
   fill(255)
   rect(60, 50, 30, 30)
   strokeWeight(5)
   line(65, 65, 85, 65)




}

function mouseClicked() {

  print(int(mouseX), int(mouseY))

  //click red button

  if (mouseX > 10 && mouseX < 40 && mouseY > 10 && mouseY < 40) {

      print("RED")
      brush_color = "red_brush"
      rand = false
  }

    //click blue button

  if (mouseX > 10 && mouseX < 40 && mouseY > 50 && mouseY < 90) {
        print("BLUE")
        brush_color = "blue_brush"
        rand = false

    }

    //click green button

    if (mouseX > 10 && mouseX < 40 && mouseY > 90 && mouseY < 130) {
          print("GREEN")
          brush_color = "green_brush"
          rand = false

    }

    //click yellow button

    if (mouseX > 10 && mouseX < 40 && mouseY > 120 && mouseY < 170) {
          print("YELLOW")
          brush_color = "yellow_brush"
          rand = false

    }

    //click purple button

    if (mouseX > 10 && mouseX < 40 && mouseY > 160 && mouseY < 210) {
          print("PURPLE")
          brush_color = "purple_brush"
          rand = false

    }

    //click grey button

    if (mouseX > 10 && mouseX < 40 && mouseY > 200 && mouseY < 250) {
          print("GREY")
          brush_color = "grey_brush"
          rand = false

    }

    //click brown button

    if (mouseX > 10 && mouseX < 40 && mouseY > 250 && mouseY < 290) {
          print("BROWN")
          brush_color = "brown_brush"
          rand = false


    }

    //click orange button

    if (mouseX > 10 && mouseX < 40 && mouseY > 290 && mouseY < 330) {
          print("ORANGE")
          brush_color = "orange_brush"
          rand = false


    }

    //click white button

    if (mouseX > 10 && mouseX < 40 && mouseY > 330 && mouseY < 370) {
          print("WHITE")
          brush_color = "white_brush"
          rand = false


    }

    //click black button

    if (mouseX > 10 && mouseX < 40 && mouseY > 370 && mouseY < 410) {
          print("BLACK")
          brush_color = "black_brush"
          rand = false


    }

    //click eraser button

    if (mouseX > 60 && mouseX < 90 && mouseY > 290 && mouseY < 330) {
          print("ERASER")
          brush_color = "eraser_brush"
          rand = false

    }

    //clear button

    if (mouseX > 10 && mouseX < 40 && mouseY > 450 && mouseY < 480) {
      print("CLEAR")
       background(0, 0, 0) // clear everything
       rand = false

   }

   //random button

   if (mouseX > 10 && mouseX < 40 && mouseY > 410 && mouseY < 440) {

     print("RANDOM")
     rand = true

    r = floor(random(1, 4))
   }

   // check if mouse clicked in "strokeWeight decrease" box

   if (mouseX > 60 && mouseX < 90 && mouseY > 10 && mouseY < 40) {
        print("Clicked stroke decrease")
        if (current_stroke > 1) {
            current_stroke -= 1
        }
    }

    // check if mouse clicked in "strokeWeight increase" box

    if (mouseX > 60 && mouseX < 90 && mouseY > 50 && mouseY < 80) {
        print("Clicked stroke increase")
        current_stroke += 1
    }

    //circle brush

    if (mouseX > 60 && mouseX < 90 && mouseY > 90 && mouseY < 120) {
          print("CIRCLE")
          brush_type = "circle_brush"
          rand = false

    }

    if (mouseX > 60 && mouseX < 90 && mouseY > 130 && mouseY < 160) {
          print("SQUARE")
          brush_type = "square_brush"
          rand = false

    }

    if (mouseX > 60 && mouseX < 90 && mouseY > 170 && mouseY < 200) {
          print("TRIANGLE")
          brush_type = "triangle_brush"
          rand = false

    }

    if (mouseX > 60 && mouseX < 90 && mouseY > 210 && mouseY < 240) {
          print("ELLIPSE")
          brush_type = "ellipse_brush"
          rand = false

    }

    if (mouseX > 60 && mouseX < 90 && mouseY > 250 && mouseY < 290) {
          print("LINE")
          brush_type = "line_brush"
          rand = false

    }

    if (mouseX > 60 && mouseX < 90 && mouseY > 330 && mouseY < 370) {
          print("CLOUDS")
          brush_type = "clouds_brush"
          rand = false

    }

    if (mouseX > 60 && mouseX < 90 && mouseY > 370 && mouseY < 400) {
          print("DECREASE")
          if (shape_size > 1) {
              shape_size -=1
          }

    }

    if (mouseX > 60 && mouseX < 90 && mouseY > 410 && mouseY < 440) {
          print("INCREASE")
          shape_size += 1

    }

    if (mouseX > 60 && mouseX < 90 && mouseY > 450 && mouseY < 480) {
        save()

    }



}
