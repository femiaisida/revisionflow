export function generateResponse(input, emergencyMode) {
  if (emergencyMode) {
    return {
      mode: "emergency",
      message: "Focus on one task only. Ignore everything else."
    };
  }

  return {
    mode: "normal",
    message: `AI response to: ${input}`
  };
}
