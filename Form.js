class Form{
constructor(){
    this.input = createInput("USERNAME:");
    this.input2 = createInput("PASSWORD:");
    this.button = createButton("START");
    this.button2 = createButton("Forgot Password");
  
    this.title = createElement("h1");
    this.text = createElement("h3");
    this.greeting = createElement("h2");

   

}
display(){
this.input.position(220,100);
this.input2.position(220,200);
this.button.position(250,400);
this.button2.position(250,500);
this.greeting.position(220,100);
this.text.position(220,200);
this.title.position(220,20);

this.title.html("RECYCLING");






this.button.mousePressed(()=>{
    this.input.hide();
    this.input2.hide();
    this.button.hide();
    this.button2.hide();
  
  
    var playerName = this.input.value();
    this.greeting.html("Hello"+ playerName);
    this.text.html("Welcome to Recycling. In this game your job is to categorise the junk in to the specific recycling bins based on the item you have , you have to choose one item from the junk and try to throw it in the hoops above the recycling bins , like a basketball game. If you miss the shot you will have to try again and you will get a text in blue saying Missed shot , Try Again. If you put the item in the wrong recycling bin you will get a text in red saying WRONG BIN , TRY AGAIN and you will have to try again.");
    this.title.html("RECYCLING");
    game.start();
    game.display();
    
  




      


})



this.button2.mousePressed(()=>{
    this.button2.hide();
   this.input.hide();
  this.input2.hide();
  this.button.hide();
  this.input3 = createInput("New Password:")
  this.input4 = createInput("Username:")
  this.input3.position(220,100);
  this.input4.position(220,200);
  this.button3 = createButton("Start");
  this.button3.position(250,400);


 
   

})







    





}
}