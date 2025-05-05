# API

### **What is an API?**

An **API (Application Programming Interface)** is a set of rules and protocols that allow software applications to communicate with each other. It defines how requests and responses should be structured.

- **Types of APIs**:

  - **REST API** (Representational State Transfer) – Uses standard HTTP methods like GET, POST, PUT, DELETE.
  - **SOAP API** (Simple Object Access Protocol) – More rigid, XML-based protocol.
  - **GraphQL API** – Allows clients to specify the structure of responses.
  - **Web API** – APIs exposed over the web for remote access.

- **Common Uses**:
  - Fetching data from a server.
  - Interacting with third-party services (e.g., payment gateways, social media).
  - Automating tasks within software applications.

---

### **API in JavaScript**

JavaScript provides several ways to work with APIs, typically using **fetch()** or external libraries like Axios.

#### **Making an API Request using Fetch**

```javascript
fetch("https://api.example.com/data")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

- **fetch()** makes an HTTP request to the API.
- **response.json()** converts the response to a JavaScript object.
- **.then()** handles successful responses.
- **.catch()** captures errors.

#### **Using Async/Await for API Requests**

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();
```

- `async/await` makes the request look cleaner and easier to read.
- The `try/catch` block handles errors.

---

### **Key Concepts**

- **HTTP Methods:** GET (fetch data), POST (send data), PUT (update data), DELETE (remove data).
- **Headers:** Used to send metadata (e.g., authentication tokens).
- **Status Codes:** 200 (Success), 404 (Not Found), 500 (Server Error), etc.
- **CORS (Cross-Origin Resource Sharing):** Security mechanism controlling API access.
- **JSON (JavaScript Object Notation):** Common format for API responses.

## **REST API Notes** 🚀

### **What is REST API?**

A **REST API (Representational State Transfer API)** is an architectural style for designing networked applications that follow standardized principles for communication.

### **Principles of REST APIs:**

1. **Stateless** – No stored client data; each request is independent.
2. **Client-Server Architecture** – Separation between client (frontend) and server (backend).
3. **Cacheable** – Responses can be cached to improve performance.
4. **Uniform Interface** – Standardized communication methods (e.g., HTTP).
5. **Layered System** – Components operate independently across layers.

### **Common HTTP Methods:**

| Method     | Purpose                             |
| ---------- | ----------------------------------- |
| **GET**    | Retrieve data from the server.      |
| **POST**   | Send new data to the server.        |
| **PUT**    | Update existing data on the server. |
| **DELETE** | Remove data from the server.        |

### **RESTful API Example (Using Fetch in JavaScript):**

```javascript
fetch("https://api.example.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

- **fetch()** makes an API request to fetch user data.
- **response.json()** converts the response into a JavaScript object.
- **catch()** handles any errors in the request.

### **REST API Status Codes:**

| Code | Meaning                              |
| ---- | ------------------------------------ |
| 200  | OK (Successful request)              |
| 201  | Created (New resource added)         |
| 400  | Bad Request (Invalid input)          |
| 401  | Unauthorized (Authentication needed) |
| 403  | Forbidden (No permission)            |
| 404  | Not Found (Resource missing)         |
| 500  | Internal Server Error (Server issue) |

### **Authentication in REST APIs:**

- **API Keys** – A secret key used for access control.
- **OAuth** – Secure authentication method (common in third-party apps).
- **JWT (JSON Web Token)** – Token-based authentication for session management.

---

Would you like notes on REST API vs GraphQL? 🚀
