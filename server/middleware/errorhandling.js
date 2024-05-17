// const errorHandler = (err, req, res, next) => {
const errorHandler = (err, req, res, next) => {
  console.log("error inside the error handler", err);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
    errors: err.errors || [],
  });
};

export default errorHandler;
