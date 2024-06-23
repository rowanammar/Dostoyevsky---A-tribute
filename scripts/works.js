// Import the THREE.js library
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
// To allow for the camera to move around the scene
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
// To allow for importing the .gltf file
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const booksInfo = [
  {
    "book": "Crime and Punishment",
    "description": "Crime and Punishment is a psychological drama that explores the mind of Rodion Raskolnikov, a young law student in St. Petersburg who becomes entangled in a moral dilemma. He believes that extraordinary people have the right to commit crimes if it benefits humanity. Acting on this belief, he murders an unscrupulous pawnbroker. The novel delves into his mental anguish and moral conflicts, as he grapples with guilt and seeks redemption. Throughout the story, Raskolnikov's interactions with other characters highlight the complexities of human nature and morality. Dostoevsky's narrative raises questions about justice, free will, and the nature of evil. The intense psychological exploration makes it a cornerstone of Russian literature.",
    "genres": "Psychological fiction, Philosophical fiction, Crime fiction",
    "Major themes": "Guilt, Redemption, Justice, Morality, Alienation, Poverty",
    "main characters": "Rodion Raskolnikov, Sofya Semyonovna Marmeladov (Sonia), Dmitry Prokofych Razumikhin, Porfiry Petrovich",
    "trivia": "Dostoevsky wrote Crime and Punishment while experiencing severe financial difficulties, and he was inspired by the works of Edgar Allan Poe."
  },
  {
    "book": "The Brothers Karamazov",
    "description": "The Brothers Karamazov is a profound exploration of faith, doubt, and the human condition, centering around the Karamazov family. The patriarch, Fyodor Pavlovich, is a depraved and neglectful father whose murder sparks a familial and legal drama. His sons, Dmitri, Ivan, and Alexei (Alyosha), represent different aspects of Russian society and philosophical thought. Dmitri embodies passionate excess, Ivan intellectual skepticism, and Alyosha spiritual faith. The novel addresses deep philosophical questions about the existence of God, the nature of evil, and the struggle for moral integrity. It is both a family saga and a philosophical discourse, culminating in a tense courtroom drama. Dostoevsky's final novel is considered one of the greatest achievements in world literature.",
    "genres": "Philosophical fiction, Psychological fiction, Family saga",
    "Major themes": "Faith, Doubt, Free Will, Family, Redemption, Justice",
    "main characters": "Fyodor Pavlovich Karamazov, Dmitri (Mitya) Karamazov, Ivan Karamazov, Alexei (Alyosha) Karamazov, Pavel Smerdyakov",
    "trivia": "Dostoevsky intended The Brothers Karamazov to be the first part of a larger work, but he died shortly after its completion."
  },
  {
    "book": "The Idiot",
    "description": "The Idiot follows the story of Prince Lev Nikolayevich Myshkin, a kind-hearted and naive man whose goodness makes him appear foolish to the corrupt society around him. Returning to Russia from a Swiss sanatorium, Myshkin becomes embroiled in a love triangle involving the beautiful but tormented Nastasya Filippovna and the innocent Aglaya Yepanchin. His attempts to bring compassion and honesty to those around him lead to unexpected and tragic consequences. The novel explores the clash between innocence and a world filled with greed, jealousy, and moral decay. Dostoevsky uses Myshkin's character to examine the nature of true Christian love and the often destructive nature of societal values.",
    "genres": "Philosophical fiction, Psychological fiction, Romance",
    "Major themes": "Innocence, Compassion, Society and Corruption, Love, Redemption",
    "main characters": "Prince Lev Nikolayevich Myshkin, Nastasya Filippovna, Aglaya Ivanovna Yepanchin, Parfyon Semyonovich Rogozhin",
    "trivia": "Dostoevsky based some aspects of Prince Myshkin's character on his own experiences with epilepsy."
  },
  {
    "book": "Demons (The Devils)",
    "description": "Demons, also known as The Devils, is a political and philosophical novel that critiques the rise of radical ideologies in 19th-century Russia. The story revolves around a group of nihilists led by the charismatic and manipulative Pyotr Stepanovich Verkhovensky and the tragic figure of Nikolai Stavrogin. Through a series of violent and chaotic events, Dostoevsky examines the destructive consequences of radicalism and the moral void it creates. The novel delves into the psyche of its characters, exposing their inner conflicts and the societal forces that drive them. Demons is a stark warning against the dangers of extremism and the loss of moral and spiritual values in society.",
    "genres": "Political fiction, Philosophical fiction, Psychological fiction",
    "Major themes": "Radicalism, Nihilism, Moral Decay, Power, Society and Politics",
    "main characters": "Nikolai Stavrogin, Pyotr Stepanovich Verkhovensky, Stepan Trofimovich Verkhovensky, Shatov",
    "trivia": "The novel was inspired by the real-life case of the Russian revolutionary group 'People's Vengeance,' led by Sergei Nechaev."
  },
  {
    "book": "Notes from Underground",
    "description": "Notes from Underground is a short novel that introduces the character of the Underground Man, a disillusioned and isolated narrator who offers a scathing critique of society and human nature. Through his fragmented and often contradictory monologue, he expresses his profound dissatisfaction with the rationalist and utopian ideals of his time. The novel explores themes of existential angst, free will, and the individual's struggle against societal norms. Dostoevsky's innovative narrative style and deep psychological insights make this work a precursor to existentialist literature. The Underground Man's reflections reveal the complexities of the human condition and the paradoxes inherent in the quest for self-understanding.",
    "genres": "Philosophical fiction, Psychological fiction, Existentialist fiction",
    "Major themes": "Existentialism, Free Will, Alienation, Society, Self-identity",
    "main characters": "The Underground Man, Liza, Simonov, Zverkov",
    "trivia": "Notes from Underground is often considered the first existentialist novel, influencing later writers like Jean-Paul Sartre and Albert Camus."
  },
  {
    "book": "The House of the Dead",
    "description": "The House of the Dead is a semi-autobiographical novel based on Dostoevsky's own experiences in a Siberian penal colony. The story is narrated by Aleksandr Petrovich Goryanchikov, a nobleman sentenced to ten years of hard labor for murdering his wife. Through his eyes, the novel portrays the harsh realities of prison life, the diverse personalities of the inmates, and the brutalizing effects of the penal system. Dostoevsky's detailed observations provide a poignant critique of the Russian penal system and a deep exploration of human resilience and compassion in the face of suffering. The House of the Dead is a powerful testament to the human spirit and the possibility of redemption even in the most oppressive conditions.",
    "genres": "Autobiographical fiction, Prison literature, Psychological fiction",
    "Major themes": "Suffering, Redemption, Injustice, Human Resilience, Compassion",
    "main characters": "Aleksandr Petrovich Goryanchikov, Akim Akimych, Petrov, Alyoshka",
    "trivia": "Dostoevsky wrote The House of the Dead based on his own experiences after being sentenced to four years of hard labor in Siberia for his involvement in a political group."
  },
  {
    "book": "The Gambler",
    "description": "The Gambler is a novella that explores the themes of addiction, obsession, and the destructive power of gambling. The protagonist, Alexei Ivanovich, is a young tutor employed by a wealthy Russian family living in a fictional European city. Alexei becomes infatuated with Polina, his employer's stepdaughter, and is drawn into the world of roulette to win her favor and prove his worth. The story vividly depicts the highs and lows of the gambling experience and the psychological toll it takes on Alexei and those around him. Dostoevsky, who himself struggled with gambling addiction, offers an intimate and gripping portrayal of the compulsive nature of gambling and its impact on the human psyche.",
    "genres": "Psychological fiction, Autobiographical fiction, Novella",
    "Major themes": "Addiction, Obsession, Destruction, Love, Human Nature",
    "main characters": "Alexei Ivanovich, Polina Alexandrovna, The General (Zerov), Mademoiselle Blanche",
    "trivia": "Dostoevsky wrote The Gambler in just 26 days to pay off a gambling debt and meet a publisher's deadline."
  }
]

