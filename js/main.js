var game;
var model;
var emitter;
var G;
var controller;
//var count;

window.onload=function() {
    var config = {
        type: Phaser.AUTO,
        width: 1280,
        height: 720,
        parent: 'phaser-game',
        scene: [SceneTitle,Question1,Question2,Question3,Question4,Question5,SceneEnd]
    };
    G = new Constants();
    model=new Model();
    game = new Phaser.Game(config);
    count = 0;
}
