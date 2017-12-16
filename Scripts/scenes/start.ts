/*Team Name : 
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship. 
Version 1
Xwing just need to collect 500 power(scores) to win the game and save Millennium Falcon is in Play Level*/

module scenes {
  export class Start extends objects.Scene {
    // PRIVATE INSTANCE VARIABLES
    private _startLabel:objects.Label;    
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
      this._startLabel = new objects.Label("STAR WARS", "60px", "StarJedi", config.Color.WHITE, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT-140, true);
      this._startButton = new objects.Button("startButton", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT + 70, true);
     this._theme= new objects.Starwar("starwar");
      this.Main();
    }

    public Update():number {
      return this._currentScene;
    }

    public Main():void {
      this.addChild(this._theme);
      this.addChild(this._startLabel);
      this.addChild(this._startButton);
      
      this._startButton.on("click", this._startButtonClick);
    }
  }
}

