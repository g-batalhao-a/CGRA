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
        this.gui.add(this.scene, 'displayObject').name('Display Object');
        this.gui.add(this.scene,'currentObject',this.scene.objectList).onChange(this.scene.updateObject.bind(this.scene)).name('Object');
        this.gui.add(this.scene,'currentTexture',this.scene.textureList).onChange(this.scene.updateTexture.bind(this.scene)).name('Texture');
        //Sliders elements
        this.gui.add(this.scene,'slices',0,100,1).onChange(this.scene.updateSlices.bind(this.scene)).name('Number of Slices');
        return true;
    }
}