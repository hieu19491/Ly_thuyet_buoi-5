class Product{
    id;
    name;
    img;
    quantity;
    unit;
    price;

    constructor(id, name, img, quantity, unit, price) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.quantity = quantity;
        this.unit = unit;
        this.price = price;
    }

    getId() {
        return this.id;
    }

    setId(value) {
        this.id = value;
    }
    getImg(){
        return this.img;
    }
    setImg(value){
        this.img = value;
    }

    getName() {
        return this.name;
    }

    setName(value) {
        this.name = value;
    }

    getQuantity() {
        return this.quantity;
    }

    setQuantity(value) {
        this.quantity = value;
    }

    getUnit(){
        return this.unit;
    }
    setUnit(value){
        this.unit = value;
    }

    getPrice() {
        return this.price;
    }

    setPrice(value) {
        this.price = value;
    }
    update(){
        this.getId()
        this.setId()
        this.getImg()
        this.setImg()
    }
}