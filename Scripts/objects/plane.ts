/*Team Name : 
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship. 
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/

module objects {
  export class Plane extends objects.GameObject{
    // PRIVATE INSTANCE VARIABLES
    bulletSpawn:createjs.Point;

    // PUBLIC PROPERTIES

    // CONSTRUCTORS
    constructor() {
      super("plane");
      this.Start();
    }
    
    // PRIVATE METHODS
    private _checkBounds()
    {
      if(this.x >= config.Screen.WIDTH - this.halfWidth) {
        this.x = config.Screen.WIDTH - this.halfWidth;
      }
      if(this.x <= this.halfWidth) {
        this.x = this.halfWidth;
      }

      if(this.y >= config.Screen.HEIGHT - this.halfHeight) {
        this.y = config.Screen.HEIGHT - this.halfHeight;
      }

      if(this.y <= this.halfHeight) {
        this.y = this.halfHeight;
      }
    }

    // PUBLIC METHODS
    public Start():void
    {
      this.x = 320;
      this.y = 430;
      this.bulletSpawn = new createjs.Point(this.y - 35, this.x);
    }

    public Update():void
    {
      this.bulletSpawn.x = this.x;
      this.bulletSpawn.y = this.y - 35;
      this._checkBounds();
    }



    public Reset():void
    {


      
    }
  }
}

