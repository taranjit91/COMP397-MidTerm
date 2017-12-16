/*Team Name : 
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship. 
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/

module objects {
    export class PBullet extends objects.GameObject {
        // PRIVATE INSTANCE VARIABLES
  
        // PUBLIC PROPERTIES
    
        // CONSTRUCTORS
        constructor()
        {
            super("pbullet");        
            this.Start();
        }
        
        // PRIVATE METHODS
        private _reset(): void
        {
            this.y = 1000;
            this.x = 1000;
        }
    
        private _checkBounds(): void
        {
            if (this.y <= 0 + this.height) {
                this._reset();
            }
        }

        private _updatePosition(): void
        {
            this.y += this.verticalSpeed;
            this.position.x = this.x;
            this.position.y = this.y;
        }

        // PUBLIC METHODS
        public Start():void
        {
            this.verticalSpeed = -10;
            this._reset();
        }

        public Reset():void
        {
            this._reset();
        }

        public Update():void
        {
            if(this.y > 0)
            {
                this._updatePosition();
                this._checkBounds();
            }
        }
    }
}