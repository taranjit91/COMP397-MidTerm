module scenes {
  export class End extends objects.Scene {
    // PRIVATE INSTANCE VARIABLES
    private _titleLabel:objects.Label;
    private _backButton:objects.Button;
    private _highScoreLabel: objects.Label;
    private _theme:objects.Starwar;
    private _sound: createjs.AbstractSoundInstance;

    //CONSTRUCTORS
    constructor(currentScene: number) {
      super();

      this._currentScene = currentScene;
      this._sound = createjs.Sound.play("audioStartEnd");
      // Register Button Event Handlers
      this._backButtonClick = this._backButtonClick.bind(this);

      this.Start();
    }

    // PRIVATE METHODS
    private _backButtonClick(event:createjs.MouseEvent):void {
      this._currentScene = config.Scene.PLAY;
      this._sound.stop();
      this.removeAllChildren();
    }


    // PUBLIC METHODS
    public Start():void {
      this._titleLabel = new objects.Label("GAME OVER", "60px", "StarJedi", config.Color.WHITE, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT-140, true);
      this._backButton = new objects.Button("restartButton", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT + 70, true);
      this._highScoreLabel = new objects.Label("HIGH SCORE: "+400, "25px", "Dock51", config.Color.WHITE, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT-60, true);
      this._theme= new objects.Starwar("starwar");
      if(config.Scene.HIGHSCORE>=1000)
      {
        this._titleLabel= new objects.Label("YOU WON", "60px", "StarJedi", config.Color.WHITE, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT-140, true);
        this._highScoreLabel= new objects.Label("HIGH SCORE: "+config.Scene.HIGHSCORE, "25px", "Dock51", config.Color.WHITE, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT-60, true);
        
      }
      if(config.Scene.HIGHSCORE<1000)
      {
        this._highScoreLabel= new objects.Label("HIGH SCORE: "+config.Scene.HIGHSCORE, "25px", "Dock51", config.Color.WHITE, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT-60, true);
      }
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
