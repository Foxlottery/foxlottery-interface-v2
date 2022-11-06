type SerializedBigNumber = string

declare let __NEZHA_BRIDGE__: any

interface Window {
  ethereum?: {
    isMetaMask?: true
    isOpera?: true
    isCoinbaseWallet?: true
    isTrust?: true
    providers?: any[]
    request?: (...args: any[]) => Promise<void>
  }
  BinanceChain?: {
    bnbSign?: (address: string, message: string) => Promise<{ publicKey: string; signature: string }>
  }
  BinanceChain?: {
    bnbSign?: (address: string, message: string) => Promise<{ publicKey: string; signature: string }>
  }
  bn?: any
}
