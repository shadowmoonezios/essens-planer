const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/essens-planer', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB verbunden');
}).catch(err => {
  console.error('MongoDB-Verbindung fehlgeschlagen:', err);
});

app.get('/', (req, res) => {
  res.send('Willkommen beim Essensplaner!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});