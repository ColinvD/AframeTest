const scene = document.querySelector('a-scene');
var box = document.createElement('a-box');

box.object3D.position.set(-1, 0.5, -3);
box.object3D.rotation.set(0, 45, 0);
box.setAttribute('material', 'color', '#4CC3D9');
scene.appendChild(box);

var car = AddModel('Models/Car/Shelby.obj','Models/Car/Shelby.mtl');

function AddModel(modelLocation, materialLocation) {
  var model = new Model(modelLocation, materialLocation);
  scene.appendChild(model.model);
  return model;
}
