class Model {
  constructor(modelLocation, materialLocation) {
    this.model = document.createElement('a-obj-model');
    this.model.setAttribute('src', modelLocation);
    this.model.setAttribute('mtl', materialLocation);

    const self = this;

    this.position = {
      set x(newX){
        self.model.setAttribute('position', 'x', newX);
      },
      set y(newY){
        self.model.setAttribute('position', 'y', newY);
      },
      set z(newZ){
        self.model.setAttribute('position', 'z', newZ);
      },

      get x(){
        return self.model.getAttribute('position').x;
      },
      get y(){
        return self.model.getAttribute('position').y;
      },
      get z(){
        return self.model.getAttribute('position').z;
      }
    };

    this.rotation = {
      set x(newX){
        self.model.setAttribute('rotation', 'x', newX);
      },
      set y(newY){
        self.model.setAttribute('rotation', 'y', newY);
      },
      set z(newZ){
        self.model.setAttribute('rotation', 'z', newZ);
      },

      get x(){
        return self.model.getAttribute('rotation').x;
      },
      get y(){
        return self.model.getAttribute('rotation').y;
      },
      get z(){
        return self.model.getAttribute('rotation').z;
      }
    };

    this.scale = {
      set x(newX){
        self.model.setAttribute('scale', 'x', newX);
      },
      set y(newY){
        self.model.setAttribute('scale', 'y', newY);
      },
      set z(newZ){
        self.model.setAttribute('scale', 'z', newZ);
      },

      get x(){
        return self.model.getAttribute('scale').x;
      },
      get y(){
        return self.model.getAttribute('scale').y;
      },
      get z(){
        return self.model.getAttribute('scale').z;
      }
    };

    /*this.model.addEventListener('mouseenter', function () {
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
    });*/
  }

  //Position functions

  setPos(newX, newY, newZ){
    this.model.setAttribute('position', {x: newX, y: newY, z: newZ});
  }

  //Rotation function
  setRot(newX, newY, newZ){
    this.model.setAttribute('rotation', {x: newX, y: newY, z: newZ});
  }

  //Scale functions

  setScale(newX, newY, newZ){
    this.model.setAttribute('scale', {x: newX, y: newY, z: newZ});
  }

  setScale(newScale){
    this.model.setAttribute('scale', {x: newScale, y: newScale, z: newScale});
  }
}