// Create a Three.JS Scene
const scene = new THREE.Scene();
// Create a new camera with positions and angles
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(-200, 50, 0); // Adjusted camera position to be on the left side of the books
camera.lookAt(0, 0, 0); // Make the camera look at the center of the scene

// Keep track of the mouse position, so we can make the eye move
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

// Keep the 3D object on a global variable so we can access it later
let object;

// OrbitControls allow the camera to move around the scene
let controls;

// Set which object to render
let objToRender = 'bookshelf';

// Instantiate the GLTFLoader
const loader = new GLTFLoader();

function createTextSprite(text) {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  context.font = 'Bold 20px Arial';
  context.fillStyle = 'rgba(0,0,0,1.0)';
  context.fillText(text, 0, 20);

  var texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;

  var spriteMaterial = new THREE.SpriteMaterial({ map: texture });
  var sprite = new THREE.Sprite(spriteMaterial);

  sprite.scale.set(10, 5, 1); // Adjust the size of the sprite
  return sprite;
}

// Load the file
loader.load(
`models/${objToRender}/scene.gltf`,
function (gltf) {
  // If the file is loaded, add it to the scene
  object = gltf.scene;
  
  // Scale and position the model
  object.scale.set(140, 140, 140); // Adjust the scale if needed
  object.position.set(0, 0, 0); // Adjust the position if needed

  console.log('Loaded object:', object); // Log the loaded object
  console.log('Object children:', object.children); // Log the children of the object

  // Ensure each child has a material that allows raycasting
  object.traverse(function (child) {
    if (child.isMesh) {
      child.geometry.computeBoundingBox();
      child.material.side = THREE.DoubleSide; // Ensure the material is double-sided
      console.log('Child with bounding box:', child.name, child.geometry.boundingBox);
    }
  });

  // Add text labels to the books
  booksInfo.forEach((book, index) => {
      const sprite = createTextSprite(book.book);
      const bookMesh = object.getObjectByName(`book${index + 1}`);
      if (bookMesh) {
          // Position the text sprite slightly above the book
          sprite.position.set(bookMesh.position.x, bookMesh.position.y + 10, bookMesh.position.z);
          scene.add(sprite);
      }
  });

  scene.add(object);
},
  function (xhr) {
    // While it is loading, log the progress
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
  },
  function (error) {
    // If there is an error, log it
    console.error(error);
  }
);


