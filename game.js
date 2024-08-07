class mainScene {
    
    preload() {
        this.load.image('player', '/assets/jojo.png');
        this.load.image('coin', '/assets/coin.png');
        // Add event listeners for load errors
    this.load.on('filecomplete-image-player', (key, type, data) => {
        console.log(`Loaded image: ${key}`);
    });
    this.load.on('filecomplete-image-coin', (key, type, data) => {
        console.log(`Loaded image: ${key}`);
    });
    this.load.on('loaderror', (file) => {
        console.error(`Error loading file: ${file.key}`);
    });

        this.score = 0;
        let style = { font: '20px Arial', fill: '#fff' };
        this.scoreText = this.add.text(20, 20, 'score: ' + this.score, style);
    }
    
    create() {
        this.player = this.physics.add.sprite(200, 200, 'player');
        this.player.setDisplaySize(100, 200);
        this.coin = this.physics.add.sprite(800, 300, 'coin');
        this.coin.setDisplaySize(100, 100);
        this.arrow = this.input.keyboard.createCursorKeys();
        
    }
    
    update() {
        if (this.physics.overlap(this.player, this.coin)) {
            // Call the new hit() method
            this.hit();
          }
        if (this.arrow.right.isDown) {
            // If the right arrow is pressed, move to the right
            this.player.x += 7;
          } else if (this.arrow.left.isDown) {
            // If the left arrow is pressed, move to the left
            this.player.x -= 7;
          } 
          
          // Do the same for vertical movements
          if (this.arrow.down.isDown) {
            this.player.y += 7;
          } else if (this.arrow.up.isDown) {
            this.player.y -= 7;
          }  
    }
    
    hit() {
        this.coin.x = Phaser.Math.Between(100, 1900);
        this.coin.y = Phaser.Math.Between(100, 900);
            
        // Increment the score by 10
        this.score += 10;
            
        // Display the updated score on the screen
        this.scoreText.setText('score: ' + this.score);
    }
    
  }
  new Phaser.Game({
    width: 1980, // Width of the game in pixels
    height: 1000, // Height of the game in pixels
    backgroundColor: '#3498db', // The background color (blue)
    scene: mainScene, // The name of the scene we created
    physics: { default: 'arcade' }, // The physics engine to use
    parent: 'game', // Create the game inside the <div id="game"> 
  });