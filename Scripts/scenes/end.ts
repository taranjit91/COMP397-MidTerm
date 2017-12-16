module scenes {
  export class End extends objects.Scene {
    // PRIVATE INSTANCE VARIABLES
    private _titleLabel:objects.Label;
    private _backButton:objects.Button;
    private _highScoreLabel: objects.Label;
    private _theme:objects.Starwar;


    //CONSTRUCTORS
    constructor(currentScene: number) {
      super();

      this._currentScene = currentScene;

      // Register Button Event Handlers
      this._backButtonClick = this._backButtonClick.bind(this);

      this.Start();
    }

    // PRIVATE METHODS
    private _backButtonClick(event:createjs.MouseEvent):void {
      this._currentScene = config.Scene.PLAY;
      this.removeAllChildren();
    }


    // PUBLIC METHODS
    public Start():void {
      this._titleLabel = new objects.Label("GAME OVER", "60px", "StarJedi", config.Color.WHITE, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT-140, true);
      this._backButton = new objects.Button("backButton", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT + 70, true);
      this._highScoreLabel = new objects.Label("HIGH SCORE: "+400, "25px", "Dock51", config.Color.WHITE, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT-60, true);
      this._theme= new objects.Starwar("starwar");
      this.Main();
    }

    public Update():number {
      return this._currentScene;
    }

    public Main():void {
      this.addChild(this._theme);
      this.addChild(this._titleLabel);
      this.addChild(this._highScoreLabel);
      this.addChild(this._backButton);

      this._backButton.on("click", this._backButtonClick);
    }
  }
}
