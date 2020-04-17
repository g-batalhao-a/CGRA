/**
* MyPyramid
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, slices, stacks) {
        super(scene);
        this.slices = slices;
        this.stacks = stacks;
        this.sphere= new MySphere(this.scene, this.slices, this.stacks);
        this.cylinder= new MyCylinder(this.scene, this.slices);
        this.quad = new MyQuadDSided(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.initBuffers();

        this.angle_y=0;
        this.speed=0;
        this.x_pos=0;this.y_pos=0;this.z_pos=0;

    }
    /*
    initBuffers() {
        this.vertices = [];
        this.indices = [];
        this.normals = [];

        var ang = 0;
        var alphaAng = 2*Math.PI/this.slices;

        for(var i = 0; i < this.slices; i++){
            // All vertices have to be declared for a given face
            // even if they are shared with others, as the normals 
            // in each face will be different

            var sa=Math.sin(ang);
            var saa=Math.sin(ang+alphaAng);
            var ca=Math.cos(ang);
            var caa=Math.cos(ang+alphaAng);

            this.vertices.push(0,2,0);
            this.vertices.push(ca, 0, -sa);
            this.vertices.push(caa, 0, -saa);

            // triangle normal computed by cross product of two edges
            var normal= [
                saa-sa,
                ca*saa-sa*caa,
                caa-ca
            ];

            // normalization
            var nsize=Math.sqrt(
                normal[0]*normal[0]+
                normal[1]*normal[1]+
                normal[2]*normal[2]
                );
            normal[0]/=nsize;
            normal[1]/=nsize;
            normal[2]/=nsize;

            // push normal once for each vertex of this triangle
            this.normals.push(...normal);
            this.normals.push(...normal);
            this.normals.push(...normal);

            this.indices.push(3*i, (3*i+1) , (3*i+2) );

            ang+=alphaAng;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }*/
    
    updateBuffers(complexity){
        this.slices = 3 + Math.round(9 * complexity); //complexity varies 0-10, so slices varies 3-93
        this.stacks = 3 + Math.round(9*complexity);
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }

    update(){
        this.x_pos += this.speed * Math.sin(this.angle_y*Math.PI/180);
        this.z_pos += this.speed * Math.cos(this.angle_y*Math.PI/180);
    }

    turn(v) {
        this.angle_y += v;
    }

    accelerate(v) {
        this.speed += v;
    }

    reset() {
        this.x_pos = 0;
        this.y_pos = 0;
        this.z_pos = 0;
        this.speed = 0;
        this.angle_y = 0;
    }
    
    display(){
        this.scene.setDiffuse(0,0,1);
        this.scene.setSpecular(0, 0, 0, 1);
        this.scene.setAmbient(0, 0, 0.5, 1);

        //Blimp balloon
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,1);
        this.sphere.display();
        this.scene.popMatrix();
        
        //Cockpit
        this.scene.pushMatrix();
        this.scene.translate(0,-0.45,0);
        this.scene.scale(0.10,0.10,1.1);
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(90.0*Math.PI/180.0, 1, 0, 0);
        this.cylinder.display();
        this.scene.popMatrix();

        //Ends of the cockpit
        this.scene.pushMatrix();
        this.scene.translate(0,-0.45,0.563);
        this.scene.scale(0.10,0.10,0.10);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,-0.45,-0.563);
        this.scene.scale(0.10,0.10,0.10);
        this.sphere.display();
        this.scene.popMatrix();

        //Engine
        this.scene.pushMatrix();
        this.scene.translate(0.1,-0.48,-0.58);
        this.scene.scale(0.05,0.05,0.1);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.1,-0.48,-0.58);
        this.scene.scale(0.05,0.05,0.1);
        this.sphere.display();
        this.scene.popMatrix();


        //Flight Control Surfaces
        this.scene.pushMatrix();
        this.scene.rotate(90.0*Math.PI/180.0, 0, 0, 1);

        this.scene.pushMatrix();
        this.scene.translate(-0.35,0,-1.12);
        this.scene.rotate(90.0*Math.PI/180.0, 1, 0, 0);
        this.scene.scale(0.4,0.4,0.4);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.35,0,-0.92);
        this.scene.scale(0.141,0.141,0.141);
        this.scene.rotate(135.0*Math.PI/180.0, 0, 1, 0);
        this.scene.rotate(90.0*Math.PI/180.0, 1, 0, 0);
        this.triangle.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0.35,0,-1.12);
        this.scene.rotate(90.0*Math.PI/180.0, 1, 0, 0);
        this.scene.scale(0.4,0.4,0.4);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.35,0,-0.92);
        this.scene.scale(0.141,0.141,0.141);
        this.scene.rotate(135.0*Math.PI/180.0, 0, 1, 0);
        this.scene.rotate(90.0*Math.PI/180.0, 1, 0, 0);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.35,0,-1.12);
        this.scene.rotate(90.0*Math.PI/180.0, 1, 0, 0);
        this.scene.scale(0.4,0.4,0.4);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.35,0,-0.92);
        this.scene.scale(0.141,0.141,0.141);
        this.scene.rotate(135.0*Math.PI/180.0, 0, 1, 0);
        this.scene.rotate(90.0*Math.PI/180.0, 1, 0, 0);
        this.triangle.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(0.35,0,-1.12);
        this.scene.rotate(90.0*Math.PI/180.0, 1, 0, 0);
        this.scene.scale(0.4,0.4,0.4);
        this.quad.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.35,0,-0.92);
        this.scene.scale(0.141,0.141,0.141);
        this.scene.rotate(135.0*Math.PI/180.0, 0, 1, 0);
        this.scene.rotate(90.0*Math.PI/180.0, 1, 0, 0);
        this.triangle.display();
        this.scene.popMatrix();



    }

    

}

