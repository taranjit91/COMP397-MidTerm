module scenes {
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE VARIABLES
    private _playLabel:objects.Label;
    private _nextButton:objects.Button;
    private _gamepad:managers.GamePad;
    private _player:objects.Plane;
    private _keyboard:managers.Keyboard;
    private _mouse:managers.Mouse;

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

      return this._currentScene;
    }

    public Main():void {
      this.addChild(this._playLabel);
      this.addChild(this._nextButton);
      this.addChild(this._player);


      // Task: Score and Lives
      this.addChild(this._livesLabel);
      this.addChild(this._scoreLabel);

      //this._nextButton.on("click", this._nextButtonClick);
    }

    private _checkCollision(other:objects.GameObject) {

      // Task: Score and Lives
      if(this._lives <= 0) {
        this._currentScene = config.Scene.END;
        this.removeAllChildren();                
      }
      this._livesLabel.text = "Lives: " + this._lives;
    }
  }
}
