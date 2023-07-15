import "@nomicfoundation/hardhat-toolbox";
import { config as envConfig } from 'dotenv';

envConfig();

const deployerPrivateKey = process.env.DEPLOYER_PRIVATE_KEY;

if (!deployerPrivateKey) {
  throw new Error(
    "Please set a DEPLOYER_PRIVATE_KEY in a .env file"
  );
}


const config = {
  mocha: {
    enableTimeouts: false,
    before_timeout: 480000
  },
  
  defaultNetwork: "xdcTestnet",
  networks: {
    
  //  gasPrice: 4000000000000,

    xdcTestnet: {
      url: `https://erpc.apothem.network`,
      accounts: [deployerPrivateKey],
      chainId: 51,
    },
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
};

export default config;
