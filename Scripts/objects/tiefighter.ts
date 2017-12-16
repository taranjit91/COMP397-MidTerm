/*Team Name : 
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship. 
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/

module objects {
    export class Tiefighter extends objects.GameObject{
      // PRIVATE INSTANCE VARIABLES
  
      // PUBLIC PROPERTIES
  
      // CONSTRUCTORS
      constructor() {
        super("tiefighter");        
        this.Start();
      }
      
      // PRIVATE METHODS
      private _reset():void {
        this.y = -this.height;
        this.x = (Math.random() * (640-this.width))+this.halfWidth;
        this.verticalSpeed = (Math.random() * 5) + 5;
        this.horizontalSpeed = (Math.random() *4) -2;
      }
  
      private _checkBounds():void {
        if(this.y >= 600 + this.height) {
          this._reset();
        }
      }
  
      // PUBLIC METHODS
      public Start():void {
        this._reset();
      }
  
      private _updatePosition():void {
        this.y += this.verticalSpeed;
        this.x += this.horizontalSpeed;
        this.position.x =this.x;
        this.position.y = this.y;
      }
  
      public Update():void {
        this._updatePosition();
        this._checkBounds();
      }
      public Reset(): void {
        this._reset();
      }
    }
  }
  