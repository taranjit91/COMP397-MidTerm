/*Team Name : 
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship. 
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/

module managers {
  // Mouse Class +++++++++++++++
  export class Mouse {
    // PRIVATE INSTANCE VARIABLES
    private _dx:number;
    private _dy:number;


    // PUBLIC INSTANCE VARIABLES +++++++++
    public direction:number;
    public player:objects.GameObject;


    // CONSTRUCTOR +++++++++++++++++++++++
    constructor(player:objects.GameObject) {
      this.player = player;
    }

    // PUBLIC METHODS +++++++++++++++++++++
     public PlayerFollowMouse():void {
      this._dx = objects.Game.stage.mouseX - this.player.x;
      this._dy = objects.Game.stage.mouseY - this.player.y;
      // find the angle of rotation
      this.direction = Math.atan2(this._dy, this._dx) * (180 / Math.PI) + 90;
       this.player.rotation = this.direction;
    }


    public Update():void {
      this.PlayerFollowMouse();
    }

  }
}
