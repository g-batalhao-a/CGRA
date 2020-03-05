/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.tangram = new MyTangram(this);
        this.cube = new MyUnitCube(this);
        this.quad = new MyQuad(this);
        this.cubequad = new MyUnitCubeQuad(this);
        this.table = new MyTable(this);
        this.chair = new MyChair(this);
        this.first_chair = new MyChair(this);
        this.second_chair = new MyChair(this);
        this.third_chair = new MyChair(this);
        this.fourth_chair = new MyChair(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayTangram = false;
        this.displayCube = false;
        this.displayQuad = false;
        this.displayCubeQuad=false;
        this.displayTable=false;
        this.displayChair=false;
        this.scaleFactor = 1;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];

        this.multMatrix(sca);

        this.pushMatrix();
        this.translate(3,0,4);
        this.rotate(-Math.PI/2,1,0,0);

        this.pushMatrix();
        this.translate(0,-0.5,-0.501);
        this.scale(6,9,1);
        this.setDiffuse(1,1,1,0);
       if(this.displayCube){
        
        this.cube.display();
       }
        this.popMatrix();
        // ---- BEGIN Primitive drawing section
        
        if (this.displayTangram) {
            this.tangram.display();
        }
        
        this.popMatrix();

        if(this.displayQuad){
            this.quad.display();
        }
        if(this.displayCubeQuad){
            this.cubequad.display();
        }
        if(this.displayTable){
            this.table.display();
        }
        /*if(this.displayChair){
            this.chair.display();
        }*/

        this.pushMatrix();
        this.translate(0,0,-6.5);
        if(this.displayChair)
            this.first_chair.display();
        this.popMatrix();

        this.pushMatrix();
        this.rotate(Math.PI,0,1,0);
        this.translate(0,0,-6.5);
        if(this.displayChair)
            this.second_chair.display();
        this.popMatrix();

        this.pushMatrix();
        this.rotate(Math.PI/2,0,1,0);
        this.translate(0,0,-6.5);
        if(this.displayChair)
            this.third_chair.display();
        this.popMatrix();

        this.pushMatrix();
        this.rotate(-Math.PI/2,0,1,0);
        this.translate(0,0,-6.5);
        if(this.displayChair)
            this.fourth_chair.display();
        this.popMatrix();

        
        // ---- END Primitive drawing section
    }
}