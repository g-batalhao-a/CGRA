/**
 * MyBillBoard
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBillboard extends CGFobject {
	constructor(scene) {
		super(scene);
        this.board= new MyPlane(this.scene,60);
        this.board_back = new MyPlane(this.scene,60);
        this.bar= new MyPlane(this.scene,60);
        this.support1=new MyQuadDSided(this.scene);
        this.support2=new MyQuadDSided(this.scene);

        this.shader=new CGFshader(this.scene.gl, "shaders/progress.vert", "shaders/progress.frag");
        this.texture=new CGFappearance(this.scene);
        this.texture.setAmbient(0.9, 0.9, 0.9, 1);
        this.texture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.texture.setSpecular(0.1, 0.1, 0.1, 1);
        this.texture.setShininess(10.0);
        this.texture.loadTexture('images/billboard.png');
        this.texture.setTextureWrap('REPEAT', 'REPEAT');

        this.texture_supp=new CGFappearance(this.scene)
        this.texture_supp.setAmbient(0.9, 0.9, 0.9, 1);
        this.texture_supp.setDiffuse(0.0, 0.45, 0.9, 1);
        this.texture_supp.setSpecular(0.1, 0.1, 0.1, 1);
        this.texture_supp.setShininess(10.0);

        this.drop=0;
        this.shader.setUniformsValues({ dropped: this.drop });

    }
    update(){
        this.shader.setUniformsValues({ dropped: ++this.drop });
        
    }
    reset(){
        this.drop=0;
        this.shader.setUniformsValues({ dropped: this.drop });
    }
    display(){
        this.scene.pushMatrix();
        this.scene.translate(11,8,14);
        this.scene.rotate(45*Math.PI/180.0, 0, 1, 0);

        this.scene.pushMatrix();
        this.scene.translate(0,-1,0);
        this.texture_supp.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.95,0,0);
        this.scene.scale(0.1,1,1);
        this.support1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.95,0,0);
        this.scene.scale(0.1,1,1);
        this.support2.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(2,1,1);

        this.scene.pushMatrix();
        this.scene.rotate(-180.0*Math.PI/180.0, 0, 1, 0);
        this.board_back.display();
        this.scene.popMatrix(); 

        this.scene.pushMatrix();
        this.texture.apply();
        this.board.display();
        this.scene.popMatrix(); 

        this.scene.popMatrix();
        
        this.scene.setActiveShader(this.shader);
        this.scene.scale(1.5,0.2,1);

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.01);
        this.bar.display();
        this.scene.popMatrix(); 
        
        this.scene.popMatrix();
        
    }
}