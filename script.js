/* 
Using the E-commerce Classes
Demonstrate how to use the classes Customer, Product, and Cart to create an e-commerce system.
*/

class Customer {
    constructor(email) {
        this.email = email;
        this.cart = new Cart();
        this.orders = [];
    }

    checkOut() {
        const order = {
            products: this.cart.contents.map(item => ({
                product: item.product,
                quantity: item.quantity,
            })),
            totalAmount: this.cart.totalAmount,
        }

        this.orders.push(order);
        this.cart.clearCartContents();
        return this;
        // TODO: Implement the checkOut method
        // This method finalizes the purchase by adding the cart contents to the orders list.
        // Create a new order object and populate it with the products from the cart and the total amount.
        // Add the order object to the orders list.
        // Clear the cart contents after checking out.
        // Return the updated Customer object.
    }
}

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.isActive = true;
    }

    archive() {
        this.isActive = false;
        return this;
        // TODO: Implement the archive method
        // This method marks the product as inactive or archived.
        // Set the isActive property of the product to false.
        // Return the updated Product object.
    }

    updatePrice(newPrice) {
        this.price = newPrice;
        return this
        // TODO: Implement the updatePrice method
        // This method updates the price of the product.
        // Set the price property of the product to the new price.
        // Return the updated Product object.
    }
}

class Cart {
    constructor() {
        this.contents = [];
        this.totalAmount = 0;
    }

    addToCart(product, quantity) {
        const item = {
            product: product,
            quantity: quantity
        };
        this.contents.push(item);
        return this;
        // TODO: Implement the addToCart method
        // This method adds a product to the cart with the specified quantity.
        // Create a new item object containing the product and quantity.
        // Add the item object to the contents array.
        // Return the updated Cart object.
    }

    showCartContents() {
        this.contents.forEach(item => {
            console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}`)
        })
        // TODO: Implement the showCartContents method
        // This method displays the current contents of the cart.
        // Print each item in the contents array, including the product name and quantity.
    }

    updateProductQuantity(name, quantity) {
        const item = this.contents.find(item => item.product,name === name)
        if (item) {
            item.quantity = quantity;
        }
        return this
        // TODO: Implement the updateProductQuantity method
        // This method updates the quantity of a specific product in the cart.
        // Find the item with the matching product name in the contents array.
        // Update the quantity of the item to the new value.
        // Return the updated Cart object.
    }

    clearCartContents() {
        this.contents = [];
        return this
        // TODO: Implement the clearCartContents method
        // This method clears the contents of the cart.
        // Set the contents array to an empty array.
        // Return the updated Cart object.
    }

    computeTotal() {
        let total = 0
        this.contents.forEach(item =>{
            total += item.product.price * item.quantity
        })
        this.totalAmount = total;
        return this
        // TODO: Implement the computeTotal method
        // This method calculates the total amount for all products in the cart.
        // Iterate over each item in the contents array.
        // Multiply the price of each product by its quantity and accumulate the total amount.
        // Assign the calculated total amount to the totalAmount property of the cart.
        // Return the updated Cart object.
    }
}

// number 1
const customer = new Customer('john@example.com');

// number 2
const product1 = new Product('Soap', 9.99);
const product2 = new Product('Shampoo', 12.99);

customer.cart.addToCart(product1, 3)
customer.cart.addToCart(product2, 2);
console.log(customer.cart.contents);

// number 3
customer.cart.updateProductQuantity('Soap', 5);

// number 4
customer.cart.showCartContents();

// number 5
customer.cart.computeTotal();
console.log(customer.cart.totalAmount);

// number 6
customer.checkOut();
console.log(customer.orders);

// number 7
product1.archive();
console.log(product1)

// number 8
product2.updatePrice(14.99);
console.log(product2);

/* 
Demonstrate how to use the classes Customer, Product, and Cart to create an e-commerce system. We'll go through the process of adding products to a cart, updating quantities, checking out, displaying the order details, as well as other available methods.

Step 1: Create a Customer

Instantiate a Customer object by providing an email address.
Example: const customer = new Customer('john@example.com');

Step 2: Add Products to the Cart
  Instantiate Product objects by providing the name and price.

  const product1 = new Product('Soap', 9.99);
  const product2 = new Product('Shampoo', 12.99);

  Add products to the cart using the addToCart method of the customer's cart.

  Specify the product and quantity as arguments.

  customer.cart.addToCart(product1, 3);
  customer.cart.addToCart(product2, 2);

  After adding the products, the cart contents will be as follows:

  console.log(customer.cart.contents);

  // Output: 
    [ 
      { product: Product { name: 'Soap', price: 9.99, isActive: true }, quantity: 3 },{ product: Product { name: 'Shampoo', price: 12.99, isActive: true }, quantity: 2 } 
    ]
  
Step 3: Update Product Quantity in the Cart

  Use the updateProductQuantity method of the cart to modify the quantity of a specific product.

  Provide the product name and the desired quantity as arguments.

  customer.cart.updateProductQuantity('Soap', 5);

  After updating the quantity, the cart contents will be as follows:

  console.log(customer.cart.contents);
  // Output: [ { product: Product { name: 'Soap', price: 9.99, isActive: true }, quantity: 5 },
  //           { product: Product { name: 'Shampoo', price: 12.99, isActive: true }, quantity: 2 } ]

Step 4: Display Cart Contents

  Use the showCartContents method of the cart to display the current contents of the cart.

  customer.cart.showCartContents();

  // Output: [ { product: Product { name: 'Soap', price: 9.99, isActive: true }, quantity: 5 },
  //            { product: Product { name: 'Shampoo', price: 12.99, isActive: true }, quantity: 2 } ]

Step 5: Compute Cart Total

  Use the computeTotal method of the cart to calculate the total amount for all products in the cart.

  customer.cart.computeTotal();

  After computing the total, you can access the totalAmount property of the cart to see the calculated total:

  console.log(customer.cart.totalAmount);
  // Output: 78.93

Step 6: Check Out and Create an Order

  Use the checkOut method of the customer to finalize the purchase and create an order.

  customer.checkOut();

  After checking out, the order details will be stored in the orders property of the customer:


  console.log(customer.orders);
  // Output: [ { products: [ { product: Product { name: 'Soap', price: 9.99, isActive: true }, quantity: 5 },
  //                        { product: Product { name: 'Shampoo', price: 12.99, isActive: true }, quantity: 2 } ],
  //             totalAmount: 78.93 } ]

Step 7: Archive a Product

  Use the archive method of a Product object to mark it as inactive or archived.

  product1.archive();

  After archiving a product, the isActive property of that product will be set to false.

Step 8: Update Product Price

  Use the updatePrice method of a Product object to change its price.

  Provide the new price as an argument.

  product2.updatePrice(14.99);

  After updating the price, the price property of the product will be modified accordingly.
*/

