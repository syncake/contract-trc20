var Token = artifacts.require("TRC20Token");

module.exports = function(deployer) {
  deployer.deploy(Token, "Test Token", "TTK", 8, 100000000);
};
