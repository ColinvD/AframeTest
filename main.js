const scene = document.querySelector('a-scene');
var box = document.createElement('a-box');

box.object3D.position.set(-1, 0.5, -3);
box.object3D.rotation.set(0, 45, 0);
box.setAttribute('material', 'color', '#4CC3D9');
scene.appendChild(box);

var car = AddModel('Models/Car/Shelby.obj','Models/Car/Shelby.mtl');
car.setPos(1.5, 0.5, -1);
car.setScale(0.4);

car.addEventListener('mouseenter', () => {
  console.log("Hello!!!!");
  car.rotation.y = 45;
});

car.addEventListener('mouseenter', Hello);

car.addEventListener('mouseleave', () => {
  console.log("BYE!!!!!");
  car.rotation.y = 0;
});

car.addEventListener('click', () => {
  car.removeEventListener('mouseenter', Hello);
});

function Hello() {
  console.log("Well hello there");
}

function AddModel(modelLocation, materialLocation) {
  var model = new Model(modelLocation, materialLocation);
  scene.appendChild(model.model);
  return model;
}
