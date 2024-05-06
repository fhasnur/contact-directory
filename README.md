# Contact Directory

### How to Run Locally

1. **Install Node.js and MySQL**:
   - If you haven't already, install Node.js and MySQL on your local machine. You can find installation instructions on their official websites:
     - [Node.js](https://nodejs.org/)
     - [MySQL](https://www.mysql.com/)

2. **Clone this repository to your local machine**:

3. **Set Up Environment Variables**:
   - In the root directory of the project, rename the `.env.example` file to `.env` and set the following environment variable:
     ```js
     DATABASE_URL="mysql://root:@localhost:3306/contact_directory"
     ```

4. **Install Dependencies**:
     ```
     npm install
     ```

5. **Run Prisma Migrations**:
     ```
     npx prisma migrate dev
     ```

6. **Generate Prisma Client**:
     ```
     npx prisma generate
     ```

7. **Execute Build Script**:
     ```
     npm run build
     ```

8. **Start the API Server**:
     ```
     npm run start
     ```

9. **Access the API**:
   - The API should now be running locally at `http://localhost:3000`.
