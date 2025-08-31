# 🏦 On-Chain Piggy Bank

A timelock savings dApp built deployed on Flow EVM testnet.

## ✨ Features

- **Flow Testnet Compatible** - Built specifically for Flow EVM testnet
- **Timelock Savings** - Deposit FLOW or ERC-20 tokens with custom lock periods
- **No Early Withdrawals** - Enforced time-based locking mechanism
- **Batch Operations** - Withdraw multiple matured deposits at once
- **Responsive Design** - Works on desktop and mobile devices

## 💎 How to Use

### 1. Connect Wallet
- Click "Connect MetaMask" 
- Ensure you're on Flow Testnet
- The app will automatically prompt you to switch networks if needed

### 2. Deposit FLOW
- Enter the amount of FLOW you want to deposit
- Set the lock duration in seconds, minutes, hours or days.
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

## 📄 License

MIT License - Built for Flow Hackathon
