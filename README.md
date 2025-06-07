# learn-express

## Learning Express.js

This repository is where I practice and explore **Express.js**, the powerful and popular Node.js web framework. Here, I’m building my understanding step-by-step—from setting up a server, creating routes, to connecting with MongoDB and making API calls using Axios.

Along the way, I’ve learned some cool stuff and bumped into a few questions that I’m figuring out as I go.

---

## What I’ve Covered So Far

- Creating an Express server and defining routes (GET, POST, PUT, DELETE)
- Using middleware to handle tasks like parsing JSON requests
- Organizing routes in separate files for cleaner code, and mounting them with `app.use()`
- Working with route parameters and query parameters
- Connecting to MongoDB with Mongoose for database operations
- Performing CRUD operations with MongoDB collections
- Making external API calls inside Express routes using Axios
- Managing environment variables securely using a `.env` file
- Handling errors gracefully in async routes

---

## Questions & Doubts I’m Exploring

- How exactly do I test routes with Postman when routes are split into different files and mounted under a path like `/api`?
- What’s the best way to structure an Express project? What files and folders should I have to keep things organized?
- Why is it beneficial to separate routes into different files instead of putting everything in a single file like `index.js`?
- What’s the difference between routing in React (frontend) and routing in Express (backend)? How do they work together?
- When should I fetch data in Express instead of fetching it directly from React?
- How do I properly handle errors in Express routes, especially when dealing with async functions or external API calls?
- How do I set custom headers when making API requests from Express?
- How do environment variables work in Express, and how do I set them up using `.env` files?

---

## What’s Next?

- Build a full-stack application by connecting this Express backend with a React frontend
- Implement user authentication and session handling
- Explore more middleware, like authentication checks and centralized error handling
- Use validation libraries (e.g., Joi) to validate incoming request data
- Learn about deploying Express apps to cloud platforms
- Deepen my MongoDB knowledge with advanced queries and aggregations
