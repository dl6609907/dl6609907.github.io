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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();



    // TODO 2 - Create Platforms
    createPlatform(100, 300, 400, 20, "hotpink"); createPlatform(600, 200,700, 30, "purple");createPlatform(800, 500,1000,25, "red");
    createPlatform(0,150,400,30,"yellow");
    createPlatform(90, 600, 700, 20,"green");




    // TODO 3 - Create Collectables
    createCollectable("diamond", 200, 250);
    createCollectable("steve",900, 450)
    createCollectable("grace",200, 560)





    
    // TODO 4 - Create Cannons
    createCannon("left", 600, 250);
    createCannon("right", 300, 800);
    createCannon("bottom",600,500);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
