/**
 * ALGO: ceci est une classe...
 * Vous verrez ça plus tard en détail avec Rémi, pour l'instant on n'a pas trop besoin de savoir à quoi ça sert.
 */
class Tableau1 extends Phaser.Scene{
    /**
     * Précharge les assets
     */
    preload(){
        //bg 2 (tout au fond et très flou)
        this.load.image('bg2-terrain-2', 'assets/level/background-2/bg2-terrain-2.png');
        this.load.image('bg2-terrain-4', 'assets/level/background-2/bg2-terrain-4.png');
        this.load.image('bg2-terrain-1', 'assets/level/background-2/bg2-terrain-1.png');
        this.load.image('bg2-tree-2', 'assets/level/background-2/bg2-tree-2.png');
        this.load.image('bg2-tree-1', 'assets/level/background-2/bg2-tree-1.png');
        this.load.image('bg2-tree-3', 'assets/level/background-2/bg2-tree-3.png');

        //bg 1 (gris légèrement flou)
        this.load.image('bg1-terrain-3', 'assets/level/background-1/bg-terrain-3.png');
        this.load.image('bg1-terrain-1', 'assets/level/background-1/bg-terrain-1.png');
        this.load.image('bg1-tree-1', 'assets/level/background-1/bg-tree-1.png');
        this.load.image('bg1-tree-3', 'assets/level/background-1/bg-tree-3.png');
        this.load.image('bg1-tree-2', 'assets/level/background-1/bg-tree-2.png');
        this.load.image('bg1-grass-5', 'assets/level/background-1/bg-grass-5.png');
        this.load.image('bg1-wooden-bridge', 'assets/level/background-1/bg-wooden-bridge.png');
        this.load.image('bg1-terrain-4', 'assets/level/background-1/bg-terrain-4.png');


        //ground (premier plan noir)
        this.load.image('gMid', 'assets/level/ground/g-mid.png');
        this.load.image('gRight', 'assets/level/ground/g-right.png');
        this.load.image('gLeft', 'assets/level/ground/g-left.png');
        this.load.image('gTree1', 'assets/level/ground/g-tree-1.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('gTree2', 'assets/level/ground/g-tree-2.png');
        this.load.image('gWater', 'assets/level/ground/g-water.png');
        this.load.image('gWoodenBridge', 'assets/level/ground/g-wooden-bridge.png');
        this.load.image('gBox2', 'assets/level/ground/g-box-2.png');
        this.load.image('gMushroom1', 'assets/level/ground/g-mushroom1.png');
        this.load.image('gMushroom2', 'assets/level/ground/g-mushroom2.png');
        this.load.image('gVineA', 'assets/level/ground/g-vine-a.png');
        this.load.image('gVineB', 'assets/level/ground/g-vine-b.png');
        this.load.image('gVineC', 'assets/level/ground/g-vine-c.png');
        this.load.image('gStone1', 'assets/level/ground/g-stone-1.png');
        this.load.image('gStone4', 'assets/level/ground/g-stone-4.png');
        this.load.image('gStone5', 'assets/level/ground/g-stone-5.png');
        this.load.image('gGrass5', 'assets/level/ground/g-grass-5.png');
        this.load.image('gGrass4', 'assets/level/ground/g-grass-4.png');
        this.load.image('gGrass3', 'assets/level/ground/g-grass-3.png');
        this.load.image('gGrass2', 'assets/level/ground/g-grass-2.png');
        this.load.image('gGrass1', 'assets/level/ground/g-grass-1.png');
        this.load.image('gSpike1', 'assets/level/ground/g-spike-1.png');
        this.load.image('gSpike2', 'assets/level/ground/g-spike-2.png');
        this.load.image('gFellenTree1', 'assets/level/ground/g-fellen-tree-1.png');

        //zombie (premier plan noir)
        this.load.image('z4', 'assets/zombie/z4.png');
        this.load.image('z5', 'assets/zombie/z5.png');
        this.load.image('z13', 'assets/zombie/z13.png');
        this.load.image('z16', 'assets/zombie/z16.png');



        //au lieu d'écrire 5 lignes quasi identiques, on charge l'herbe avec une boucle
        // ALGO : ceci est une boucle
        for(let i=1;i<=5;i++){
            this.load.image('g-grass-'+i, 'assets/level/ground/g-grass-'+i+'.png');
        }

        //filtre film TODO élève : faire une boucle à la place des 3 lignes qui suivent
        for(let e=1;e<=3;e++){
            this.load.image('filterFilm'+e, 'assets/level/filters/bloody/frame'+ e +'.png');
        }
<<<<<<< HEAD
        //anim du petit gars
        for(let k=1;k<=10;k++) {
            this.load.image('idle' + k, 'assets/Characters/boy/boy_style_1/PNG/idle/idleBoy' + k + '.png');
        }
        //anim de l'ennemi
        for(let j=1;j<=10;j++) {
            this.load.image('idleEnnemi' + j, 'assets/Characters/enemy 1/PNG/idle/ennemiIdle' + j + '.png');
        }
        //anim des ennemies volants
        for(let u=1;u<=6;u++) {
            this.load.image('idleEnnemiB' + u, 'assets/Characters/enemy 2/PNG/idle/idleEnnemib' + u + '.png');
=======
        for(let k=1;k<=10;k++) {
            this.load.image('layer' + k, 'assets/characters/boy/boy_style_1/PNG/idle/layer-' + k + '.png');
        }
        for(let k=1;k<=8;k++) {
            this.load.image('Layer' + k, 'assets/characters/boy/boy_style_1/PNG/run/Layer-' + k + '.png');
>>>>>>> 8d2eb54362b6616323473ae88b4b29615efe6cca
        }
        //filtre rain
        for(let r=1;r<=3;r++){
            this.load.image('rain'+r, 'assets/level/weather/rain/frame'+ r +'.png');
        }
        //texture au fond  TODO élève : faire une boucle pour charger les 3 images et démontrer par la même que vous savez aller au plus simple
        for(let n=1;n<=3;n++){
            this.load.image('bg-animation'+n, 'assets/level/background-2/bg-animation-'+n+'.png');
        }
        this.load.image('bg-animation-a', 'assets/level/background-2/bg-animation/bg-animation-a.png');

    }

    /**
     * Crée la scène
     * TODO élèves : reproduire à l'identique assets/level/00-preview-example/sample1.jpg
     * TODO élèves : plus tard, continuez le décor vers la droite en vous servant des assets mis à votre disposition
     */
    create(){

        /**
         * Fond très clair avec une trame
         * @type {Phaser.GameObjects.Sprite}
         */
        let bgAnimationA=this.add.sprite(0,0, 'bg-animation-a').setOrigin(0,0);

        //--------------background 2 (tout au fond et flou)--------------------

        /**
         * contient tous les éléments du background 2 (gris clair très flou)
         * @type {Phaser.GameObjects.Container}
         * @see https://photonstorm.github.io/phaser3-docs/Phaser.GameObjects.Container.html
         */
        this.bg2Container=this.add.container(0,0);
        /**
         * Terrain dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Terrain2=this.add.image(-100,100, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2);
        /**
         * Arbre dans bg2
         * @type {Phaser.GameObjects.Image}
         */
        let bg2Tree1=this.add.image(400,-50, 'bg2-tree-1').setOrigin(0,0);
        this.bg2Container.add(bg2Tree1);
        bg2Tree1.angle=-5; //pencher l'arbre de -5 degrès
        let bg2Tree1Bis=this.add.image(150,-20, 'bg2-tree-1').setOrigin(0,0);
        this.bg2Container.add(bg2Tree1Bis);
        /**
         * Terrain à droite
         */
        let bg2Terrain2Bis=this.add.image(700,150, 'bg2-terrain-2').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain2Bis);
        /**
         * Arbre à droite
         */
        let bg2Tree3=this.add.image(720,-50, 'bg2-tree-3').setOrigin(0,0);
        this.bg2Container.add(bg2Tree3);
        bg2Tree3.angle=-10
        bg2Tree3.scale=0.8
        /**
         * Terrain à droite sample 2
         */
        let bg2Terrain4=this.add.image(900,80, 'bg2-terrain-4').setOrigin(0,0);
        this.bg2Container.add(bg2Terrain4);
        /**
         * Arbre à droite sample 2
         */
        let bg2Tree1Alpha=this.add.image(1080,-50, 'bg2-tree-1').setOrigin(0,0);
        this.bg2Container.add(bg2Tree1Alpha);
        //--------------background 1 (gris) --------------------

        /**
         * contient tous les éléments du background 1 (gris)
         * @type {Phaser.GameObjects.Container}
         */
        this.bg1Container=this.add.container(0,0);
        /**
         * Terrain
         * @type {Phaser.GameObjects.Image}
         */
        let bg1Terrain3=this.add.image(-410,180, 'bg1-terrain-3').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain3);
        /**
         * Terrain à droite
         */
        let bg1Terrain1=this.add.image(650,300, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1);
        bg1Terrain1.scale = 0.6
        /**
         * Terrain sample 2 à gauche
         */
        let bg1Terrain1Bis=this.add.image(650,200, 'bg1-terrain-1').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain1Bis);
        bg1Terrain1Bis.scale = 0.7
        /**
         * Terrain sample 2 à droite
         */
        let bg1Terrain4=this.add.image(1180,150, 'bg1-terrain-4').setOrigin(0,0);
        this.bg1Container.add(bg1Terrain4);
        bg1Terrain1Bis.scale = 0.7
        /**
         * Les 2 arbres à droite sur le terrain sample 2
         */
        let bg1Tree2Alpha=this.add.image(1400,-50, 'bg1-tree-2').setOrigin(0,0);
        this.bg1Container.add(bg1Tree2Alpha);
        bg1Tree2Alpha.scale=0.8
        /**
         * Arbre sample 2 à gauche
         */
        let bg1Tree3Bis=this.add.image(870,-30, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree3Bis);
        bg1Tree3Bis.scale=0.6
        /**
         * Arbre à gauche
         */
        let bg1Tree1=this.add.image(50,-50, 'bg1-tree-1').setOrigin(0,0);
        this.bg1Container.add(bg1Tree1);
        bg1Tree1.scale = 0.7
        /**
         * Arbre à gauche 2
         */
        let bg1Tree3=this.add.image(200,-80, 'bg1-tree-3').setOrigin(0,0);
        this.bg1Container.add(bg1Tree3);
        bg1Tree3.scale = 0.6
        /**
         * Arbre à droite
         */
        let bg1Tree2=this.add.image(700,-20, 'bg1-tree-2').setOrigin(0,0);
        this.bg1Container.add(bg1Tree2);
        bg1Tree3.scale = 0.6
        /**
         * Sample 2 pont
         */
        let bg1WoodenBridge=this.add.image(1000,185, 'bg1-wooden-bridge').setOrigin(0,0);
        this.bg1Container.add(bg1WoodenBridge);

