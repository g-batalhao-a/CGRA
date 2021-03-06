/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayTangram').name('Tangram');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayCube').name('Cube');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayQuad').name('Quad');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayCubeQuad').name('CubeQuad');

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayTable').name('Table');
        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayChair').name('Chair');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}