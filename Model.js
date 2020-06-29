class Model {
  constructor(modelLocation, materialLocation) {
    this.model = document.createElement('a-obj-model');
    this.model.setAttribute('src', modelLocation);
    this.model.setAttribute('mtl', materialLocation);

    this.model.addEventListener('mouseenter', function () {
      console.log("Hello!!!!");
      //this.model.setAttribute('visible', false);
    });

    this.model.addEventListener('mouseleave', function () {
      console.log("BYE!!!!!");
      //this.model.setAttribute('visible', true);
    });

    this.model.addEventListener('click', function () {
      console.log("HEY STOP THAT!!!!!");
      //this.model.setAttribute('visible', true);
    });
  }

  //Position functions
  setPosX(newX){
    this.model.setAttribute('position', 'x', newX);
  }

  setPosY(newY){
    this.model.setAttribute('position', 'y', newY);
  }

  setPosZ(newZ){
    this.model.setAttribute('position', 'z', newZ);
  }

  setPos(newX, newY, newZ){
    this.model.setAttribute('position', {x: newX, y: newY, z: newZ});
  }

  //Rotation functions
  setRotX(newX){
    this.model.setAttribute('rotation', 'x', newX);
  }

  setRotY(newY){
    this.model.setAttribute('rotation', 'y', newY);
  }

  setRotZ(newZ){
    this.model.setAttribute('rotation', 'z', newZ);
  }

  setRot(newX, newY, newZ){
    this.model.setAttribute('rotation', {x: newX, y: newY, z: newZ});
  }

  //Scale functions
  setScaleX(newX){
    this.model.setAttribute('scale', 'x', newX);
  }

  setScaleY(newY){
    this.model.setAttribute('scale', 'y', newY);
  }

  setScaleZ(newZ){
    this.model.setAttribute('scale', 'z', newZ);
  }

  setScale(newX, newY, newZ){
    this.model.setAttribute('scale', {x: newX, y: newY, z: newZ});
  }

  setScale(newScale){
    this.model.setAttribute('scale', {x: newScale, y: newScale, z: newScale});
  }
}
