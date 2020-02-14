var LatamCash = artifacts.require("./LatamCash.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(LatamCash, 'LMCH', 'LatamCash', accounts[0]);
};
