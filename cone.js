

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1, 1000);
var renderer = new THREE.WebGLRenderer({antilias: true});
renderer.setClearColor(0x363636);

renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const points = [];
let n = 50;
let m = 50;
for(let i =0; i<m; i++){
    for(let j = 0; j<n; j++){
        
        let s = i / n;
        let t = j / (n-1.0);
        let r = 1.0 - t;
        let theta = 2.0*Math.PI*s;
        let x = r*Math.cos(theta);
        let y = r*Math.sin(theta);
        let z = 2.0 * t - 1.0;
              
        
  
        
        points.push(new THREE.Vector3(x,y,z));
    }
}
//Geometria
var geometry = new THREE.BufferGeometry().setFromPoints(points);
var material = new THREE.MeshBasicMaterial({color:0x00ff00});

const cone = new THREE.Points(geometry,material);

scene.add(cone);


camera.position.z = 5;

//Renderizando
var animate = function(){
    requestAnimationFrame(animate);
    geometry.rotateY(0.01);
    
    
    renderer.render(scene, camera);
}

animate();
