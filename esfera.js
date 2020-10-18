var keydown = [];

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,0.1, 1000);
var renderer = new THREE.WebGLRenderer({antilias: true});


renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

window.onkeydown = function(e){
    keydown[e.key] = true;
}
window.onkeyup = function(e){
    keydown[e.key] = false;
}
//Geometria
var geometry = new THREE.SphereBufferGeometry(5,32,32);
var material = new THREE.MeshBasicMaterial({color:0xffff00, wireframe: true});
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
camera.position.z = 15;

//Renderizando
var animate = function(){
    requestAnimationFrame(animate);
    if(keydown["ArrowUp"]) camera.position.z -= 0.2;
    if(keydown["ArrowDown"]) camera.position.z += 0.2;
    if(keydown["ArrowRight"]) camera.position.x += 0.2;
    if(keydown["ArrowLeft"]) camera.position.x -= 0.2;
    renderer.render(scene, camera);
}

animate();


/*var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1, 1000);
var renderer = new THREE.WebGLRenderer({antilias: true});


renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
var geometry = new THREE.SphereBufferGeometry(5,32,32);
var material = new THREE.MeshBasicMaterial({color:0xffff00, wireframe: true});
var sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);
camera.position.z = 15;
var animate = function(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();*/