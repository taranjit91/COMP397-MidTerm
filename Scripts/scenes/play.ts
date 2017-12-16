module scenes {
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE VARIABLES
    private _playLabel:objects.Label;
    private _nextButton:objects.Button;
    private _gamepad:managers.GamePad;
    private _player:objects.Plane;
    private _keyboard:managers.Keyboard;
    private _mouse:managers.Mouse;

    // Task: Enemy
    private _tiefighters:objects.Tiefighter[];  
    private _tiefightersNum:number;

    // Task: Score and Lives
    private _livesLabel: objects.Label;
    private _scoreLabel: objects.Label;

    private _lives:number;
    private _score:number

    //CONSTRUCTORS
    constructor(currentScene: number) {
      super();

      this._currentScene = currentScene;

      // register button event handlers
      this._nextButtonClick = this._nextButtonClick.bind(this);

      this.Start();
    }

    // PRIVATE METHODS
    private _nextButtonClick(event:createjs.MouseEvent):void {
      this._currentScene = config.Scene.END;
      this.removeAllChildren();
    }


    // PUBLIC METHODS
    public Start():void {
      this._playLabel = new objects.Label("Play Scene", "60px", "Consolas", config.Color.BLACK, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
      this._nextButton = new objects.Button("nextButton", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT + 70, true);

      this._player = new objects.Plane();

      // Task: Enemy
      this._tiefightersNum = 2;
      this._tiefighters = new Array<objects.Tiefighter>();

      // Task: Score and Lives
      this._lives = 5;
      this._score = 0;     
      this._livesLabel = new objects.Label("Lives: " + this._lives, "30px", "Consolas", config.Color.BLACK, 100, 10, true);       
      this._scoreLabel = new objects.Label("Score: " + this._score, "30px", "Consolas", config.Color.BLACK, 500, 10, true);

      // uncomment the next line to enable gamepad support
      //this._gamepad = new managers.GamePad(this._player, 0);
      this._mouse = new managers.Mouse(this._player);
      this._keyboard = new managers.Keyboard(this._player);


      this.Main();
    }

    public Update():number {
      this._player.Update();
      // uncomment the next line to enable gamepad support
     // this._gamepad.Update();
      this._mouse.Update();
      this._keyboard.Update();


      // Check the Collision
      //this._checkCollision(this);

      // Task: Enemy
      this._tiefighters.forEach(tiefighters => {
        tiefighters.Update();
        this._checkCollision(tiefighters);
      });

      return this._currentScene; 
    }

    public Main():void {
      this.addChild(this._playLabel);
      this.addChild(this._nextButton);
      this.addChild(this._player);

      // Task: Enemy
      for (let count = 0; count < this._tiefightersNum; count++) {
        this._tiefighters[count] = new objects.Tiefighter();
        this.addChild(this._tiefighters[count]);
      }

      // Task: Score and Lives
      this.addChild(this._livesLabel);
      this.addChild(this._scoreLabel);

      //this._nextButton.on("click", this._nextButtonClick);
    }

    private _checkCollision(other:objects.GameObject)
    {
      let P1:createjs.Point = new createjs.Point(this._player.x, this._player.y);
      let P2:createjs.Point = other.position;

      if(Math.sqrt(Math.pow(P2.x - P1.x, 2) + Math.pow(P2.y - P1.y, 2)) <(
        this._player.halfHeight + other.halfHeight))
        {
          if(!other.isColliding)
          { 
            if(other.name == "tiefighter") 
            {
              this._lives -= 1;
              other.Reset();

              // Task: Score and Lives
              if(this._lives <= 0)
              {
                this._currentScene = config.Scene.END;
                this.removeAllChildren();                
              }
              this._livesLabel.text = "Lives: " + this._lives;
            }
            other.isColliding = true;
        }
      } else {
        other.isColliding = false;
      }         
    }
  }
}