// Instantiate a new renderer and set its size
const renderer = new THREE.WebGLRenderer({ alpha: true }); // Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

// Add the renderer to the DOM
document.getElementById("container3D").appendChild(renderer.domElement);

// Set the background color of the scene
scene.background = new THREE.Color(0x2E2E2E); // Change this to a different color if needed

// Add lights to the scene, so we can actually see the 3D model
// Adjust the position and orientation of the directional light
const topLight = new THREE.DirectionalLight(0xffffff, 5);
topLight.position.set(-200, 0, 200); // Front-top position
topLight.castShadow = true;

// Add a new directional light in front of the books
const frontLight = new THREE.DirectionalLight(0xffffff, 5);
frontLight.position.set(0, 0, 200); // Front position
frontLight.castShadow = true;
scene.add(frontLight);

// Add a spot light to add some additional lighting from the front
const spotLight = new THREE.SpotLight(0xffffff, 5);
spotLight.position.set(-200, 0, 0); // Front position
scene.add(spotLight);

const ambientLight = new THREE.AmbientLight(0x333333, 1); // (color, intensity)
scene.add(ambientLight);

// This adds controls to the camera, so we can rotate / zoom it with the mouse
// This adds controls to the camera, so we can rotate / zoom it with the mouse
controls = new OrbitControls(camera, renderer.domElement);

