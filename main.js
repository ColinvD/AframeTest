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

/*var car = document.createElement('a-obj-model');
car.setAttribute('src', 'Models/Car/Shelby.obj');
car.setAttribute('mtl', 'Models/Car/Shelby.mtl');
scene.appendChild(car);*/

//var assets = document.querySelector('a-assets');
/*var carObj = document.createElement('a-asset-item');
carObj.id = 'CarObj';
carObj.src= "/Models/Car/Shelby.obj";
var carMat = document.createElement('a-asset-item');
carMat.id = 'CarMat';
carMat.src= "/Models/Car/Shelby.mtl";*/
//var car = document.createElement('a-entity');
//car.components["obj-model"] = "obj: #carObj; mtl: #carMat";

//assets.appendChild(carObj);
//assets.appendChild(carMat);
//scene.appendChild(car);
