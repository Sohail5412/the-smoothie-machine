class Smoothie {
    constructor(flavor, size, toppings) {
        this.flavor = flavor;
        this.size = size;
        this.toppings = toppings;
    }

    // Method to calculate the total price of the smoothie
    calculatePrice() {
        let price = 0;

        // Base price based on size
        switch (this.size) {
            case 'small':
                price += 3;
                break;
            case 'medium':
                price += 5;
                break;
            case 'large':
                price += 7;
                break;
        }

        // Additional price for each topping
        const toppingPrices = {
            'Protein Powder': 1,
            'Honey': 0.5,
            'Yogurt': 0.75
        };

        this.toppings.forEach(topping => {
            price += toppingPrices[topping];
        });

        return price;
    }

    // Method to get the description of the smoothie
    getDescription() {
        const price = this.calculatePrice();
        return `You ordered a ${this.size} ${this.flavor} smoothie with ${this.toppings.join(', ')}. Total price: $${price.toFixed(2)}.`;
    }
}

// Function to display a random encouraging message
function getRandomMessage() {
    const messages = [
        "You're awesome! Enjoy your smoothie!",
        "You deserve this delicious treat!",
        "Sip, sip, hooray!",
        "You're one smoothie away from a great mood!",
        "Cheers to health and happiness!"
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}
// Function to display a random message
function displayRandomMessage() {
    console.log("displayRandomMessage function called"); // Check if the function is called
    const randomMessage = getRandomMessage();
    console.log("Random Message:", randomMessage); // Log the random message
    const randomMessageContainer = document.getElementById('randommessage');
    randomMessageContainer.textContent = randomMessage;
}


// Call the function to display a random message when the page loads
window.onload = displayRandomMessage;

// Function to handle smoothie ordering
function orderSmoothie() {
    const flavor = document.getElementById('flavor').value;
    const size = document.getElementById('size').value;
    const toppings = Array.from(document.querySelectorAll('input[name="topping"]:checked')).map(topping => topping.value);

    const smoothie = new Smoothie(flavor, size, toppings);
    const outputDiv = document.getElementById('smoothieOutput');
    const billContainer = document.getElementById('billContent');
    const todayTomorrowContainer = document.getElementById('todayTomorrowContainer');

    outputDiv.textContent = smoothie.getDescription();

    // Display bill to the customer
    const totalPrice = smoothie.calculatePrice();
    billContainer.textContent = `Total: $${totalPrice.toFixed(2)}`;

    // Hide smoothie form and show image container
    todayTomorrowContainer.style.display = 'flex';
    document.querySelector('.container').style.display = 'none';

    // Display a random encouraging message
    const messageContainer = document.getElementById('message');
    messageContainer.textContent = getRandomMessage();

}

// Function to reset the form and clear the smoothie output
// Function to reset the form and clear the smoothie output
// Function to reset the form and refresh the page
function resetForm() {
    // Reset the form


    // Refresh the page
    window.location.reload();
}



// Function to randomly select a smoothie image
function setRandomSmoothieImage() {
    const smoothieImages = [
        'https://images.pexels.com/photos/4112870/pexels-photo-4112870.png', 
        'https://images.pexels.com/photos/3028139/pexels-photo-3028139.jpeg', 
        'https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg', 
        'https://images.pexels.com/photos/4753640/pexels-photo-4753640.jpeg'
    ];
    const randomIndex = Math.floor(Math.random() * smoothieImages.length);
    const imageUrl = smoothieImages[randomIndex];
    const smoothieImage = document.getElementById('smoothieImage');
    smoothieImage.style.backgroundImage = `url(${imageUrl})`;
}
// Call the function when the page loads
window.onload = setRandomSmoothieImage;


displayRandomMessage();
