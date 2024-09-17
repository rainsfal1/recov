<p align="center">
  <a href="https://nust.edu.pk/"><img width="200" height="200" src="resources/nust.svg"/></a> &nbsp;&nbsp;&nbsp;&nbsp; <a href="https://seecs.nust.edu.pk/"><img width="200" height="200" src="resources/seecs.png"/></a>
</p>


# Recov

**Recov** is a university project designed to help students track lost and found items. Built with the MERN stack (MongoDB, Express, React, Node.js), this web application allows users to report lost items, found items, view logs, and manage their accounts. An admin dashboard provides additional features for managing and categorizing reports.

## Features

- **Lost Item Report Form**: Allows users to report items they have lost.
- **Found Item Report Form**: Allows users to report items they have found.
- **Logs**: View logs of all found or reported items.
- **My Account**: Manage user accounts, including password changes and submission management.
- **Admin Dashboard**: Admins can view stats, categorized item reports, and claim/report request logs.

## Project Structure

```
Recov/
├── /node_modules
├── /public
│   └── all icons and loaders etc.
├── /src
│   ├── /components
│   ├── /contexts
│   ├── /pages
│   ├── App.tsx
│   └── Protect.tsx
│   └── index.css
│   └── main.tsx
├── /server
│   ├── /controllers
│   ├── /models
│   ├── /routes
│   ├── /utils
│   ├── config.env
│   └── server.ts
├── .gitignore
├── package.json
├── tsconfig.json
└── webpack.config.js
```

## Setup

**Frontend**



1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the frontend server:
   ```bash
   npm run dev
   ```


### Backend

1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the backend server:
   ```bash
   node server.js
   ```

## Configuration

- **Frontend**: Configured using Vite.
- **Backend**: Environment variables are managed in `server/config.env`.

## Notes

- Ensure both frontend and backend servers are running to access the full functionality of the application.
- The project uses Vite for fast builds and development.

## Contributing

Feel free to contribute to this project. For any issues or suggestions, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


