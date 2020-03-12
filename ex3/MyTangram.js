/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials(scene);
		this.baseSquare = new MyDiamond(this.scene);
        this.orangeTriangle = new MyTriangleBig(this.scene);
        this.purpleTriangle = new MyTriangleSmall(this.scene);
        this.yellowParallelogram = new MyParallelogram(this.scene);
        this.redTriangle = new MyTriangleSmall(this.scene);
        this.blueTriangle = new MyTriangleBig(this.scene);
        this.pinkTriangle = new MyTriangle(this.scene);
        this.objects = [this.baseSquare, this.triangle, this.paralelogram, this.triangleBig, this.triangleSmall];
    }
    initMaterials(scene) {
        //green color
        this.green = new CGFappearance(scene);
        this.green.setAmbient(0,1*0.5,0,1.0);
        this.green.setDiffuse(0,1*0.7,0,1.0);
        this.green.setSpecular(0,1,0,1.0);
        this.green.setShininess(10.0);

        //orange color
        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(1*0.5,0.647*0.5,0,1.0);
        this.orange.setDiffuse(1*0.7,0.647*0.7,0,1.0);
        this.orange.setSpecular(1,0.647,0,1.0);
        this.orange.setShininess(10.0);

        //light blue color
        this.blue = new CGFappearance(scene);
        this.blue.setAmbient(0,0.749*0.5,1*0.5,1.0);
        this.blue.setDiffuse(0,0.749*0.7,1*0.7,1.0);
        this.blue.setSpecular(0,0.749,1,1.0);
        this.blue.setShininess(10.0);

        //yellow color
        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(1*0.5,1*0.5,0,1.0);
        this.yellow.setDiffuse(1*0.7,1*0.7,0,1.0);
        this.yellow.setSpecular(1,1,0,1.0);
        this.yellow.setShininess(10.0);

        //purple color
        this.purple = new CGFappearance(scene);
        this.purple.setAmbient(0.58*0.5,0,0.827*0.5,1.0);
        this.purple.setDiffuse(0.58*0.7,0,0.827*0.7,1.0);
        this.purple.setSpecular(0.58,0,0.827,1.0);
        this.purple.setShininess(10.0);

        //pink color
        this.pink = new CGFappearance(scene);
        this.pink.setAmbient(1*0.5,0.714*0.5,0.757*0.5,1.0);
        this.pink.setDiffuse(1*0.7,0.714*0.7,0.757*0.7,1.0);
        this.pink.setSpecular(1,0.714,0.757,1.0);
        this.pink.setShininess(10.0);

        //red color
        this.red = new CGFappearance(scene);
        this.red.setAmbient(1*0.5,0,0,1.0);
        this.red.setDiffuse(1*0.7,0,0,1.0);
        this.red.setSpecular(1,0,0,1.0);
        this.red.setShininess(10.0);
    }

	display() {
        this.scene.pushMatrix();
        this.scene.translate(0, -Math.sqrt(8), 0);

        // BASE SQUARE
        var rot = [Math.cos(Math.PI / 4), Math.sin(Math.PI / 4), 0.0, 0.0,
                    -Math.sin(Math.PI / 4), Math.cos(Math.PI / 4), 0.0, 0.0,
                    0.0, 0.0, 1.0, 0.0,
                    0.0, 0.0, 0.0, 1.0];

        var tra = [1.0, 0.0, 0.0, 0.0,
                    0.0, 1.0, 0.0, 0.0, 
                    0.0, 0.0, 1.0, 0.0,
                    0.0, -Math.sqrt(2) / 2, 0.0, 1.0];
        
        this.scene.pushMatrix();
        this.scene.multMatrix(tra);
        this.scene.multMatrix(rot);
        this.scene.setDiffuse(0,1*0.7,0,1.0);
        this.baseSquare.display();
        this.scene.popMatrix();


        // ORANGE TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(-Math.sqrt(2), Math.sqrt(2), 0);
        this.scene.rotate(-3 * Math.PI/4, 0, 0, 1);
        this.scene.setDiffuse(1*0.7,0.647*0.7,0,1.0);
        this.orangeTriangle.display();
        this.scene.popMatrix()

        // PURPLE TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2) / 2, Math.sqrt(2) / 2, 0);
        this.scene.rotate(3 * Math.PI/4, 0, 0, 1);
        this.scene.setDiffuse(0.58*0.7,0,0.827*0.7,1.0);
        this.purpleTriangle.display();
        this.scene.popMatrix();

        // RED TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), 0, 0);
        this.scene.translate(Math.sqrt(2) / 2, Math.sqrt(2) / 2, 0);
        this.scene.rotate(3 * Math.PI/4, 0, 0, 1);
        this.scene.setDiffuse(1*0.7,0,0,1.0);
        this.redTriangle.display();
        this.scene.popMatrix();

        // YELLOW PARALLELOGRAM
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), 0, 0);
        this.scene.rotate(-Math.PI / 4, 0, 0, 1);
        this.scene.scale(-1, 1, 1);
        this.scene.setDiffuse(1*0.7,1*0.7,0,1.0);
        this.yellowParallelogram.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

        // BLUE TRIANGLE
        this.scene.pushMatrix();
        this.scene.setDiffuse(0,0.749*0.7,1*0.7,1.0);
        this.blueTriangle.display();
        this.scene.popMatrix();

        // PINK TRIANGLE
        this.scene.pushMatrix();
        this.scene.translate(0, 2, 0);
        this.scene.rotate(-3 * Math.PI / 4, 0, 0, 1);
        this.scene.setDiffuse(1*0.7,0.714*0.7,0.757*0.7,1.0);
        this.pinkTriangle.display();
        this.scene.popMatrix();

        this.normals = [
            this.baseSquare.normals[0],
            this.baseSquare.normals[1],
            this.baseSquare.normals[2],
            this.baseSquare.normals[3],
            this.baseSquare.normals[4],
            this.baseSquare.normals[5],
            this.baseSquare.normals[6],
            this.baseSquare.normals[7],
            this.orangeTriangle.normals[0],
            this.orangeTriangle.normals[1],
            this.orangeTriangle.normals[2],
            this.orangeTriangle.normals[3],
            this.orangeTriangle.normals[4],
            this.orangeTriangle.normals[5],
            this.purpleTriangle.normals[0],
            this.purpleTriangle.normals[1],
            this.purpleTriangle.normals[2],
            this.purpleTriangle.normals[3],
            this.purpleTriangle.normals[4],
            this.purpleTriangle.normals[5],
            this.redTriangle.normals[0],
            this.redTriangle.normals[1],
            this.redTriangle.normals[2],
            this.redTriangle.normals[3],
            this.redTriangle.normals[4],
            this.redTriangle.normals[5],
            this.yellowParallelogram.normals[0],
            this.yellowParallelogram.normals[1],
            this.yellowParallelogram.normals[2],
            this.yellowParallelogram.normals[3],
            this.yellowParallelogram.normals[4],
            this.yellowParallelogram.normals[5],
            this.yellowParallelogram.normals[6],
            this.yellowParallelogram.normals[7],
            this.blueTriangle.normals[0],
            this.blueTriangle.normals[1],
            this.blueTriangle.normals[2],
            this.blueTriangle.normals[3],
            this.blueTriangle.normals[4],
            this.blueTriangle.normals[5],
            this.pinkTriangle.normals[0],
            this.pinkTriangle.normals[1],
            this.pinkTriangle.normals[2],
            this.pinkTriangle.normals[3],
            this.pinkTriangle.normals[4],
            this.pinkTriangle.normals[5],
		];
    }
    updateBuffers(complexity){
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}