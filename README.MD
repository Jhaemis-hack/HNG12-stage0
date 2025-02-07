# Express API

This is a simple Express.js API that serves a JSON response containing an email address, the current datetime, and a GitHub repository URL.

## Features
- configured **Express.js** to create a lightweight API.
- Implements **CORS** to allow cross-origin requests.
- Provides a single endpoint (`/`) that returns JSON data.

## Requirements
To run this project, you need to have **Node.js** installed on your system.

## Installation & Setup
Follow these steps to get the API running locally:

1. Clone the repository:
   ```sh
   git clone https://github.com/Jhaemis-hack/HNG12-stage0.git
   cd HNG12-stage0
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the server:
   ```sh
   node index.js
   ```
   *(Ensure your file is named `index.js` or update the command to match your filename.)*

4. The server will start at:
   ```sh
   http://localhost:4000
   ```

## Endpoint
### GET `/`
Returns JSON data with the following fields:

```json
{
    "email": "gbemilekekenny@gmail.com",
    "current_datetime": "2025-02-07T10:30:00.123Z",
    "github_url": "https://github.com/Jhaemis-hack/HNG12-stage0"
}
```

## Error Handling
If the server encounters an error while starting, an error message will be logged in the console:

```sh
Error listening to app @ port 4000.
```

## Dependencies
- [Express](https://expressjs.com/) - Minimalist web framework for Node.js
- [CORS](https://www.npmjs.com/package/cors) - Middleware for enabling CORS in Express

## License
This project is licensed under the **MIT License**.

## Author
**Gbemileke Kenny** ([GitHub](https://github.com/Jhaemis-hack))

---

