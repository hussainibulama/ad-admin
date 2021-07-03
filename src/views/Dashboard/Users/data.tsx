import ClickIcon from '../../../assets/icons/click-icon.svg';
import WalletIcon from '../../../assets/icons/wallet-icon.svg';
import WatchIcon from '../../../assets/icons/Video-pink.svg';
import TimeIcon from '../../../assets/icons/time-circle.svg';
import VidoeIcon from '../../../assets/icons/video-red.svg';

export const cardData = [
  {
    title: 'Total Clicks',
    value: '298748',
    icon: ClickIcon,
    icon2: '',
    bgColor: 'rgba(0, 168, 90, 0.1)',
    className: 'click',
    wallet: '',
  },
  {
    title: 'Wallet Balance',
    value: '2000',
    icon: WalletIcon,
    icon2: '',
    bgColor: 'rgba(251, 188, 5, 0.17)',
    className: 'wallet',
    wallet: 'TopUp Wallet',
  },
  {
    title: 'Total Watch Duration',
    value: '5h:35m',
    icon: WatchIcon,
    icon2: TimeIcon,
    bgColor: 'rgba(106, 27, 154, 0.1)',
    className: 'watch',
    wallet: '',
  },
  {
    title: 'Total Video watched',
    value: '563',
    icon: VidoeIcon,
    icon2: '',
    bgColor: 'rgba(203, 0, 11, 0.24)',
    className: 'video',
    wallet: '',
  },
];
