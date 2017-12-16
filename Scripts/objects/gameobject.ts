/*Team Name : 
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship. 
Version 1
Xwing just need to collect 500 power(scores) to win the game and save Millennium Falcon is in Play Level*/

module objects {
  export abstract class GameObject extends createjs.Bitmap {
    // PRIVATE INSTANCE VARIABLES
    public halfHeight:number;
    public halfWidth:number;
    public height:number;
    public horizontalSpeed:number;
    public isColliding:boolean;
    public position:createjs.Point;
    public verticalSpeed:number;
    public width:number;

    // PUBLIC PROPERTIES

    // CONSTRUCTORS
    constructor(imageString: string) {
      super(objects.Game.assetManager.getResult(imageString));
      this.name = imageString;

      this._initialize();
    }
    // PROTECTED METHODS

    private _initialize():void {
      this.width = this.getBounds().width;
      this.height = this.getBounds().height;
      this.halfWidth = this.width * 0.5;
      this.halfHeight = this.height * 0.5;
      this.regX = this.halfWidth;
      this.regY = this.halfHeight;
      this.position = new createjs.Point(this.x, this.y);
      this.isColliding = false;
    }

    // PUBLIC METHODS
    public abstract Start():void;

    public abstract Update():void;

    public abstract Reset():void;
  }
}
