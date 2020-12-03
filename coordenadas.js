var scene;
var camera;
var renderer;

var cube;


var init = function() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    //alterando cor de fundo
    renderer.setClearColor(0xEEEEEE);

    this.createACube();
    this.createTriangulo();
    camera.position.z = 5;
    //setando camera
    camera.position.set(3,3,5);
    //Para onde olhar
    camera.lookAt(scene.position);

    //adicionando eixos: O eixo X é vermelho. O eixo Y é verde. O eixo Z é azul.
    var axes = new THREE.AxesHelper(5);
    scene.add(axes);
    this.render();

};

var render = function() {
    requestAnimationFrame( render );

    this.animateCube();
    
    renderer.render( scene, camera );
};

var createACube = function() {
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: 0x8B008B } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
};

//CRIANDO TRIANGULO
var createTriangulo = function(){
    //definindo geometria genérica
    var trianguloGeometry = new THREE.Geometry();
    //criando e adicionando os vertices
   var v1= new THREE.Vector3(0,0,0);
   var v2= new THREE.Vector3(2,0,0);
   var v3= new THREE.Vector3(2,2,0);
    trianguloGeometry.vertices.push(v1);
    trianguloGeometry.vertices.push(v2);
    trianguloGeometry.vertices.push(v3);
    //criando a face
    trianguloGeometry.faces.push(new THREE.Face3(0,1,2));
    var trianguloMaterial = new THREE.MeshBasicMaterial({color:0xff0000});
    var triangulo = new THREE.Mesh(trianguloGeometry,trianguloMaterial);
    //scene.add(triangulo);
}

var animateCube = function() {
    cube.rotation.y += 0.1;
    
    
};

//quando a página é carregada a função init é chamada
window.onload = this.init;

