class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class Ui {
    addProduct(product) {
        const productList = document.getElementById("product-list")
        const element = document.createElement("div")
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product Name</strong>: ${product.name}
                    <strong>Product price</strong>: ${product.price}
                    <strong>Product Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `
        productList.appendChild(element)
    }
    resetForm(){
        document.getElementById("product-form").reset()
    }
    deleteProduct(e) {
        console.log(e.parentElement)
        if(e.name === "delete"){
            e.parentElement.parentElement.parentElement.remove()
        }
        this.showMessage("producto eliminado satisfactoria mente","danger")
    }
    showMessage(message, cssClass) {
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass}`
        div.appendChild(document.createTextNode(message))
        //showing in Dom
        const container = document.querySelector(".container")
        const app = document.querySelector("#app")
        container.insertBefore(div,app)
        setTimeout(() => {
            document.querySelector(".alert").remove()            
        }, 2000);

    }
}

// D0M - events

document.getElementById("product-form").addEventListener("submit", (e) => {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const year = document.getElementById("year").value;

    const product = new Product(name, price, year)
    const ui = new Ui();
    if(name === "" || price === "" || year === ""){
        return ui.showMessage("todos los campos deben estar llenos","danger")
    }
    ui.addProduct(product)
    ui.resetForm()
    ui.showMessage("producto agregado satisfactoriamente", "success")


    e.preventDefault();

})
document.getElementById("product-list").addEventListener("click",(e)=>{
    const ui = new Ui();
    //console.log(e.target)
    ui.deleteProduct(e.target)
})