/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyChair extends CGFobject {
	constructor(scene) {
		super(scene);
        this.chairbase = new MyUnitCube(this.scene);
        this.chairback = new MyUnitCube(this.scene);
        this.frleg = new MyLeg(this.scene);
        this.flleg = new MyLeg(this.scene);
        this.brleg = new MyLeg(this.scene);
        this.blleg = new MyLeg(this.scene);
	}
	display() {
        //Scaling Chair
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.setDiffuse(1,0,0,0);
        //Puts base of chair in xz plane
        this.scene.pushMatrix();
        this.scene.translate(0,5.25,0);
        //Chair Base
        this.scene.pushMatrix();
        this.scene.scale(10,1.5,10);
        this.chairbase.display();
        this.scene.popMatrix();

        //Chair Back
        this.scene.pushMatrix();
        this.scene.translate(0,8.25,-4.5);
        this.scene.rotate(Math.PI/2,1,0,0);
        this.scene.scale(10,1,15);
        this.chairback.display();
        this.scene.popMatrix();

        //Front Left Leg
        this.scene.pushMatrix();
        this.scene.translate(-4.5,-2.75,4.5);
        this.flleg.display();
        this.scene.popMatrix();

        //Front Right Leg
        this.scene.pushMatrix();
        this.scene.translate(4.5,-2.75,4.5);
        this.frleg.display();
        this.scene.popMatrix();

        //Back Left Leg
        this.scene.pushMatrix();
        this.scene.translate(-4.5,-2.75,-4.5);
        this.flleg.display();
        this.scene.popMatrix();

        //Back Right Leg
        this.scene.pushMatrix();
        this.scene.translate(4.5,-2.75,-4.5);
        this.flleg.display();
        this.scene.popMatrix();
        this.scene.popMatrix();
        this.scene.popMatrix();
        
    }
}