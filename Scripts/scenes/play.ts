/*Team Name : 
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship. 
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/

module scenes {
  export class Play extends objects.Scene {
    // PRIVATE INSTANCE VARIABLES
    private _gamepad:managers.GamePad;
    private _player:objects.Plane;
    private _keyboard:managers.Keyboard;
    private _mouse:managers.Mouse;
    private _theme:objects.Starwar;

    // Task: Bullet
    private _pbullets: objects.PBullet[];
    private _pbulletNum: number;
    private _pbulletCounter: number;

    private _pbulletInterval: boolean;
    private _pbulletIntervalNum: number;
    private _pbulletIntervalCount: number;

    // Task: Enemy
    private _tiefighters:objects.Tiefighter[];  
    private _tiefightersNum:number;

    // Task: Score and Lives
    private _livesLabel: objects.Label;
    private _scoreLabel: objects.Label;
   
    private _lives:number;
    private _totalLives:number;
    private _score:number;
    private _plife: objects.PLife[];

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
      this._player = new objects.Plane();
      this._theme = new objects.Starwar("playscreenbg");
      
      // Task: Bullet
      this._pbulletNum = 30;
      this._pbullets = new Array<objects.PBullet>();
      this._pbulletCounter = 0;
      this._pbulletInterval = true;
      this._pbulletIntervalNum = 10;
      this._pbulletIntervalCount = 0;

      // Task: Enemy
      this._tiefightersNum = 2;
      this._tiefighters = new Array<objects.Tiefighter>();

      // Task: Score and Lives
      this._lives = 5;
      this._totalLives = 5;
      this._score = 0;     
      this._livesLabel = new objects.Label("Lives: " + this._lives, "30px", "Dock51", config.Color.WHITE, 100, 10, true);       
      this._scoreLabel = new objects.Label("Score: " + this._score, "30px", "Dock51", config.Color.WHITE, 500, 10, true);
      this._plife = new Array<objects.PLife>();

      // uncomment the next line to enable gamepad support
      //this._gamepad = new managers.GamePad(this._player, 0);
      //this._mouse = new managers.Mouse(this._player);
      this._keyboard = new managers.Keyboard(this._player);

      this.Main();
    }

    public Update():number {
      // Task: Bullet
      this._pbulletIntervalCount++;
      if(this._pbulletIntervalCount > this._pbulletIntervalNum) {
        this._pbulletIntervalCount = 0;
        this._pbulletInterval = true;
      }
      
      this._player.Update();
      // uncomment the next line to enable gamepad support
      //this._gamepad.Update();
      //this._mouse.Update();
      this._keyboard.Update();

      // Check the Collision
      //this._checkCollision(this);

      if( this._keyboard.IsJump() && this._pbulletInterval == true )
      {
        this._bulletFire();
        this._pbulletInterval = false;
      }

      // Task: Bullet
      this._pbullets.forEach(bullet => {
        bullet.Update();
      });

      // Task: Enemy
      this._tiefighters.forEach(tiefighters => {
        tiefighters.Update(); 
        this._checkCollision(tiefighters);

        // Task: Bullet
        this._checkCollisionsBullet(tiefighters);
      });

      return this._currentScene; 
    }

    public Main():void {      
      this.addChild(this._theme);
      this.addChild(this._player);

      // Task: Bullet
      for (let count = 0; count < this._pbulletNum; count++) {
        this._pbullets[count] = new objects.PBullet();
        this.addChild(this._pbullets[count]);
      }

      // Task: Enemy
      for (let count = 0; count < this._tiefightersNum; count++) {
        this._tiefighters[count] = new objects.Tiefighter();
        this.addChild(this._tiefighters[count]);
      }

      // Task: Score and Lives
      this.addChild(this._livesLabel);
      this.addChild(this._scoreLabel);

      for (let count = 0; count < this._totalLives; count++) {
        this._plife[count] = new objects.PLife();
        this._plife[count].SetPosition(10 + (count*10), 10);
        this.addChild(this._plife[count]);
      }
      //this._nextButton.on("click", this._nextButtonClick);
    }

    // Task: Bullet
    private _bulletFire():void
    {
      this._pbullets[this._pbulletCounter].x = this._player.bulletSpawn.x;
      this._pbullets[this._pbulletCounter].y = this._player.bulletSpawn.y;

      this._pbulletCounter++;
      if(this._pbulletCounter >= this._pbulletNum - 1)
      {
        this._pbulletCounter = 0;
      }
    }

    // Task: Bullet
    private _checkCollisionsBullet(other:objects.GameObject)
    {
      var pos = other.position;

      for(var j = 0; j < this._pbullets.length; j++)
      {
        var pos2 = this._pbullets[j].position;

        if(Math.sqrt(Math.pow(pos.x - pos2.x, 2) + Math.pow(pos.y - pos2.y, 2)) < (this._player.halfHeight + other.halfHeight))
        {
          if(!other.isColliding)
          {
            if(other.name == "tiefighter")
            {
              this._pbullets[j].Reset(); 
              this._score += 100;
              config.Scene.HIGHSCORE = this._score;
              this._scoreLabel.text = "Score: " + this._score;
              if(this._score>=1000)
              {
              this._currentScene = config.Scene.END;              
              this.removeAllChildren(); 
              }
              other.Reset();                
            }            
          }
          other.isColliding = true;
        }
        else
        {
          other.isColliding = false;
        }
      }  
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
