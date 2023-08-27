class Ground extends Box{
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.body.isStatic = true;
    }

}