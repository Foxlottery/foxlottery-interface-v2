import { Box, Text, UserMenu, UserMenuDivider, UserMenuItem } from '@pancakeswap/uikit'
import { bsc, bscTest, findora, gnosis } from '@pancakeswap/wagmi'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import Image from 'next/image'
import { setupNetwork } from 'utils/wallet'
import {
  mainnet,
  optimism,
  polygon,
  optimismKovan,
  polygonMumbai,
} from 'wagmi/chains'

const chains = [
  mainnet,
  bsc,
  polygon,
  optimism,
  findora,
  gnosis,
  bscTest,
  polygonMumbai,
  optimismKovan
]

const imagePath = (chainId: number) => {
  if (chainId == 2152) {
    return 'images/findora.png';
  } else if (chainId == 100) {
    return 'images/gnosis.png';
  }
  return `https://cdn.pancakeswap.com/chains/${chainId}.png`
}

export const NetworkSelect = () => {
  const { t } = useTranslation()
  return (
    <>
      <Box px="16px" py="8px">
        <Text>{t('Select a Network')}</Text>
      </Box>
      <UserMenuDivider />
      {chains.map((chain) => (
        <UserMenuItem key={chain.id} style={{ justifyContent: 'flex-start' }} onClick={() => setupNetwork(chain.id)}>
          <Image width={24} height={24} src={imagePath(chain.id)} unoptimized />
          <Text pl="12px">{chain.name}</Text>
        </UserMenuItem>
      ))}
    </>
  )
}

export const NetworkSwitcher = () => {
  const { chainId } = useActiveWeb3React()

  return (
    <UserMenu
      mr="8px"
      avatarSrc={`https://cdn.pancakeswap.com/chains/${chainId}.png`}
      account={bsc.name}
      ellipsis={false}
    >
      {() => <NetworkSelect />}
    </UserMenu>
  )
}
