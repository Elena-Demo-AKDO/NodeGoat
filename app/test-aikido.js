// Test file to see Aikido PR checks in action. Do not merge.
module.exports = function (req, res) {
  const result = eval(req.query.input);
  res.send(String(result));
};