        //-------------ground (premier plan noir)---------------------------

        /**
         * contient tous les éléments du premier plan (noir)
         * @type {Phaser.GameObjects.Container}
         */
        this.groundContainer=this.add.container(0,0);
        /**
         * Arbre
         * @type {Phaser.GameObjects.Image}
         */
        let tree2Bis=this.add.image(420,390, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree2Bis);
        tree2Bis.scale = 0.7
        /**
         * Arbre à gauche
         */
        let tree2Alt=this.add.image(50,390, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree2Alt);
        tree2Alt.scale = 1
        /**
         * Spike derrière la flotte
         */
        let spike2=this.add.image(600,550, 'gSpike2').setOrigin(0,1);
        this.groundContainer.add(spike2);
        spike2.scale=1.4
        let spike1=this.add.image(800,550, 'gSpike1').setOrigin(0,1);
        this.groundContainer.add(spike1);
        spike2.scale=1.8

        /**
         * Rocher près du pont
         */
        let stone1=this.add.image(480,360, 'gStone1').setOrigin(0,1);
        this.groundContainer.add(stone1);
        stone1.scale = 1.4
        /**
         * Arbre à droite
         */
        let tree1=this.add.image(1050,440, 'gTree1').setOrigin(0,1);
        this.groundContainer.add(tree1);
        tree1.scale = 1
        tree1.angle = -12
        tree1.flipX=true
        /**
         * Rocher à droite
         */
        let stone4=this.add.image(980,390, 'gStone4').setOrigin(0,1);
        this.groundContainer.add(stone4);
        stone1.scale = 1.1
        /**
         * Liane à gauche
         */
        let vineC=this.add.image(750,40, 'gVineC').setOrigin(0,1);
        this.groundContainer.add(vineC);
        let vineA=this.add.image(752,80, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vineA);
        let vineC2=this.add.image(750,120, 'gVineC').setOrigin(0,1);
        this.groundContainer.add(vineC2);
        let vineA2=this.add.image(745,160, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vineA2);
        vineA2.angle=5
        let vineA3=this.add.image(745,200, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vineA3);
        /**
         * Liane à droite
         */
        let vineA4=this.add.image(800,40, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vineA4);
        vineA4.angle=-5
        let vineA5=this.add.image(800,80, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vineA5);
        let vineA6=this.add.image(810,120, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vineA6);
        vineA6.angle=-10
        /**
         * Herbe à droite
         */
        let grass5=this.add.image(1065,370, 'gGrass5').setOrigin(0,1);
        this.groundContainer.add(grass5);
        let grass5Bis=this.add.image(1200,370, 'gGrass5').setOrigin(0,1);
        this.groundContainer.add(grass5Bis);
        let grass5Alt=this.add.image(1150,370, 'gGrass5').setOrigin(0,1);
        this.groundContainer.add(grass5Alt);
        let grass2Bis=this.add.image(970,400, 'gGrass2').setOrigin(0,1);
        this.groundContainer.add(grass2Bis);
        /**
         * Eau
         */
        let water=this.add.image(600,630, 'gWater').setOrigin(0,1);
        this.groundContainer.add(water);
        water.scale = 1.1
        /**
         * Terrain 1
         * @type {Phaser.GameObjects.Image}
         */
            //ici on va calculer les positions
        let gMid1=this.add.image(0,350, 'gMid').setOrigin(0,0);
        this.groundContainer.add(gMid1);
        /**
         * Terrain 2
         * @type {Phaser.GameObjects.Image}
         */
        let gMid2=this.add.image(gMid1.x+gMid1.width+1,350, 'gMid').setOrigin(0,0); //on rajoute 1 px pour l'exemple
        this.groundContainer.add(gMid2);
        /**
         * Terrain 3
         * @type {Phaser.GameObjects.Image}
         */
        let gMid3=this.add.image(gMid2.x+gMid2.width,350, 'gRight').setOrigin(0,0);
        this.groundContainer.add(gMid3);
        /**
         * Terrain pour cacher la ligne de pixel
         */
        let mid=this.add.image(100,750, 'gMid').setOrigin(0,1);
        this.groundContainer.add(mid);
        /**
         * Terrain à droite
         */
        let left=this.add.image(970,750, 'gLeft').setOrigin(0,1);
        this.groundContainer.add(left);
        let midBis=this.add.image(1100,750, 'gMid').setOrigin(0,1);
        this.groundContainer.add(midBis);
        /**
         * Pont
         */
        let woodenBridge=this.add.image(550,380, 'gWoodenBridge').setOrigin(0,1);
        this.groundContainer.add(woodenBridge);
        woodenBridge.scale = 0.9
        /**
         * Caisse
         */
        let box2=this.add.image(655,339, 'gBox2').setOrigin(0,1);
        this.groundContainer.add(box2);
        box2.angle=5;
        box2.scale = 0.7
        /**
         * Champignon
         */
        let mushroom1=this.add.image(330,355, 'gMushroom1').setOrigin(0,1);
        this.groundContainer.add(mushroom1);
        mushroom1.angle = 13
        /**
         * Arbre à gauche 1
         */
        let tree2=this.add.image(220,400, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree2);
        tree2.scale = 0.9
        tree2.flipX = true
        /**
         * De l'herbe en textures qui se répète
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-1').setOrigin(0,1)
        this.groundContainer.add(grass);
        /**
         * encore de l'herbe
         * @type {Phaser.GameObjects.TileSprite}
         */
        let grass2=this.add.tileSprite(0,370,gMid3.x+gMid3.width-40,50,'g-grass-3').setOrigin(0,1)
        this.groundContainer.add(grass2);
        /**
         * Début du sample 2 Terrain
         */
        let gMid1Alt=this.add.image(1300,750, 'gMid').setOrigin(0,1);
        this.groundContainer.add(gMid1Alt);
        /**
         * Terrain sample 2 fin a gauche
         */
        let gRight1Alt=this.add.image(1500,750, 'gRight').setOrigin(0,1);
        this.groundContainer.add(gRight1Alt);
        /**
         * Terrain sample 2 à droite
         */
        let gLeft1Alt=this.add.image(2050,780, 'gLeft').setOrigin(0,1);
        this.groundContainer.add(gLeft1Alt);
        let gMid1Alpha=this.add.image(2250,780, 'gMid').setOrigin(0,1);
        this.groundContainer.add(gMid1Alpha);
        /**
         * Terrain sample 2 arbre à gauche
         */
        let treeS2=this.add.image(1300,370, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(treeS2);
        treeS2.scale=0.7
        /**
         * Terrain sample 2 champignon
         */
        let mushroom1Bis=this.add.image(1570,380, 'gMushroom1').setOrigin(0,1);
        this.groundContainer.add(mushroom1Bis);
        mushroom1Bis.scale=0.6
        /**
         * herbe
         */
        let gGrass2Alpha=this.add.image(1300,380, 'gGrass2').setOrigin(0,1);
        this.groundContainer.add(gGrass2Alpha);
        /**
         * rocher à coté de l'arbre sample 2
         */
        let gStone5Bis=this.add.image(1290,375, 'gStone5').setOrigin(0,1);
        this.groundContainer.add(gStone5Bis);
        gStone5Bis.scale=1.3
        /**
         * Arbre qui sert de pont
         */
        let gFellenTree1=this.add.image(1650,370, 'gFellenTree1').setOrigin(0,1);
        this.groundContainer.add(gFellenTree1);
        gFellenTree1.angle=7
        /**
         * Herbe entre le rocher et le champi et entre le champi et l'arbre tombé et à droite de l'arbre tombé
         */
        let gGrass2=this.add.image(1525,390, 'gGrass2').setOrigin(0,1);
        this.groundContainer.add(gGrass2);
        let gGrass3=this.add.image(1620,395, 'gGrass3').setOrigin(0,1);
        this.groundContainer.add(gGrass3);
        let gGrass2Bis=this.add.image(2100,415, 'gGrass2').setOrigin(0,1);
        this.groundContainer.add(gGrass2Bis);
        /**
         * Spike en dessous de l'arbre tombé
         */
        let gSpike1=this.add.image(1500,580, 'gSpike1').setOrigin(0,1);
        this.groundContainer.add(gSpike1);
        gSpike1.scale=1.5
        let gSpike1Bis=this.add.image(1800,580, 'gSpike1').setOrigin(0,1);
        this.groundContainer.add(gSpike1Bis);
        gSpike1Bis.scale=1.5
        /**
         * Lianes à droite sample 2
         */
        let vineCBis=this.add.image(2350,40, 'gVineC').setOrigin(0,1);
        this.groundContainer.add(vineCBis);
        let vineABis=this.add.image(2352,80, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vineABis);
        let vineC2Bis=this.add.image(2350,120, 'gVineC').setOrigin(0,1);
        this.groundContainer.add(vineC2Bis);
        let vineA2Bis=this.add.image(2345,160, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vineA2Bis);
        vineA2Bis.angle=5
        let vineA3Bis=this.add.image(2345,200, 'gVineA').setOrigin(0,1);
        this.groundContainer.add(vineA3Bis);
        /**
         * Quelques éléments de décors pour finir le sample
         */
        let mushroom2=this.add.image(2270,410, 'gMushroom2').setOrigin(0,1);
        this.groundContainer.add(mushroom2);
        let gGrass2AlphaBis=this.add.image(2300,410, 'gGrass2').setOrigin(0,1);
        this.groundContainer.add(gGrass2AlphaBis);
        let gGrass2Tera=this.add.image(2200,410, 'gGrass2').setOrigin(0,1);
        this.groundContainer.add(gGrass2Tera);
        let tree2PasDidee=this.add.image(2290,410, 'gTree2').setOrigin(0,1);
        this.groundContainer.add(tree2PasDidee);
        /**
         * ZOMBIEEEEEEEEE
         */
        let zombieZ4=this.add.image(2200,410, 'z4').setOrigin(0,1);
        this.groundContainer.add(zombieZ4);
        let zombieZ16=this.add.image(800,355, 'z16').setOrigin(0,1);
        this.groundContainer.add(zombieZ16);
        let zombieZ4Bis=this.add.image(150,360, 'z4').setOrigin(0,1);
        this.groundContainer.add(zombieZ4Bis);
        zombieZ4Bis.flipX=true
        let zombieZ5=this.add.image(1150,365, 'z5').setOrigin(0,1);
        this.groundContainer.add(zombieZ5);
        let zombieZ13=this.add.image(1360,350, 'z13').setOrigin(0,1);
        this.groundContainer.add(zombieZ13);
        zombieZ13.flipX=true
        zombieZ13.angle=5
        let zombieZ13Bis=this.add.image(1800,500, 'z13').setOrigin(0,1);
        this.groundContainer.add(zombieZ13Bis);
        zombieZ13Bis.angle=60
        /**
<<<<<<< HEAD
         * persos
         */
        this.boy = this.add.sprite(570, 100, 'animation').setOrigin(0,0);
        this.anims.create({
            key: 'boyIdle',
            frames: [
                {key:'idle1'},
                {key:'idle2'},
                {key:'idle3'},
                {key:'idle4'},
                {key:'idle5'},
                {key:'idle6'},
                {key:'idle7'},
                {key:'idle8'},
                {key:'idle9'},
                {key:'idle10'},
            ],
            frameRate: 16,
            repeat: -1,


        });
        this.boy.play('boyIdle');
        this.boy.scale=0.5
        /**
         * ennemi
         */
        this.ennemi = this.add.sprite(1700, 100, 'animation').setOrigin(0,0);
        this.anims.create({
            key: 'ennemiIdle',
            frames: [
                {key:'idleEnnemi1'},
                {key:'idleEnnemi2'},
                {key:'idleEnnemi3'},
                {key:'idleEnnemi4'},
                {key:'idleEnnemi5'},
                {key:'idleEnnemi6'},
                {key:'idleEnnemi7'},
                {key:'idleEnnemi8'},
                {key:'idleEnnemi9'},
                {key:'idleEnnemi10'},
            ],
            frameRate: 16,
            repeat: -1,


        });
        this.ennemi.play('ennemiIdle');
        this.ennemi.scale=0.5
        /**
         * ennemies volants
         */
        this.ennemiB = this.add.sprite(1100, 0, 'animation').setOrigin(0,0);
            this.anims.create({
                key: 'ennemiIdleB',
                frames: [
                    {key:'idleEnnemiB1'},
                    {key:'idleEnnemiB2'},
                    {key:'idleEnnemiB3'},
                    {key:'idleEnnemiB4'},
                    {key:'idleEnnemiB5'},
                    {key:'idleEnnemiB6'},
                ],
                frameRate: 16,
                repeat: -1,


            });
            this.ennemiB.play('ennemiIdleB');
            this.ennemiB.scale=0.5

        /**
         * ennemies volants
         */
        this.ennemiBAlt = this.add.sprite(500, 0, 'animation').setOrigin(0,0);
        this.anims.create({
            key: 'ennemiIdleB',
            frames: [
                {key:'idleEnnemiB1'},
                {key:'idleEnnemiB2'},
                {key:'idleEnnemiB3'},
                {key:'idleEnnemiB4'},
                {key:'idleEnnemiB5'},
                {key:'idleEnnemiB6'},
            ],
            frameRate: 16,
            repeat: -1,


        });
        this.ennemiBAlt.play('ennemiIdleB');
        this.ennemiBAlt.scale=0.7
        this.ennemiBAlt.flipX=true
        /**
=======
         * perso
         */
        this.boy = this.add.sprite(0, 200, 'animation').setOrigin(0,0);
        //animation de 10 images
        this.anims.create({
            key: 'idle',
            frames: [
                {key:'layer1'},
                {key:'layer2'},
                {key:'layer3'},
                {key:'layer4'},
                {key:'layer5'},
                {key:'layer6'},
                {key:'layer7'},
                {key:'layer8'},
                {key:'layer9'},
                {key:'layer10'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.boy.play('idle');
        this.boy.scale=0.5
        this.anims.create({
            key: 'run',
            frames: [
                {key:'Layer1'},
                {key:'Layer2'},
                {key:'Layer3'},
                {key:'Layer4'},
                {key:'Layer5'},
                {key:'Layer6'},
                {key:'Layer7'},
                {key:'Layer8'},
            ],
            frameRate: 16,
            repeat: -1
        });



        /**
>>>>>>> 8d2eb54362b6616323473ae88b4b29615efe6cca
         * filtre type film au premier plan
         * @type {Phaser.GameObjects.Sprite}
         */
        this.filterFilm = this.add.sprite(0, 0, 'filterFilm1').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'film',
            frames: [
                {key:'filterFilm1'},
                {key:'filterFilm2'},
                {key:'filterFilm3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.filterFilm.play('film');
        /**
         * filtre rain
         */
        this.rain = this.add.sprite(0, 0, 'weatherRain').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'rain',
            frames: [
                {key:'rain1'},
                {key:'rain2'},
                {key:'rain3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.rain.play('rain');
        this.rain = this.add.sprite(900, 0, 'weatherRain').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'rain',
            frames: [
                {key:'rain1'},
                {key:'rain2'},
                {key:'rain3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.rain.play('rain');
        this.rain = this.add.sprite(1800, 0, 'weatherRain').setOrigin(0,0);
        //animation de 3 images
        this.anims.create({
            key: 'rain',
            frames: [
                {key:'rain1'},
                {key:'rain2'},
                {key:'rain3'},
            ],
            frameRate: 16,
            repeat: -1
        });
        this.rain.play('rain');
        //TODO élève faire une animation du même genre que filter mais pour bgAnimationA

        //gestion du parallaxe
        /**
         * Vitesse de déplacement du décor
         * @type {number}
         */
        this.speed=0;
        //initialise ce qui se passe avec le clavier
        this.initKeyboard();
        // Définit l'espace de déplacement de la caméra
        this.cameras.main.setBounds(0, 0, 2400, 540);
        //définit à quelles vitesse se déplacent nos différents plans
        bgAnimationA.scrollFactorX=0;
        this.filterFilm.scrollFactorX=0;
        this.bg2Container.scrollFactorX=0.2;
        this.bg1Container.scrollFactorX=0.4;
        this.groundContainer.scrollFactorX=1;
    }
    /**
     * Définit ce qui se passe quand on appuie ou relache une touche du clavier
     * ALGO : ceci est une fonction ou méthode
     */
    initKeyboard(){
        let me=this;
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                    me.speed=4;
                    break;
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
                    me.speed=-4;
                    break;
<<<<<<< HEAD
=======
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.boy.play('run');
                    me.boy.flipX=true;
                    me.speedX=1;
                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.boy.play('run');
                    me.boy.flipX=false;
                    me.speedX=1;
>>>>>>> 8d2eb54362b6616323473ae88b4b29615efe6cca

            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.RIGHT:
                case Phaser.Input.Keyboard.KeyCodes.LEFT:
<<<<<<< HEAD
=======
                case Phaser.Input.Keyboard.KeyCodes.Q:
                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.boy.play('idle');
                    me.speedX=0;
>>>>>>> 8d2eb54362b6616323473ae88b4b29615efe6cca
                    break;

            }
        });
    }

    /**
     * Cette fonction s'exécute en boucle (à peu près 60 fois par secondes)
     */
    update(){
        //déplacement de la caméra
        this.cameras.main.scrollX+=this.speed; // on aurait pu écrire : this.cameras.main.scrollX= this.cameras.main.scrollX + this.speed;

        //petit effet de vibrance sur le filtre film au tout premier plan
        this.filterFilm.setAlpha(Phaser.Math.Between(95,100)/100)
        this.boy.x+=this.speedX;
    }
<<<<<<< HEAD
=======


>>>>>>> 8d2eb54362b6616323473ae88b4b29615efe6cca
}