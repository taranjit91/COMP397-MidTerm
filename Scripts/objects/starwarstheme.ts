module objects {
    export class Starwar extends createjs.Bitmap {
      // PRIVATE INSTANCE VARIABLES
      
      // PUBLIC PROPERTIES
      // CONSTRUCTORS
      constructor(name: string) {
        super(objects.Game.assetManager.getResult(name));
       
      }
      

    }
  }