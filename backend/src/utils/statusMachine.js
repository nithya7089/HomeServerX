const allowedTransitions = {
  pending: ["assigned", "cancelled"],
  assigned: ["in_progress", "cancelled", "failed"],
  in_progress: ["completed", "failed"],
  completed: [],
  cancelled: [],
  failed: []
};

function canTransition(from, to) {
  return allowedTransitions[from]?.includes(to);
}

module.exports = { canTransition };
