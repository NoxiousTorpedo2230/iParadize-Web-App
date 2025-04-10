import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config';
import connectDb from './config/mongoDb.js';
import authRouter from './routes/authRouter.js';
import userRouter from './routes/userRouter.js';

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDb();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration - updated to ensure credentials work properly
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Routes
app.use('/api/auth/', authRouter);
app.use('/api/user/', userRouter);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ success: false, message: 'Internal Server Error' });
});

app.listen(port, () => {
  // console.log(`Server running on port ${port}`);
  console.log(`
    ✨[Database Status]: CONNECTED
    --------------------------------------
    🌐 Host: ${process.env.DB_HOST || 'localhost'}
    📂 Database: ${process.env.DB_NAME || 'default_db'}
    📅 Timestamp: ${new Date().toISOString()}
    ⚡ Status: Connection Established Successfully!
    --------------------------------------
    `);
});