function createResult(error, data) {
  const result = {};
  if (data) {
    result.status = "Success";
    result.data = data;
  } else {
    result.status = "Error";
    result.error = error;
  }
  return result;
}

module.exports = {
  createResult,
};
