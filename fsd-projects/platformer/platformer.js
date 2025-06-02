$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 625, 100, 100);
createPlatform(700, 500, 50, 50);
createPlatform(450, 400, 200, 25);
createPlatform(850, 400, 200, 25);
createPlatform(250, 350, 100, 25);
createPlatform(300, 200, 100, 25);
createPlatform(550, 180, 600, 25);
createPlatform(150, 300, 50, 25);
createPlatform(1350, 400, 50, 50, "red");



    // TODO 3 - Create Collectables

createCollectable("diamond", 1350, 50);
createCollectable("steve", 160, 250);
createCollectable("database", 1350, 350);

    // TODO 4 - Create Cannons

   createCannon("top", 200, 500);
   createCannon("right", 300, 2000);
   createCannon("bottom", 1200, 1000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
