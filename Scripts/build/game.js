var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var config;
(function (config) {
    // Color Presets
    var Color = /** @class */ (function () {
        function Color() {
        }
        Color.AZURE = "#F0FFFF";
        Color.BLACK = "#000000";
        Color.BLUE = "#0000FF";
        Color.BROWN = "#A52A2A";
        Color.CRIMSON = "#DC143C";
        Color.CYAN = "#00FFFF";
        Color.DARK_BLUE = "#00008B";
        Color.DARK_GREY = "#A9A9A9";
        Color.DARK_ORANGE = "#FF8C00";
        Color.DARK_RED = "#8B0000";
        Color.GOLD = "#FFD700";
        Color.GREEN = "#00FF00";
        Color.GREY = "#808080";
        Color.HOT_PINK = "#FF69B4";
        Color.INDIGO = "#4B0082";
        Color.IVORY = "#FFFFF0";
        Color.LIGHT_BLUE = "#ADD8E6";
        Color.LIGHT_GREY = "#D3D3D3";
        Color.LIGHT_PINK = "#FFB6C1";
        Color.LIGHT_YELLOW = "#FFFFE0";
        Color.MAGENTA = "#FF00FF";
        Color.MAROON = "#800000";
        Color.NAVY = "#000080";
        Color.OLIVE = "#808000";
        Color.ORANGE = "#FFA500";
        Color.PEACH = "#FFDAB9";
        Color.PINK = "#FFC0CB";
        Color.PURPLE = "#800080";
        Color.RED = "#FF0000";
        Color.SILVER = "#C0C0C0";
        Color.TEAL = "#008080";
        Color.VIOLET = "#EE82EE";
        Color.WHITE = "#FFFFFF";
        Color.YELLOW = "#FFFF00";
        return Color;
    }());
    config.Color = Color;
})(config || (config = {}));
var config;
(function (config) {
    var Gamepad;
    (function (Gamepad) {
        Gamepad[Gamepad["HORIZONTAL"] = 0] = "HORIZONTAL";
        Gamepad[Gamepad["VERTICAL"] = 1] = "VERTICAL";
        Gamepad[Gamepad["ROTATION"] = 2] = "ROTATION";
    })(Gamepad = config.Gamepad || (config.Gamepad = {}));
})(config || (config = {}));
var config;
(function (config) {
    var Key = /** @class */ (function () {
        function Key() {
        }
        // Keyboard values
        Key.A = 65;
        Key.CTRL = 17;
        Key.D = 68;
        Key.DOWN_ARROW = 40;
        Key.ESCAPE = 27;
        Key.LEFT_ARROW = 37;
        Key.RIGHT_ARROW = 39;
        Key.S = 83;
        Key.SHIFT = 16;
        Key.SPACEBAR = 32;
        Key.UP_ARROW = 38;
        Key.W = 87;
        return Key;
    }());
    config.Key = Key;
})(config || (config = {}));
var config;
(function (config) {
    // Scene Presets
    var Scene = /** @class */ (function () {
        function Scene() {
        }
        Scene.START = 0;
        Scene.PLAY = 1;
        Scene.END = 2;
        Scene.HIGHSCORE = -1;
        return Scene;
    }());
    config.Scene = Scene;
})(config || (config = {}));
var config;
(function (config) {
    // Screen Size Configuration
    var Screen = /** @class */ (function () {
        function Screen() {
        }
        Screen.WIDTH = 640;
        Screen.HEIGHT = 480;
        Screen.HALF_WIDTH = Screen.WIDTH * 0.5;
        Screen.HALF_HEIGHT = Screen.HEIGHT * 0.5;
        return Screen;
    }());
    config.Screen = Screen;
})(config || (config = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
//IIFE to encapsulate game
(function () {
    // game variables
    var assetManager;
    var currentScene;
    var currentState;
    var debugCanvas;
    var gameCanvas;
    var height = config.Screen.HEIGHT;
    var stage;
    var width = config.Screen.WIDTH;
    var stats;
    function SetupStats() {
        stats = new Stats();
        stats.showPanel(0);
        document.body.appendChild(stats.dom);
    }
    // Initializes game variables
    function Init() {
        console.log("Initialization");
        SetupStats();
        gameCanvas = document.getElementById("game");
        debugCanvas = document.getElementById("debug");
        gameCanvas.setAttribute("width", width.toString());
        gameCanvas.setAttribute("height", height.toString());
        debugCanvas.setAttribute("width", width.toString());
        debugCanvas.setAttribute("height", height.toString());
        // set global game object variables
        objects.Game.assetManager.on("complete", Start);
    }
    // Starts game
    function Start() {
        console.log("Start");
        stage = new createjs.Stage(gameCanvas);
        objects.Game.stage = stage; // save the stage to the global game object
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        currentState = config.Scene.START;
        Main();
    }
    // Main Game Loop
    function Update() {
        stats.begin();
        var newState = currentScene.Update();
        if (newState != currentState) {
            currentState = newState;
            Main();
        }
        stats.end();
        stage.update();
    }
    function Main() {
        console.log("Main FSM");
        stage.removeAllChildren();
        switch (currentState) {
            case config.Scene.START:
                currentScene = new scenes.Start(currentState);
                break;
            case config.Scene.PLAY:
                currentScene = new scenes.Play(currentState);
                break;
            case config.Scene.END:
                currentScene = new scenes.End(currentState);
                break;
        }
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
var managers;
(function (managers) {
    var assetManifest = [
        { id: "backButton", src: "./Assets/images/backButton.png" },
        { id: "nextButton", src: "./Assets/images/nextButton.png" },
        { id: "restartButton", src: "./Assets/images/restart.png" },
        { id: "exitButton", src: "./Assets/images/exit1.png" },
        { id: "startButton", src: "./Assets/images/start1.png" },
        { id: "playscreenbg", src: "./Assets/images/playbg.jpg" },
        { id: "starwar", src: "./Assets/images/bg.png" },
        { id: "plane", src: "./Assets/images/xwing.png" },
        { id: "pbullet", src: "./Assets/images/bullet.png" },
        { id: "plife", src: "./Assets/images/white-heart-md.png" },
        { id: "tiefighter", src: "./Assets/images/tiefighter.png" },
        { id: "milleniumFalcon", src: "./Assets/images/milleniumFalcon.png" },
        { id: "audioStartEnd", src: "./Assets/audio/starwars_theme.mp3" }
    ];
    var AssetManager = /** @class */ (function (_super) {
        __extends(AssetManager, _super);
        function AssetManager() {
            var _this = _super.call(this) || this;
            _this.manifest = new Array();
            _this.manifest = assetManifest;
            _this.installPlugin(createjs.Sound);
            _this.loadManifest(_this.manifest);
            return _this;
        }
        AssetManager.prototype.addItem = function (id, src) {
            this.manifest.push({ id: id, src: src });
            this.loadManifest(this.manifest);
        };
        return AssetManager;
    }(createjs.LoadQueue));
    managers.AssetManager = AssetManager;
})(managers || (managers = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
var managers;
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
(function (managers) {
    var GamePad = /** @class */ (function () {
        // CONSTRUCTORS
        function GamePad(player, gamepadIndex) {
            this.axis = new Array();
            this.direction = 0;
            this.player = player;
            this._gamepadIndex = gamepadIndex;
        }
        GamePad.prototype.GetInput = function () {
            this._gamepad = window.navigator.getGamepads()[this._gamepadIndex];
            if (this._gamepad) {
                // check Buttons
                for (var button = 0; button < this._gamepad.buttons.length; button++) {
                    if (this._gamepad.buttons[button].pressed) {
                        console.log("button " + button + " pressed");
                    }
                }
                // check Axes
                for (var index = 0; index < this._gamepad.axes.length; index++) {
                    if ((this._gamepad.axes[index] > 0.2) || (this._gamepad.axes[index] < -0.2)) {
                        this.axis[index] = this._gamepad.axes[index];
                        /*
                        if((index == 1) && (this.axis[index] > 0)) {
                          this.axis[index] = 0; // don't allow backward movement
                        }
                        */
                    }
                    else if ((this._gamepad.axes[index] > -0.2) && (this._gamepad.axes[index] < 0.2)) {
                        this.axis[index] = 0;
                    }
                } // end check Axes
            } // end check if gamepad is connected
        };
        GamePad.prototype.MovePlayer = function () {
            // correct direction
            var newDirection = 90 - this.player.rotation;
            this.direction = newDirection;
            if (newDirection > 360) {
                this.direction -= 360;
            }
            if (newDirection < 0) {
                this.direction += 360;
            }
            // forward and back movement
            this.player.x -= this.axis[config.Gamepad.VERTICAL] * 5 * Math.cos(this.direction * (Math.PI / 180));
            this.player.y += this.axis[config.Gamepad.VERTICAL] * 5 * Math.sin(this.direction * (Math.PI / 180));
            // left and right movement
            this.player.x += this.axis[config.Gamepad.HORIZONTAL] * 2 * Math.sin(this.direction * (Math.PI / 180));
            this.player.y += this.axis[config.Gamepad.HORIZONTAL] * 2 * Math.cos(this.direction * (Math.PI / 180));
            // change direction
            this.player.rotation += this.axis[config.Gamepad.ROTATION] * 2;
        };
        GamePad.prototype.Update = function () {
            this.GetInput();
            this.MovePlayer();
        };
        return GamePad;
    }());
    managers.GamePad = GamePad;
})(managers || (managers = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
var managers;
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
(function (managers) {
    // Keyboard Class +++++++++++++++
    var Keyboard = /** @class */ (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++
        function Keyboard(player) {
            this.enabled = false;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
            this.player = player;
        }
        // PUBLIC METHODS
        Keyboard.prototype.onKeyDown = function (event) {
            switch (event.keyCode) {
                case config.Key.UP_ARROW:
                case config.Key.W:
                    this.moveForward = true;
                    break;
                case config.Key.LEFT_ARROW:
                case config.Key.A:
                    this.moveLeft = true;
                    break;
                case config.Key.DOWN_ARROW:
                case config.Key.S:
                    this.moveBackward = true;
                    break;
                case config.Key.RIGHT_ARROW:
                case config.Key.D:
                    this.moveRight = true;
                    break;
                case config.Key.SPACEBAR:
                    this.jump = true;
                    break;
                case 81:/* pause */ 
                    this.paused = (this.paused) ? false : true;
                    break;
            }
        };
        Keyboard.prototype.onKeyUp = function (event) {
            switch (event.keyCode) {
                case config.Key.UP_ARROW:
                case config.Key.W:
                    this.moveForward = false;
                    break;
                case config.Key.LEFT_ARROW:
                case config.Key.A:
                    this.moveLeft = false;
                    break;
                case config.Key.DOWN_ARROW:
                case config.Key.S:
                    this.moveBackward = false;
                    break;
                case config.Key.RIGHT_ARROW:
                case config.Key.D:
                    this.moveRight = false;
                    break;
                case config.Key.SPACEBAR:
                    this.jump = false;
                    break;
            }
        };
        Keyboard.prototype.MovePlayer = function () {
            // correct direction
            var direction = (this.player.rotation - 90) * -1;
            // uncomment the following for Regular player movement not following player's direction
            if (this.moveRight) {
                this.player.x += 5;
            }
            if (this.moveLeft) {
                this.player.x -= 5;
            }
            if (this.moveForward) {
                this.player.y -= 5;
            }
            if (this.moveBackward) {
                this.player.y += 5;
            }
            // uncomment the following lines to have the keyboard buttons follow player's direction
            if (this.moveForward) {
                this.player.x += 5 * Math.cos(direction * (Math.PI / 180.0));
                this.player.y -= 5 * Math.sin(direction * (Math.PI / 180.0));
            }
            if (this.moveBackward) {
                this.player.x -= 5 * Math.cos(direction * (Math.PI / 180.0));
                this.player.y += 5 * Math.sin(direction * (Math.PI / 180.0));
            }
            if (this.moveRight) {
                this.player.x += 2 * Math.sin(direction * (Math.PI / 180));
                this.player.y += 2 * Math.cos(direction * (Math.PI / 180));
            }
            if (this.moveLeft) {
                this.player.x -= 2 * Math.sin(direction * (Math.PI / 180));
                this.player.y -= 2 * Math.cos(direction * (Math.PI / 180));
            }
        };
        // Task: Bullet
        Keyboard.prototype.IsJump = function () {
            return this.jump;
        };
        Keyboard.prototype.Update = function () {
            this.MovePlayer();
        };
        return Keyboard;
    }());
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
var managers;
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
(function (managers) {
    // Mouse Class +++++++++++++++
    var Mouse = /** @class */ (function () {
        // CONSTRUCTOR +++++++++++++++++++++++
        function Mouse(player) {
            this.player = player;
        }
        // PUBLIC METHODS +++++++++++++++++++++
        Mouse.prototype.PlayerFollowMouse = function () {
            this._dx = objects.Game.stage.mouseX - this.player.x;
            this._dy = objects.Game.stage.mouseY - this.player.y;
            // find the angle of rotation
            this.direction = Math.atan2(this._dy, this._dx) * (180 / Math.PI) + 90;
            this.player.rotation = this.direction;
        };
        Mouse.prototype.Update = function () {
            this.PlayerFollowMouse();
        };
        return Mouse;
    }());
    managers.Mouse = Mouse;
})(managers || (managers = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
var objects;
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
(function (objects) {
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button(buttonName, x, y, isCentered) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, objects.Game.assetManager.getResult(buttonName)) || this;
            if (isCentered) {
                _this.regX = _this.getBounds().width * 0.5;
                _this.regY = _this.getBounds().height * 0.5;
            }
            _this.x = x;
            _this.y = y;
            _this.on("mouseover", _this._Over);
            _this.on("mouseout", _this._Out);
            return _this;
        }
        // PRIVATE METHODS
        Button.prototype._Over = function (event) {
            this.alpha = 0.8;
        };
        Button.prototype._Out = function (event) {
            this.alpha = 1.0;
        };
        return Button;
    }(createjs.Bitmap));
    objects.Button = Button;
})(objects || (objects = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
var objects;
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
(function (objects) {
    var Game = /** @class */ (function () {
        function Game() {
        }
        Game.assetManager = new managers.AssetManager();
        return Game;
    }());
    objects.Game = Game;
})(objects || (objects = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
var objects;
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
(function (objects) {
    var GameObject = /** @class */ (function (_super) {
        __extends(GameObject, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTORS
        function GameObject(imageString) {
            var _this = _super.call(this, objects.Game.assetManager.getResult(imageString)) || this;
            _this.name = imageString;
            _this._initialize();
            return _this;
        }
        // PROTECTED METHODS
        GameObject.prototype._initialize = function () {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfWidth = this.width * 0.5;
            this.halfHeight = this.height * 0.5;
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.position = new createjs.Point(this.x, this.y);
            this.isColliding = false;
        };
        return GameObject;
    }(createjs.Bitmap));
    objects.GameObject = GameObject;
})(objects || (objects = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
var objects;
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
(function (objects) {
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        function Label(text, fontSize, fontFamily, color, x, y, isCentered) {
            if (fontSize === void 0) { fontSize = "40px"; }
            if (fontFamily === void 0) { fontFamily = "Consolas"; }
            if (color === void 0) { color = "#000000"; }
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (isCentered === void 0) { isCentered = false; }
            var _this = _super.call(this, text, fontSize + " " + fontFamily, color) || this;
            if (isCentered) {
                _this.regX = _this.getMeasuredWidth() * 0.5;
                _this.regY = _this.getMeasuredHeight() * 0.5;
            }
            _this.x = x;
            _this.y = y;
            return _this;
        }
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
var objects;
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
(function (objects) {
    var MilleniumFalcon = /** @class */ (function (_super) {
        __extends(MilleniumFalcon, _super);
        // PRIVATE INSTANCE VARIABLES
        // PUBLIC PROPERTIES
        // CONSTRUCTORS
        function MilleniumFalcon() {
            var _this = _super.call(this, "milleniumFalcon") || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        MilleniumFalcon.prototype._reset = function () {
            this.y = -this.height;
            this.x = (Math.random() * (640 - this.width)) + this.halfWidth;
            this.verticalSpeed = (Math.random() * 5) + 5;
            this.horizontalSpeed = (Math.random() * 4) - 2;
        };
        MilleniumFalcon.prototype._checkBounds = function () {
            if (this.y >= 600 + this.height) {
                this._reset();
            }
        };
        // PUBLIC METHODS
        MilleniumFalcon.prototype.Start = function () {
            this._reset();
        };
        MilleniumFalcon.prototype._updatePosition = function () {
            if (config.Screen.HALF_HEIGHT > this.y) {
                this.y += this.verticalSpeed;
                this.x += this.horizontalSpeed;
                this.position.x = this.x;
                this.position.y = this.y;
            }
            else {
                this.y -= this.verticalSpeed;
                this.x += this.horizontalSpeed;
                this.position.x = this.x;
                this.position.y = this.y;
            }
        };
        MilleniumFalcon.prototype.Update = function () {
            this._updatePosition();
            this._checkBounds();
        };
        MilleniumFalcon.prototype.Reset = function () {
            this._reset();
        };
        return MilleniumFalcon;
    }(objects.GameObject));
    objects.MilleniumFalcon = MilleniumFalcon;
})(objects || (objects = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
var objects;
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
(function (objects) {
    var PBullet = /** @class */ (function (_super) {
        __extends(PBullet, _super);
        // PRIVATE INSTANCE VARIABLES
        // PUBLIC PROPERTIES
        // CONSTRUCTORS
        function PBullet() {
            var _this = _super.call(this, "pbullet") || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        PBullet.prototype._reset = function () {
            this.y = 1000;
            this.x = 1000;
        };
        PBullet.prototype._checkBounds = function () {
            if (this.y <= 0 + this.height) {
                this._reset();
            }
        };
        PBullet.prototype._updatePosition = function () {
            this.y += this.verticalSpeed;
            this.position.x = this.x;
            this.position.y = this.y;
        };
        // PUBLIC METHODS
        PBullet.prototype.Start = function () {
            this.verticalSpeed = -10;
            this._reset();
        };
        PBullet.prototype.Reset = function () {
            this._reset();
        };
        PBullet.prototype.Update = function () {
            if (this.y > 0) {
                this._updatePosition();
                this._checkBounds();
            }
        };
        return PBullet;
    }(objects.GameObject));
    objects.PBullet = PBullet;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTORS
        function Plane() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Plane.prototype._checkBounds = function () {
            if (this.x >= config.Screen.WIDTH - this.halfWidth) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }
            if (this.x <= this.halfWidth) {
                this.x = this.halfWidth;
            }
            if (this.y >= config.Screen.HEIGHT - this.halfHeight) {
                this.y = config.Screen.HEIGHT - this.halfHeight;
            }
            if (this.y <= this.halfHeight) {
                this.y = this.halfHeight;
            }
        };
        // PUBLIC METHODS
        Plane.prototype.Start = function () {
            this.x = 320;
            this.y = 430;
            this.bulletSpawn = new createjs.Point(this.y - 35, this.x);
        };
        Plane.prototype.Update = function () {
            this.bulletSpawn.x = this.x;
            this.bulletSpawn.y = this.y - 35;
            this._checkBounds();
        };
        Plane.prototype.Reset = function () {
        };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
var objects;
(function (objects) {
    var PLife = /** @class */ (function (_super) {
        __extends(PLife, _super);
        // PRIVATE INSTANCE VARIABLES
        // PUBLIC PROPERTIES
        // CONSTRUCTORS
        function PLife() {
            var _this = _super.call(this, "plife") || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS        
        // PUBLIC METHODS
        PLife.prototype.Start = function () {
        };
        PLife.prototype.Reset = function () {
            this.x = 1000;
            this.y = 1000;
        };
        PLife.prototype.Update = function () {
        };
        PLife.prototype.SetPosition = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        return PLife;
    }(objects.GameObject));
    objects.PLife = PLife;
})(objects || (objects = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 500 power(scores) to win the game and save Millennium Falcon is in Play Level*/
var objects;
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 500 power(scores) to win the game and save Millennium Falcon is in Play Level*/
(function (objects) {
    var Scene = /** @class */ (function (_super) {
        __extends(Scene, _super);
        // PUBLIC PROPERTIES
        // CONSTRUCTORS
        function Scene() {
            return _super.call(this) || this;
        }
        // PUBLIC METHODS
        /**
         * This method is used to setup scene objects
         *
         * @method Start
         * @memberof Scene
         * @returns {void}
         */
        Scene.prototype.Start = function () {
        };
        /**
         * This method updates components of the scene
         *
         * @method Update
         * @returns {number}
         * @memberof Scene
         */
        Scene.prototype.Update = function () {
            return 0;
        };
        /**
         * This method is the Main method of the scene where all the action happens
         *
         * @method Main
         * @returns {void}
         * @memberof Scene
         */
        Scene.prototype.Main = function () {
        };
        return Scene;
    }(createjs.Container));
    objects.Scene = Scene;
})(objects || (objects = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
var objects;
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
(function (objects) {
    var Starwar = /** @class */ (function (_super) {
        __extends(Starwar, _super);
        // PRIVATE INSTANCE VARIABLES
        // PUBLIC PROPERTIES
        // CONSTRUCTORS
        function Starwar(name) {
            return _super.call(this, objects.Game.assetManager.getResult(name)) || this;
        }
        return Starwar;
    }(createjs.Bitmap));
    objects.Starwar = Starwar;
})(objects || (objects = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
var objects;
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
(function (objects) {
    var Tiefighter = /** @class */ (function (_super) {
        __extends(Tiefighter, _super);
        // PRIVATE INSTANCE VARIABLES
        // PUBLIC PROPERTIES
        // CONSTRUCTORS
        function Tiefighter() {
            var _this = _super.call(this, "tiefighter") || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Tiefighter.prototype._reset = function () {
            this.y = -this.height;
            this.x = (Math.random() * (640 - this.width)) + this.halfWidth;
            this.verticalSpeed = (Math.random() * 5) + 5;
            this.horizontalSpeed = (Math.random() * 4) - 2;
        };
        Tiefighter.prototype._checkBounds = function () {
            if (this.y >= 600 + this.height) {
                this._reset();
            }
        };
        // PUBLIC METHODS
        Tiefighter.prototype.Start = function () {
            this._reset();
        };
        Tiefighter.prototype._updatePosition = function () {
            this.y += this.verticalSpeed;
            this.x += this.horizontalSpeed;
            this.position.x = this.x;
            this.position.y = this.y;
        };
        Tiefighter.prototype.Update = function () {
            this._updatePosition();
            this._checkBounds();
        };
        Tiefighter.prototype.Reset = function () {
            this._reset();
        };
        return Tiefighter;
    }(objects.GameObject));
    objects.Tiefighter = Tiefighter;
})(objects || (objects = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
var scenes;
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
(function (scenes) {
    var End = /** @class */ (function (_super) {
        __extends(End, _super);
        //CONSTRUCTORS
        function End(currentScene) {
            var _this = _super.call(this) || this;
            _this._currentScene = currentScene;
            // Register Button Event Handlers
            _this._backButtonClick = _this._backButtonClick.bind(_this);
            _this._sound = createjs.Sound.play("audioStartEnd");
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        End.prototype._backButtonClick = function (event) {
            this._currentScene = config.Scene.PLAY;
            this._sound.stop();
            this.removeAllChildren();
        };
        // PUBLIC METHODS
        End.prototype.Start = function () {
            this._titleLabel = new objects.Label("GAME OVER", "60px", "StarJedi", config.Color.WHITE, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT - 140, true);
            this._backButton = new objects.Button("restartButton", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT + 70, true);
            this._highScoreLabel = new objects.Label("HIGH SCORE: " + 400, "25px", "Dock51", config.Color.WHITE, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT - 60, true);
            this._theme = new objects.Starwar("starwar");
            if (config.Scene.HIGHSCORE >= 1000) {
                this._titleLabel = new objects.Label("YOU WON", "60px", "StarJedi", config.Color.WHITE, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT - 140, true);
                this._highScoreLabel = new objects.Label("HIGH SCORE: " + config.Scene.HIGHSCORE, "25px", "Dock51", config.Color.WHITE, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT - 60, true);
            }
            if (config.Scene.HIGHSCORE < 1000) {
                this._highScoreLabel = new objects.Label("HIGH SCORE: " + config.Scene.HIGHSCORE, "25px", "Dock51", config.Color.WHITE, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT - 60, true);
            }
            this.Main();
        };
        End.prototype.Update = function () {
            return this._currentScene;
        };
        End.prototype.Main = function () {
            this.addChild(this._theme);
            this.addChild(this._titleLabel);
            this.addChild(this._highScoreLabel);
            this.addChild(this._backButton);
            this._backButton.on("click", this._backButtonClick);
        };
        return End;
    }(objects.Scene));
    scenes.End = End;
})(scenes || (scenes = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
var scenes;
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        //CONSTRUCTORS
        function Play(currentScene) {
            var _this = _super.call(this) || this;
            _this._currentScene = currentScene;
            // register button event handlers
            _this._nextButtonClick = _this._nextButtonClick.bind(_this);
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Play.prototype._nextButtonClick = function (event) {
            this._currentScene = config.Scene.END;
            this.removeAllChildren();
        };
        // PUBLIC METHODS
        Play.prototype.Start = function () {
            this._player = new objects.Plane();
            this._theme = new objects.Starwar("playscreenbg");
            // Task: Bullet
            this._pbulletNum = 30;
            this._pbullets = new Array();
            this._pbulletCounter = 0;
            this._pbulletInterval = true;
            this._pbulletIntervalNum = 10;
            this._pbulletIntervalCount = 0;
            // Task: Enemy
            this._tiefightersNum = 2;
            this._tiefighters = new Array();
            // Task: Score and Lives
            this._lives = 5;
            this._totalLives = 5;
            this._score = 0;
            this._livesLabel = new objects.Label("" + this._lives, "30px", "Dock51", config.Color.WHITE, 15, 14, true);
            this._scoreLabel = new objects.Label("Score: " + this._score, "30px", "Dock51", config.Color.WHITE, 500, 10, true);
            this._plife = new Array();
            // uncomment the next line to enable gamepad support
            //this._gamepad = new managers.GamePad(this._player, 0);
            //this._mouse = new managers.Mouse(this._player);
            this._keyboard = new managers.Keyboard(this._player);
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            // Task: Bullet
            this._pbulletIntervalCount++;
            if (this._pbulletIntervalCount > this._pbulletIntervalNum) {
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
            if (this._keyboard.IsJump() && this._pbulletInterval == true) {
                this._bulletFire();
                this._pbulletInterval = false;
            }
            // Task: Bullet
            this._pbullets.forEach(function (bullet) {
                bullet.Update();
            });
            // Task: Enemy
            this._tiefighters.forEach(function (tiefighters) {
                tiefighters.Update();
                _this._checkCollision(tiefighters);
                // Task: Bullet
                _this._checkCollisionsBullet(tiefighters);
            });
            return this._currentScene;
        };
        Play.prototype.Main = function () {
            this.addChild(this._theme);
            this.addChild(this._player);
            // Task: Bullet
            for (var count = 0; count < this._pbulletNum; count++) {
                this._pbullets[count] = new objects.PBullet();
                this.addChild(this._pbullets[count]);
            }
            // Task: Enemy
            for (var count = 0; count < this._tiefightersNum; count++) {
                this._tiefighters[count] = new objects.Tiefighter();
                this.addChild(this._tiefighters[count]);
            }
            // Task: Score and Lives
            //this.addChild(this._livesLabel);
            this.addChild(this._scoreLabel);
            for (var count = 0; count < this._totalLives; count++) {
                this._plife[count] = new objects.PLife();
                this._plife[count].SetPosition(35 + (count * 30), 15);
                this.addChild(this._plife[count]);
            }
            //this._nextButton.on("click", this._nextButtonClick);
        };
        // Task: Bullet
        Play.prototype._bulletFire = function () {
            this._pbullets[this._pbulletCounter].x = this._player.bulletSpawn.x;
            this._pbullets[this._pbulletCounter].y = this._player.bulletSpawn.y;
            this._pbulletCounter++;
            if (this._pbulletCounter >= this._pbulletNum - 1) {
                this._pbulletCounter = 0;
            }
        };
        // Task: Bullet
        Play.prototype._checkCollisionsBullet = function (other) {
            var pos = other.position;
            for (var j = 0; j < this._pbullets.length; j++) {
                var pos2 = this._pbullets[j].position;
                if (Math.sqrt(Math.pow(pos.x - pos2.x, 2) + Math.pow(pos.y - pos2.y, 2)) < (this._player.halfHeight + other.halfHeight)) {
                    if (!other.isColliding) {
                        if (other.name == "tiefighter") {
                            this._pbullets[j].Reset();
                            this._score += 100;
                            config.Scene.HIGHSCORE = this._score;
                            this._scoreLabel.text = "Score: " + this._score;
                            if (this._score >= 1000) {
                                this._currentScene = config.Scene.END;
                                this.removeAllChildren();
                            }
                            other.Reset();
                        }
                    }
                    other.isColliding = true;
                }
                else {
                    other.isColliding = false;
                }
            }
        };
        Play.prototype._checkCollision = function (other) {
            var P1 = new createjs.Point(this._player.x, this._player.y);
            var P2 = other.position;
            if (Math.sqrt(Math.pow(P2.x - P1.x, 2) + Math.pow(P2.y - P1.y, 2)) < (this._player.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    if (other.name == "tiefighter") {
                        this._lives -= 1;
                        this._plife[(this._lives)].Reset();
                        other.Reset();
                        // Task: Score and Lives
                        if (this._lives <= 0) {
                            this._currentScene = config.Scene.END;
                            this.removeAllChildren();
                        }
                        this._livesLabel.text = "" + this._lives;
                    }
                    other.isColliding = true;
                }
            }
            else {
                other.isColliding = false;
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
var scenes;
/*Team Name :
Amandeep K Aujla(300823938)
Sangbeom Yi (300857600)
Taranjit Kaur (300854507)

Description:This is a 2D top down game Star Wars game. This game is story-driven Star Wars saga. TIE fighter is trying to destroy Millennium Falcon, the spaceship and XWing aim is to save starship. Xwing is fighting and try to kill TIE fighter to save starship.
Version 1
Xwing just need to collect 1000 power(scores) to win the game and save Millennium Falcon is in Play Level*/
(function (scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        //CONSTRUCTORS
        function Start(currentScene) {
            var _this = _super.call(this) || this;
            _this._currentScene = currentScene;
            _this._sound = createjs.Sound.play("audioStartEnd");
            // register button event handlers
            _this._startButtonClick = _this._startButtonClick.bind(_this);
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        Start.prototype._startButtonClick = function (event) {
            this._currentScene = config.Scene.PLAY;
            this._sound.stop();
            this.removeAllChildren();
        };
        // PUBLIC METHODS
        Start.prototype.Start = function () {
            console.log("Start Scene");
            this._startLabel = new objects.Label("STAR WARS", "60px", "StarJedi", config.Color.WHITE, config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT - 140, true);
            this._startButton = new objects.Button("startButton", config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT + 70, true);
            this._theme = new objects.Starwar("starwar");
            this.Main();
        };
        Start.prototype.Update = function () {
            return this._currentScene;
        };
        Start.prototype.Main = function () {
            this.addChild(this._theme);
            this.addChild(this._startLabel);
            this.addChild(this._startButton);
            this._startButton.on("click", this._startButtonClick);
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=game.js.map