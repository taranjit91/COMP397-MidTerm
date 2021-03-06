/*Team Name : 
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship. 
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/

module objects {
  export class Label extends createjs.Text {
    constructor(text:string, fontSize:string = "40px", fontFamily:string="Consolas", color:string="#000000", x:number = 0, y:number=0, isCentered:boolean=false) {
      super(text, fontSize + " " + fontFamily, color);
      if(isCentered) {
        this.regX = this.getMeasuredWidth() * 0.5;
        this.regY = this.getMeasuredHeight() * 0.5;
      }
      this.x = x;
      this.y = y;
    }
  }
}
