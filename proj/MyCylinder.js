/**
* MyCylinder
* @constructor
*/
class MyCylinder extends CGFobject {
    /**
     * @method constructor
     * @param  {CGFscene} scene - MyScene object
     * @param  {integer} slices - number of slices around Y axis
     * @param  {integer} stacks - number of stacks along Y axis, from the center to the poles (half of sphere)
     */
    constructor(scene, slices) {
      super(scene);
      this.slices = slices;
  
      this.initBuffers();
    }
  
    /**
     * @method initBuffers
     * Initializes the sphere buffers
     * TODO: DEFINE TEXTURE COORDINATES
     */
    initBuffers() {
      this.vertices = [];
      this.indices = [];
      this.normals = [];

      var ang = 0;
      var alphaAng = 2 * Math.PI/this.slices;
      
      for(var i = 0; i <= this.slices; i++){
          this.vertices.push(Math.cos(ang), 0, -Math.sin(ang));
          this.vertices.push(Math.cos(ang), 1, -Math.sin(ang));
          this.normals.push(Math.cos(ang), 0, -Math.sin(ang), Math.cos(ang), 0, -Math.sin(ang));

          if (i != 0){
              this.indices.push((i*2), (i*2+1), (i*2-1));
              this.indices.push((i*2), (2*i-1), (2*i-2));
          }

          ang+=alphaAng;
      }

      this.primitiveType = this.scene.gl.TRIANGLES;
      this.initGLBuffers();

    }
  }
  