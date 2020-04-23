/**
* MyTerrain
* @constructor
*/
class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);
        this.plane = new MyPlane(this.scene);
        this.plane.initBuffers();
        this.texture=new CGFtexture(this.scene,'images/terrain.jpg');
        this.map=new CGFtexture(this.scene,'images/heightmap.jpg');
        this.material=new CGFappearance(this.scene);
        this.material.setTexture(this.texture);
		this.material.setTextureWrap('REPEAT', 'REPEAT');
        this.shader=new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.shader.setUniformsValues({ uSampler1: 1 });
        this.shader.setUniformsValues({ uSampler2: 2 });
        
        
    }
    
    display(){
        
        this.material.apply();
        this.scene.setActiveShader(this.shader);
        this.texture.bind(1);
        this.map.bind(2);
        this.scene.pushMatrix();
        this.scene.translate(0,-24.9,0);
        this.scene.rotate(-90.0*Math.PI/180.0, 1, 0, 0);
        this.scene.scale(50,50,1);
        this.plane.display();

        this.scene.popMatrix();
        // restore default shader (will be needed for drawing the axis in next frame)
		this.scene.setActiveShader(this.scene.defaultShader);
    }

}