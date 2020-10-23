const userDstructurization = (user) => ({
  accessToken: user.accessToken,
  refreshToken: user.refreshToken,
});

module.exports = userDstructurization;
