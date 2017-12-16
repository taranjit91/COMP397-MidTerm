module scenes {
  export class Start extends objects.Scene {
    // PRIVATE INSTANCE VARIABLES
    private _startLabel:objects.Label;
    private _stLabel:objects.Label;
    private _startButton:objects.Button;
    private _theme:objects.Starwar;

    //CONSTRUCTORS
    constructor(currentScene: number) {
      super();

      this._currentScene = currentScene;

      // register button event handlers
      this._startButtonClick = this._startButtonClick.bind(this);

      this.Start();
    }

    // PRIVATE METHODS
    private _startButtonClick(event:createjs.MouseEvent):void {
      this._currentScene = config.Scene.PLAY;
      this.removeAllChildren();
    }


    // PUBLIC METHODS
    public Start():void {
      console.log("Start Scene");
      this._startLabel = new objects.Label("Start Scene", "60px", "StarJedi", config.Color.RED, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
      this._startButton = new objects.Button("startButton", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT + 70, true);
      this._stLabel = new objects.Label("Start Scene", "60px", "StarJedi", config.Color.RED, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT, true);
      this.Main();
    }

    public Update():number {
      return this._currentScene;
    }

    public Main():void {
      this.addChild(this._startLabel);
      this.addChild(this._startButton);
      this.addChild(this._stLabel);
      this.addChild(this._theme);

      this._startButton.on("click", this._startButtonClick);
    }
  }
}
