//Setyp scene, camera and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer({ antialias: true } );
var cube;

//Setup orbit controls
var controls = new THREE.OrbitControls( camera, renderer.domElement );

function createBox() {
    var basicMaterial = new THREE.MeshBasicMaterial( {color: "#ff0000"});
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshNormalMaterial( { color: "#ffff00" } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );
}

function createmultipleBoxes() {
    var xDistance = 3;
    var zDistance = 2;

    var geometry = new THREE.BoxGeometry( 2, 1, 1 );
    var material = new THREE.MeshStandardMaterial( { color: "#ffff00" } );

    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 3; j++){
                var mesh  = new THREE.Mesh(geometry, material);
                mesh.position.x = (xDistance * i) -4;
                mesh.position.y = (zDistance * j);
                mesh.position.z = (zDistance * j);
                scene.add(mesh);
        }
    }
}

function animate() {
    //update scene each frame
    requestAnimationFrame( animate );

    //for updating orbit controls
    controls.update();

    //rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    //render the scene
    renderer.render( scene, camera );
};

//resize canvas when resizing window
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

function init() {
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    createBox();
    animate();
    // createmultipleBoxes();

    //Push the camera back to see anything
    camera.position.z = 5;
}

init();