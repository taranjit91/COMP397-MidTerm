/*Team Name : 
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship. 
Version 1
Xwing just need to collect 500 power(scores) to win the game and save Millennium Falcon is in Play Level*/

module objects {
  export abstract class Scene extends createjs.Container {
    // PRIVATE INSTANCE VARIABLES
    protected _currentScene: number;

    // PUBLIC PROPERTIES

    // CONSTRUCTORS
    constructor() {
      super();
    }

    // PUBLIC METHODS

    /**
     * This method is used to setup scene objects
     *
     * @method Start
     * @memberof Scene
     * @returns {void}
     */
    public Start():void {

    }

    /**
     * This method updates components of the scene
     *
     * @method Update
     * @returns {number}
     * @memberof Scene
     */
    public Update():number {
      return 0;
    }

    /**
     * This method is the Main method of the scene where all the action happens
     *
     * @method Main
     * @returns {void}
     * @memberof Scene
     */
    public Main():void {

    }
  }
}
