const Migrations = artifacts.require("DoraMarketplace");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
