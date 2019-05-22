var loader = new THREE.GLTFLoader();

loader.load( 'models/apple/scene.gltf', function ( gltf ) {

    // Set position of object
    // gltf.scene.position = new THREE.Vector3( 0, 1, 0 );

    //loop through object and change material
    // gltf.scene.traverse( function ( child ) {

    //     if ( child instanceof THREE.Mesh) {

    //         // child.material = basicMaterial;

    //     }

    // } );

    scene.add( gltf.scene );
    animate();

}, undefined, function ( error ) {

    console.error( error );

} );