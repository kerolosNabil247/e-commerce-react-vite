# Smartphone E-commerce Platform

This project is a responsive e-commerce platform built using Vite React, focusing on showcasing and selling smartphones. It incorporates a variety of front-end technologies to create an engaging and functional user experience.

## Technologies Used

* **Vite:** A build tool that provides a fast and lean development experience for modern web projects.
* **React:** A JavaScript library for building user interfaces.
* **HTML:** The standard markup language for creating web pages.
* **CSS:** The stylesheet language used to describe the presentation of HTML documents.
* **Bootstrap:** A popular CSS framework for building responsive and mobile-first websites.
* **Animate.css:** A library of ready-to-use, cross-browser CSS animations.
* **AOS (Animate On Scroll) Library:** A JavaScript library that allows you to animate elements as you scroll down.
* **Redux:** A predictable state management library for JavaScript applications, used here for managing the shopping cart.

## Key Features

* **Dynamic Product Listings:**
    * Displays smartphone products with their image, title, rating, and price.
    * Indicates product stock status: "In Stock," "Low Stock," or "Out of Stock."
    * "Add to Cart" button on each product card.
* **Shopping Cart:**
    * A persistent cart counter in the navigation bar, updated using **Redux**.
    * Dedicated "Cart" page accessible via the navigation bar.
    * Displays a card for each product added to the cart.
    * **Implements robust duplicate checking using Redux to ensure that the same product cannot be added to the cart multiple times.**
* **Product Details Page:**
    * Accessible by clicking on a product title.
    * Displays the main product image and additional images in a gallery.
    * Shows detailed product information including rating and description.
    * "Add to Cart" and "Buy Now" buttons.
    * Quantity control (`- 1 +`) to adjust the number of items.
    * Section for user reviews (currently static or placeholder).
    * Alert message if the user tries to add an "Out of Stock" product to the cart.
* **User Registration:**
    * Dedicated "Register" page with fields for Name, Username, Email Address, Password, and Confirm Password.
    * **Input Validation (using Regular Expressions):**
        * Name: Minimum 3 characters.
        * Username: Cannot contain spaces.
        * Email Address: Valid email format.
        * Password: Strong password requirements (e.g., minimum length, uppercase, lowercase, numbers, symbols - *you might want to specify these in more detail if implemented*).
        * Confirm Password: Must match the Password field.
* **Language Toggle:**
    * "English" and "Arabic" options in the navigation bar.
    * Implements basic Left-to-Right (LTR) and Right-to-Left (RTL) layout switching using React Context (does not include actual translation).

## State Management

* **`useState` and `useEffect`:** Used for managing local component state and side effects within individual components.
* **Redux:** Used for global state management, specifically for handling the shopping cart (adding items, removing items, managing quantities, and preventing duplicates).
* **React Context API:** Implemented for managing the language direction globally across the application.
  
## Live Website

* https://e-commerce-react-vite-nu.vercel.app/


## Author

[Kerolos Nabil]

