const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// penanganan untuk usersRoute
const usersRoutes = require("./routes/api/v1/usersRoute");
app.use('/api/v1', usersRoutes);

// penanganan untuk accountsRoute
const accountsRoute = require("./routes/api/v1/accountsRoute");
app.use('/api/v1', accountsRoute);

// penanganan untuk transactionsRoute
const transactionsRoute = require("./routes/api/v1/transactionsRoute");
app.use('/api/v1/', transactionsRoute);


// internal error handler
app.use((err, req, res, next) => {
    console.log('error: ', err);
    res.status(500).json({
        status: false,
        message: 'Internal server error'
    });
});


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});