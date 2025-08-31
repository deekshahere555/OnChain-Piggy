// Flow Testnet Configuration
export const FLOW_TESTNET_CHAIN_ID = "0x221"; // 420 in decimal
export const FLOW_TESTNET_RPC = "https://rpc.testnet.flow.evm.flow.com";
export const FLOW_TESTNET_EXPLORER = "https://testnet.flowscan.org";

// Contract address on Flow testnet
export const CONTRACT_ADDRESS = "0xaf54BEf4a78B675AF51A14FdB346b98FbD3Fdc3b";

// Network configuration
export const SUPPORTED_NETWORKS = {
  [FLOW_TESTNET_CHAIN_ID]: {
    name: "Flow Testnet",
    rpc: FLOW_TESTNET_RPC,
    explorer: FLOW_TESTNET_EXPLORER,
    nativeCurrency: {
      name: "FLOW",
      symbol: "FLOW",
      decimals: 18,
    },
  },
};
