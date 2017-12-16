/*Team Name : 
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship. 
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/

module managers {
  export interface AssetItem {
    id: string;
    src: string;
  }

  let assetManifest = [
    {id: "backButton", src: "./Assets/images/backButton.png"},
    {id: "nextButton", src: "./Assets/images/nextButton.png"},

    {id: "restartButton", src: "./Assets/images/restart1.png"},
    {id: "exitButton", src: "./Assets/images/exit1.png"},
    {id: "startButton", src: "./Assets/images/start1.png"},
    {id: "playscreenbg", src: "./Assets/images/playbg.jpg"},
    {id: "starwar", src: "./Assets/images/bg.png"},
    {id: "plane", src: "./Assets/images/xwing.png"},    
    {id: "pbullet", src: "./Assets/images/bullet.png"},
    {id: "plife", src: "./Assets/images/white-heart-md.png"},
    {id: "tiefighter", src: "./Assets/images/tiefighter.png"},
    {id: "audioStartEnd", src: "./Assets/audio/starwars_theme.mp3"}   
  ]

  export class AssetManager extends createjs.LoadQueue {
    public manifest: AssetItem[] = new Array<AssetItem>();
    constructor() {
      super();
      this.manifest = assetManifest;
      this.installPlugin(createjs.Sound);
      this.loadManifest(this.manifest);
    }

    public addItem(id:string, src:string):void {
      this.manifest.push({id, src});
      this.loadManifest(this.manifest);
    }
  }
}
