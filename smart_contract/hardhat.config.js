// https://eth-ropsten.alchemyapi.io/v2/0Nk85xjhwsttkVt609acP52N7DSDaMBs
require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/0Nk85xjhwsttkVt609acP52N7DSDaMBs',
      accounts:['4617b7333e804fe58b3d7944eeff88da398bc2e520148262135b9974bf1517f3']
    }
  }
}