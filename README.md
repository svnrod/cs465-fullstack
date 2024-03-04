# cs465-fullstack
CS-465 Full Stack Development with MEAN

Architecture

- Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
When developing and completing the project, we were tasked to develop the project with Express at first and then Angular. To briefly define, Angular is a frontend framework that is used to build user-facing elements for a website. Angular enables developers to dynamically render content directly in the browser without having to refresh the page. On the other hand, Express is used to render the application through the back-end server. This differs because instead of using Angular and depending on the client's end to render page content, the content of the page through an Express application is rendered beforehand on the back-end server side. Angular is component based and consists of separate building blocks that provide templates and styling for elements on the screen. Express uses the server-side to handle application logic through routes, models, and views. To simplify, routes provide logic paths for your project, models define data schemas, and views are what is displayed graphically on the screen. Both methods and technologies are efficient for their own particular use cases but one might decide to choose Angular over Express when developing Single-Page Applications (SPAs). Since Angular is modular based and can render content dynamically on the page, Angular is a more viable choice for developers who want to develop SPA applications.

- Why did the backend use a NoSQL MongoDB database?
The backend for this project utilized a NoSQL MongoDB database because it offered the most flexibility and performance for our use case. With a NoSQL MongoDB database, we are better able to implement our Schema for our data since MongoDB stores data using a JSON-like format. With this, information and data may be interacted with by supplying the database with data entries that contain different types of fields and schema structures.

Functionality

- How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON differs from JavaScript as JSON is a lightweight and flexible way to handle and interchange data in a formatted way. JSON is more easy to read for the average person and JavaScript may be more complicated to read. JavaScript is a language that could be used to develop dynamic and interactive webpages meanwhile JSON could be seen as the 'skeleton' for all types of data within the project. This skeleton makes it easier for developers to handle their data and efficiently manipulate their database. JSON and JavaScript tie in together as they share many commonalities since JSON derives from JavaScript. When dealing with JSON, JSON can also be encoded and parsed into JavaScript.

- Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
  When developing the project, I refracted the code for the TripsAddTrip and tripsUpdateTrip functions. I initially handled all logic for these methods within the functions themselves but then later developed a method for getUser() that I later implemented into these methods and refactored my code. This resulted in a more efficient process and provided me with a structured and readable way to read my code.

Testing

- Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.
In a nutshell, these methods for request requesting and retrieving from API endpoints are ways to conduct CRUD operations. CRUD stands for Create, Read, Update, and Delete. These CRUD functions enable us to manipulate data from a database to update information, add new information, get information, and delete previous data entries. Security is enhanced with API endpoints by conducting valid testing, and administering roles and authentication tokens for specific user types.

Reflection

- How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?
I have learned a ton in this course and feel I have acquired a solid foundation for Full-Stack applications. This perfectly aligns with my professional goals as I continue to grow into becoming a full-fledged full-stack engineer who is capable of developing scalable applications efficiently and reliably. Throughout the course, I have learned about using Angular for Single-Page Applications, Express for back-end server development, HTML/CSS for templating, MongoDB for implementing a database, and TypeScript for application logic.
