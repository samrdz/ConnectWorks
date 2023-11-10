var count1 = 0;
class Question1 extends Phaser.Scene {
    constructor() {
        super('Question1');
    }
    preload()
    {
    	//load images or sounds
        //this.load.audio("cat",["audio/meow.mp3","audio/meow.ogg"]);
        this.load.image("background", "images/Title/background.jpeg")
        //this.load.image("start_button", "images/Title/start_box.png")
        this.load.bitmapFont("cc", "fonts/carrier_command.png", "fonts/carrier_command.xml")
        this.load.image("answerbox", "images/P1/answerbox.png") // size: 610x220
        this.load.image("questionbox", "images/P1/questionbox.png") // size: 610x220
        this.load.image("menubox", "images/P1/menubox.png") // size: 610x220
        this.load.image("longbox", "images/P1/longpinktextbox_10px.png");



    }
    create() {
        //define our objects
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller()
        model.score = 0;
        count1 = 0;
        

        //model.score=100;
        //console.log("random2!");

        this.Background=this.add.image(0,0,"background").setOrigin(0,0);


        this.sb=new ScoreBox({scene:this});
        this.sb.x=1255;
        this.sb.y=45;
        //this.Start_button=this.add.image(game.config.width/2,(game.config.height/5) * 4,"start_button").setOrigin(.5,.5);
        //this.Start_button.scaleX = 2;
        //this.Start_button.scaleY = this.Start_button.scaleX;

        //this.Game_title=this.add.image(game.config.width/2,game.config.height/5, "game_title").setOrigin(.5,.5);
        //this.Textbox=this.add.image(game.config.width/2,game.config.height/2, "textbox")
        //var textbox = new Textbox({scene:this});
        //textbox.back.setOrigin(0,0);

        /*
        this.Textbox1=this.add.image(20,0,"textbox").setOrigin(0,0);
        this.Textbox2=this.add.image(650,0,"textbox").setOrigin(0,0);
        this.Textbox2=this.add.image(335,240,"textbox").setOrigin(0,0);
        */

        //this.Textbox1=this.add.image(20,game.config.height - 450,"textbox").setOrigin(0,0);
        //this.Textbox2=this.add.image(650,game.config.height - 450,"textbox").setOrigin(0,0);
        //this.Textbox3=this.add.image(335,game.config.height - 230,"textbox").setOrigin(0,0);
        var answerbox1 = new Answerbox({scene:this, key:"answerbox", event:"button_pressed", params:"good",text:"Create a hotspot using your phone, and connect to it instead of the public wifi"});
        answerbox1.x=20;
        answerbox1.y=720-450;
        var answerbox2 = new Answerbox({scene:this, key:"answerbox", event:"button_pressed", params:"ok", text:"Connect to a Virual Private Network (VPN)"});
        answerbox2.x=650;
        answerbox2.y=game.config.height - 450;
        var answerbox3 = new Answerbox({scene:this, key:"answerbox", event:"button_pressed", params:"bad", text:"Nothing, the connection is likely already secure"});
        answerbox3.x=335;
        answerbox3.y=game.config.height - 230;
        var questionbox = new Questionbox({scene:this, key:"questionbox", text:"Before starting your work, you are craving a coffee. You head to the local Starbucks and order a coffee. When you receive the coffee, you glance at the clock and realize you have some time sensitive work to do, and you don’t have enough time to get home to work! Thankfully, you see that the Starbucks has public Wi-Fi. What should you do to ensure the safest connection?"});
        questionbox.x=245;
        questionbox.y=20;
        this.Question_num=this.add.bitmapText(25,45, 'cc', "Question 1",15);
        //var longbox1 = new Expbox({scene:this, key:"longbox", event:"button_pressed", text:"You wan to run some financial transactions, but you haven't been outside a lot and are craving a cofee. You head to starbucks and order a cofee, but you realize you are running late and need to get the financial transactions over with. You connect to the public starbucks wifi. What should you do to ensure the safest transaction?"});
        //answerbox3.x=335;
        //answerbox3.y=game.config.height - 230;
        //this.Question_num=this.add.bitmapText(1255,45, 'cc', "Score: 0",15).setOrigin(1,0)
       
        

        //this.Textbox2=this.add.image(game.config.width/2,game.config.height/2, "textbox2")

        //console.log("random3!");

        /*
        this.catSound=this.sound.add("cat");
        
        this.face = this.add.image(100, 200, "face");
        this.face.setOrigin(0,0);
        this.face.alpha=.5; //transparency
        this.face.rotation=45;//rotation
        this.face.scaleX=.5;//scale
        this.face.scaleY=.5;
        this.face.displayWidth=300;//set to actual value
        this.face.scaleY=this.face.scaleX;//make porportional
        //x and y refer to the middle of the image, 0,0 is top left
        //to center
        this.face.x = game.config.width/2;
        this.face.y = game.config.height/2;
        this.face.setInteractive();
        this.face.on('pointerdown', this.onDown,this);
        */
        emitter.on("button_pressed",this.buttonPressed2, this);
        emitter.on("continue",this.nextscreen, this);
        emitter.emit(G.SCORE_UPDATED);
    }

    
    buttonPressed2(params) {
        //this.face.alpha=1;
        //this.face.rotation+=45;
        //this.catSound.play();
        //this.
        count1++;
        if (params=="good" && count1 == 1) {
            emitter.emit(G.UP_POINTS, 100);
            var longbox1 = new Expbox({scene:this, key:"longbox", event:"continue", text:"Perfect! This is the best choice!\n\nScore + 100!\n\nIn this case, you avoid connecting to the public network at all, instead connecting to a network which only you know the password to. On most hotspots, encryption is already included, but a VPN can also be used on top to make it even more secure. The main reason this is the safest is because the network is secured with a password, so an attacker would have to first find out your password in order to access your data.\n\nAfter thinking about it for a bit, you realize that it may not be the safest thing to connect to a public netowork. Instead, you use the hotspot feature on your phone to create an access point. Here, you can change the password to something strong so even if an attacker wanted to try and get your data, they would have to guess the password. You are able to complete your business with no problems."});
            longbox1.x = 130
            longbox1.y = 65
        }
        if (params=="ok" && count1 == 1) {
            emitter.emit(G.UP_POINTS, 50);
            var longbox1 = new Expbox({scene:this, key:"longbox", event:"continue", text:"Good job! Although this is NOT the best choice, it is still a good choice!\n\nScore + 50!\n\nVPNs connect to your device through a secure private server, instead of directly connecting your device to the internet through a router / modem, which can leave your information vulnerable. While this in most cases is enough, sometimes even before you can access your VPN, the host of the network forces you into what is called a captive-portal which forces you to agree to the terms and services before being allowed to use the network. This time, even if only a couple of seconds, can leave you vulnerable. In most cases, this is likely not enough time for the attacker to access your infomration, but it is still possible.\n\nAfter thinking about it for a bit, you realize that it is probably better to connect to a VPN when connecting to the public network. Before you can turn on the VPN, the wifi forces you to agree to it's terms of service using a captive-portal. Because the router you connected to was already comprimised, the attacker was able to obtain some infromation about you. Thankfully, because it was such a short period of time, only basic information was retreieved by the attacker."});
            longbox1.x = 130
            longbox1.y = 65
        }
        if (params=="bad" && count1 == 1) {
            emitter.emit(G.UP_POINTS, 0);
            var longbox1 = new Expbox({scene:this, key:"longbox", event:"continue", text:"You chose the worst choice! This, unlike the other two options should never be done.\n\nScore + 0\n\nThis is the worst choice. Hackers have a multitude of ways they can steal your data, including a man in the middle, packet sniffing, etc. These are relatively easy to do, and can be done with free software.\n\nAfter connecting to the wifi, you think that the connection is already secure enought to use. You use the wifi fine and there seem to be no issues. A couple days later, you realize you can't login to some of your accounts! Turns out an attacker was using packet sniffing (which reads the unencrypted data packets that were sent by connecting to a public network), and scanned it for vulnerable information. Then changed the password to some of your accounts."});
            longbox1.x = 130
            longbox1.y = 65
        }

    }
    
    nextscreen(params) {
        this.scene.start("Question2");
        console.log("change scene");
    }
    

    update() {
        //constant running loop
    }
}