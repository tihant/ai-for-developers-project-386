import express from 'express';
import cors from 'cors';
import eventTypesRouter from './routes/event-types.js';
import bookingsRouter from './routes/bookings.js';
import adminEventTypesRouter from './routes/admin-event-types.js';
import adminBookingsRouter from './routes/admin-bookings.js';

const app = express();
const PORT = Number(process.env.PORT) || 4010;

app.use(cors());
app.use(express.json());

// Публичные эндпоинты
app.use('/event-types', eventTypesRouter);
app.use('/bookings', bookingsRouter);

// Админские эндпоинты
app.use('/admin/event-types', adminEventTypesRouter);
app.use('/admin/bookings', adminBookingsRouter);

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
