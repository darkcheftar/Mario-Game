import platform from "../img/platform.png";
import hills from "../img/hills.png";
import star from '../img/star.png';
import background from "../img/background.png";
import platformSmallTall from "../img/platformSmallTall.png";
import { Platform, Player, GenericObject, Star } from "./main";
import { createImage, fullscreen, playAudio } from "./utils";

import audio from '../img/audio.mp3'
import confetti from 'canvas-confetti';

const canvas = document.querySelector("canvas");
const con = document.querySelector('#con');
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 570;
con.width = 1024;
con.height = 570;
let maxScrolloffset = 16000;
let platformImage;
let starImage;
let platformSmallTallImage;
let player = null;
let platforms = [];
let stars = [];
let genericObjects = [];

let lastKey;

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
};

let scrollOffset = 0;

function init() {
  platformImage = createImage(platform);
  starImage = createImage(star);
  let platformSmallTallImage = createImage(platformSmallTall);
  player = new Player(canvas);
//   platforms = [
//     new Platform({
//       x:
//         platformImage.width * 4 +
//         300 -
//         2 +
//         platformImage.width -
//         platformSmallTallImage.width,
//       y: 270,
//       image: createImage(platformSmallTall),
//       canvas,
//     }),

//     new Platform({ x: -1, y: 470, image: platformImage, canvas }),
//     new Platform({
//       x: platformImage.width - 3,
//       y: 470,
//       image: platformImage,
//       canvas,
//     }),

//     new Platform({
//       x: platformImage.width * 2 + 100,
//       y: 470,
//       image: platformImage,
//       canvas,
//     }),

//     new Platform({
//       x: platformImage.width * 3 + 300,
//       y: 470,
//       image: platformImage,
//       canvas,
//     }),

//     new Platform({
//       x: platformImage.width * 4 + 300 - 2,
//       y: 470,
//       image: platformImage,
//       canvas,
//     }),

//     new Platform({
//       x: platformImage.width * 5 + 700 - 2,
//       y: 470,
//       image: platformImage,
//       canvas,
//     }),
//   ];
stars = [new Star({x:100, y:100,image:starImage,canvas})];
platforms = [];
platforms.push(new Platform({ x: -1, y: 470, image: platformImage, canvas }))
    let o=0;
  for(let i=0;i<29;i++){
      o+=100;
      platforms.push(
      new Platform({
        x:  700+ (platformImage.width+300) *i    - 2,
        y: 470-Math.random()*100,
        image: platformImage,
        canvas,
      }))
  }
  platforms.push(
    new Platform({
      x:  700+ (platformImage.width) * 30    - 2,
      y: 470-Math.random()*100,
      image: platformImage,
      canvas,
    }),)
  genericObjects = [
    new GenericObject({
      x: -1,
      y: -1,
      image: createImage(background),
      canvas,
    }),
    new GenericObject({
      x: -1,
      y: -1,
      image: createImage(hills),
      canvas,
    }),
  ];

  scrollOffset = 0;
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  genericObjects.forEach((genericObject) => {
    genericObject.draw();
  });

  platforms.forEach((platform) => {
    platform.draw();
  });
  stars.forEach(star=>{
    star.draw();
  })
  player.update();

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if (
    (keys.left.pressed && player.position.x > 100) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed && scrollOffset <maxScrolloffset ) {
      scrollOffset += player.speed;
      platforms.forEach((platform) => {
        platform.position.x -= player.speed;
      });
      genericObjects.forEach((genericObject) => {
        genericObject.position.x -= player.speed * 0.66;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= player.speed;
      platforms.forEach((platform) => {
        platform.position.x += player.speed;
      });

      genericObjects.forEach((genericObject) => {
        genericObject.position.x += player.speed * 0.66;
      });
    }
  }

  console.log(scrollOffset);

  // platform collision detection
  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      player.position.x + player.width >= platform.position.x &&
      player.position.x <= platform.position.x + platform.width
    ) {
      player.velocity.y = 0;
    }
  });
  // sprite switching
  if (
    keys.right.pressed &&
    lastKey === "right" &&
    player.currentSprite !== player.sprites.run.right
  ) {
    player.frames = 1;
    player.currentSprite = player.sprites.run.right;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (
    keys.left.pressed &&
    lastKey === "left" &&
    player.currentSprite !== player.sprites.run.left
  ) {
    player.currentSprite = player.sprites.run.left;
    player.currentCropWidth = player.sprites.run.cropWidth;
    player.width = player.sprites.run.width;
  } else if (
    !keys.left.pressed &&
    lastKey === "left" &&
    player.currentSprite !== player.sprites.stand.left
  ) {
    player.currentSprite = player.sprites.stand.left;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  } else if (
    !keys.right.pressed &&
    lastKey === "right" &&
    player.currentSprite !== player.sprites.stand.right
  ) {
    player.currentSprite = player.sprites.stand.right;
    player.currentCropWidth = player.sprites.stand.cropWidth;
    player.width = player.sprites.stand.width;
  }

  // win condition
  if (scrollOffset > 2000) {
    console.log("You win");
  }

  // lose condition
  if (player.position.y > canvas.height) {
    init();
  }
  c.rect(10,10,100,10);
  c.stroke();
  c.fillRect(10,10,(scrollOffset/maxScrolloffset)*100,10);
  if(scrollOffset/maxScrolloffset>0.95){
    window.dispatchEvent(new CustomEvent('conf'));
  }
}

addEventListener('conf',()=>{
  
    var myConfetti = confetti.create(con, {
      resize: true,
      useWorker: true
    });
    myConfetti({
      particleCount: 100,
      spread: 160
      // any other options from the global
      // confetti function
    });
    setTimeout(() => {
      myConfetti.reset();
    }, 1000);
}, {once:true});
document.querySelector('button').addEventListener('click',()=>{
    let div = document.querySelector('div');
      console.log('hi',div)
    div.classList.add('invisible')
    canvas.requestFullscreen();
    // playAudio(audio);
    init();
});
init();
animate();

addEventListener("keydown", ({ key }) => {
  // console.log(keyCode)
  switch (key) {
    case 'a':
    case 'ArrowLeft':
      console.log("left");
      keys.left.pressed = true;
      lastKey = "left";
      break;

    case 's':
    case 'ArrowDown':
      console.log("down");
      break;

    case 'd':
    case 'ArrowRight':
      console.log("right");
      keys.right.pressed = true;
      lastKey = "right";
      break;
    case 'w':
    case 'ArrowUp':
      console.log("up");
      if(player.velocity.y==0)
      player.velocity.y -= 25;
      break;
    case 'f':
     fullscreen(document.getElementById('display'));
  }

  console.log(keys.right.pressed);
});

addEventListener("keyup", ({ key }) => {
  // console.log(keyCode)
  switch (key) {
    case 'a':
    case 'ArrowLeft':
      console.log("left");
      keys.left.pressed = false;
      break;

    case 's':
    case 'ArrowDown':
      console.log("down");
      break;

    case 'd':
    case 'ArrowRight':
      console.log("right");
      keys.right.pressed = false;

      break;
    case 'w':
    case 'ArrowUp':
      console.log("up");

      break;
  }

  console.log(keys.right.pressed);
});
