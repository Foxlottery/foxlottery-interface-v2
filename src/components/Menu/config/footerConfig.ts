import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://twitter.com/foxlottery',
      },
      // {
      //   label: t('Whitepaper'),
      //   href: 'https://docs.pancakeswap.finance/brand',
      // },
      {
        label: t('Community'),
        href: 'https://discord.com/invite/ddpVvnPZum',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Foxlottery',
      },
      // {
      //   label: t('Documentation'),
      //   href: 'https://docs.pancakeswap.finance',
      // },
    ],
  },
]