// Disable zooming and panning
controls.enableZoom = false; // Disable zooming
controls.enablePan = false;  // Disable panning

// Optionally, you can set other properties like this:
controls.enableDamping = true; // Enable smooth damping (inertia)
controls.dampingFactor = 0.05; // Set damping factor

controls.screenSpacePanning = false; // Prevent the camera from panning

// Adjust the maximum and minimum polar angles to limit vertical rotation (optional)
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = 0;

// Adjust the maximum and minimum azimuth angles to limit horizontal rotation (optional)
controls.maxAzimuthAngle = Math.PI / 2;
controls.minAzimuthAngle = -Math.PI / 2;


var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

window.addEventListener('click', onMouseClick, false);

function onMouseClick(event) {
  // Get the canvas element
  var canvas = renderer.domElement;
  var rect = canvas.getBoundingClientRect();

  // Adjust the mouse coordinates
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  console.log("Mouse click at:", mouse.x, mouse.y);

  // Update the raycaster to use the new mouse coordinates and the camera
  raycaster.setFromCamera(mouse, camera);

  // Ensure all objects' matrices are up to date
  scene.traverse(function (child) {
      if (child.isMesh) {
          child.geometry.computeBoundingBox();
          child.geometry.computeBoundingSphere();
          child.updateMatrixWorld();
      }
  });

  // Find intersections
  var intersects = raycaster.intersectObjects(scene.children, true);

  console.log("Intersects:", intersects);

  if (intersects.length > 0) {
      console.log("Intersected object:", intersects[0].object);
      onObjectClick(intersects[0].object);
  } else {
      console.log("No objects intersected");
  }
}

function onObjectClick(object) {
  console.log("Clicked on object:", object.name);

  const bookIndex = parseInt(object.name.replace('book', '')) - 1;

  if (!isNaN(bookIndex) && bookIndex >= 0 && bookIndex < booksInfo.length) {
      displayBookInfo(bookIndex);
  } else {
      console.error('Clicked object name does not match any book index');
  }
}

// Resize handler
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

// Render loop
function animate() {
  requestAnimationFrame(animate);

  // Update scene
  if (object && objToRender === "bookshelf") {
      object.rotation.y = -3 + mouseX / window.innerWidth * 3;
      object.rotation.x = -1.2 + mouseY * 2.5 / window.innerHeight;
  }

  // Update the camera and the renderer
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);
}

onWindowResize();
animate();




// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#flipBook");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if (currentLocation < maxLocation) {
        switch (currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeBook(false);
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if (currentLocation > 1) {
        switch (currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unknown state");
        }

        currentLocation--;
    }
}


 function displayBookInfo(bookIndex) {
   paper1.classList.remove("flipped");
   paper2.classList.remove("flipped");
   paper3.classList.remove("flipped");
   paper1.style.zIndex = 3;
   paper2.style.zIndex = 2;
   paper3.style.zIndex = 1;
    currentLocation = 1;
   closeBook(true);

  const book = booksInfo[bookIndex];
  
    document.getElementById("f1").innerHTML = `<h1>${book.book}</h1>`;
    document.getElementById("b1").innerHTML = `<p id="desc">${book.description}</p>`;
  
   const genresList = book.genres.split(", ").map(genre => `<li>${genre}</li>`).join("");
  const themesList = book["Major themes"].split(", ").map(theme => `<li>${theme}</li>`).join("");
    
  document.getElementById("f2").innerHTML = `<h2>Genres:</h2><ul>${genresList}</ul>`;
  document.getElementById("b2").innerHTML = `<h2>Major themes:</h2><ul>${themesList}</ul>`;
  
  
  document.getElementById("f3").innerHTML = `<h2>Main Characters:</h2><p>${book["main characters"]}</p>`;
  document.getElementById("b3").innerHTML = `<h2>Trivia:</h2><p>${book.trivia}</p>`;

  document.getElementById("f1").scrollIntoView({ behavior: 'smooth' });
}

