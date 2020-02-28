/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
            -0.5, -0.5, -0.5,	//0
			-0.5, -0.5, 0.5,	//1
			-0.5, 0.5, -0.5,	//2
            -0.5, 0.5, 0.5,		//3
            0.5,0.5,0.5,        //4
            0.5,-0.5,0.5,       //5
            0.5,-0.5,-0.5,      //6
            0.5,0.5,-0.5        //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			2, 0, 1,    //Face Esquerda
            1, 3, 2,
            5,6,7,      //Face Direita
            7,4,5,
            3,4,7,      //Face Superior
            7,2,3,
            6,5,1,      //Face Inferior
            1,0,6,
            1,5,4,      //Face Frontal
            4,3,1,
            7,6,0,      //Face Traseira
            0,2,7
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

