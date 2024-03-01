const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.join(__dirname, '../frontend/build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../frontend/build/index.html'));
});


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
