const ProofOfExistence2 = artifacts.require('./ProofOfExistence2.sol');
const ProofOfExistence3 = artifacts.require('./ProofOfExistence3.sol');

module.exports = function(deployer) {
    deployer.deploy(ProofOfExistence2);
    deployer.deploy(ProofOfExistence3);
};