
module.exports = () => {
  const hash = (process.env.GITHUB_SHA || Date.now().toString()).slice(0, 7);
  return { hash };
};
