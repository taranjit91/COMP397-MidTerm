module managers {
  export interface AssetItem {
    id: string;
    src: string;
  }

  let assetManifest = [
    {id: "backButton", src: "./Assets/images/backButton.png"},
    {id: "nextButton", src: "./Assets/images/nextButton.png"},

    {id: "restartButton", src: "./Assets/images/restart.png"},
    {id: "exitButton", src: "./Assets/images/exit1.png"},
    {id: "startButton", src: "./Assets/images/start1.png"},
    {id: "playscreenbg", src: "./Assets/images/playbg.jpg"},
    {id: "starwar", src: "./Assets/images/bg.png"},
    {id: "plane", src: "./Assets/images/xwing.png"},    
    {id: "pbullet", src: "./Assets/images/bullet.png"},
    {id: "plife", src: "./Assets/images/bullet.png"},
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
