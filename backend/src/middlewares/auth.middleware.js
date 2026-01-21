module.exports = (req, res, next) => {
  const actor = req.headers["x-actor"]; 
  // expected: customer | provider | admin | system

  if (!actor) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  req.actor = actor;
  next();
};
