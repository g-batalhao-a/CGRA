/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTable extends CGFobject {
	constructor(scene) {
		super(scene);
        this.tabletop = new MyUnitCube(this.scene);
        this.frleg = new MyLeg(this.scene);
        this.flleg = new MyLeg(this.scene);
        this.brleg = new MyLeg(this.scene);
        this.blleg = new MyLeg(this.scene);
	}
	display() {
        
        //Puts base of chair in xz plane
        this.scene.pushMatrix();
        this.scene.translate(0,5.25,0);
        //TableTop
        this.scene.pushMatrix();
        this.scene.scale(10,0.5,10);
        this.tabletop.display();
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
    }
}