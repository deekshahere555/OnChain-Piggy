# 🏦 On-Chain Piggy Bank - Flow Testnet dApp

A **crazy black theme with dark blue neon design** timelock savings dApp built for the Flow Hackathon, deployed on Flow EVM testnet.

## ✨ Features

- **Flow Testnet Compatible** - Built specifically for Flow EVM testnet
- **Crazy Black Theme** - Dark design with neon blue accents and floating elements
- **Timelock Savings** - Deposit FLOW or ERC-20 tokens with custom lock periods
- **No Early Withdrawals** - Enforced time-based locking mechanism
- **Batch Operations** - Withdraw multiple matured deposits at once
- **Responsive Design** - Works on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- MetaMask wallet
- Flow testnet FLOW tokens

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd onchainpiggy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔗 Flow Testnet Setup

### 1. Add Flow Testnet to MetaMask

**Network Name:** Flow Testnet  
**RPC URL:** `https://rpc.testnet.flow.evm.flow.com`  
**Chain ID:** `420` (0x1a4)  
**Currency Symbol:** FLOW  
**Block Explorer:** `https://testnet.flowscan.org`

### 2. Get Testnet FLOW

Visit the [Flow Testnet Faucet](https://testnet.flowscan.org/faucet) to get testnet FLOW tokens.

## 💎 How to Use

### 1. Connect Wallet
- Click "Connect MetaMask" 
- Ensure you're on Flow Testnet
- The app will automatically prompt you to switch networks if needed

### 2. Deposit FLOW
- Enter the amount of FLOW you want to deposit
- Set the lock duration in seconds (minimum 60 seconds)
- Click "Deposit FLOW"
- Confirm the transaction in MetaMask

### 3. Deposit ERC-20 Tokens
- Enter the token contract address
- Specify the amount to deposit
- Set the lock duration
- Click "Approve & Deposit" (requires two transactions)

### 4. Withdraw
- Wait for your deposit to mature
- Click "Withdraw" on matured deposits
- Or use "Withdraw All Matured" for batch operations

## 🎨 Design Features

- **Crazy Black Theme** - Pure black background with subtle gradients
- **Neon Blue Accents** - Glowing blue elements throughout the interface
- **Floating Elements** - Animated background orbs with blur effects
- **Glass Morphism** - Semi-transparent cards with backdrop blur
- **Smooth Animations** - Hover effects, transitions, and micro-interactions
- **Responsive Layout** - Adapts to all screen sizes

## 🔧 Technical Details

- **Frontend:** Next.js 15 + React 19 + TypeScript
- **Styling:** Tailwind CSS 4 with custom animations
- **Blockchain:** Flow EVM testnet integration
- **Wallet:** MetaMask compatibility
- **Smart Contract:** Solidity timelock contract with reentrancy protection

## 📱 Smart Contract

The dApp interacts with a deployed smart contract on Flow testnet:

- **Contract Address:** `0xaf54BEf4a78B675AF51A14FdB346b98FbD3Fdc3b`
- **Features:** ETH/ERC-20 deposits, timelock mechanism, batch withdrawals
- **Security:** Reentrancy protection, proper access controls

## 🐛 Troubleshooting

### Common Issues

1. **"Wrong Network" Error**
   - Ensure MetaMask is connected to Flow Testnet (Chain ID: 420)
   - Use the "Switch to Flow Testnet" button

2. **"Could not decode result data" Error**
   - This usually means no deposits exist yet
   - The app handles this gracefully and shows an empty state

3. **Transaction Fails**
   - Check if you have sufficient FLOW for gas fees
   - Ensure the contract address is correct
   - Verify you're on the correct network

### Debug Mode

Open browser console to see detailed error messages and transaction logs.

## 🎯 Flow Hackathon Features

- **Flow Testnet Native** - Built specifically for Flow ecosystem
- **EVM Compatibility** - Uses Flow's EVM layer for Ethereum tooling
- **Gas Optimization** - Efficient smart contract design
- **User Experience** - Intuitive interface for DeFi beginners

## 📄 License

MIT License - Built for Flow Hackathon

## 🤝 Contributing

This project was built for the Flow Hackathon. Feel free to fork and improve!

---

**Built with ❤️ for the Flow Community**
