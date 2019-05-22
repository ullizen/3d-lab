var gui = new dat.GUI();

var box = gui.addFolder('Cube');
box.add(cube.scale, 'x', 0, 3).name('Width').listen();
box.add(cube.scale, 'y', 0, 3).name('Height').listen();
box.add(cube.scale, 'z', 0, 3).name('Length').listen();
box.add(cube.material, 'wireframe').listen();
box.open();