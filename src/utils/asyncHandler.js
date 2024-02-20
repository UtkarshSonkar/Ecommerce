const asyncHandler = (requestHandler) => {
  async (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};
// wrapper function for async handling everytime (standardized way)
export default asyncHandler;
