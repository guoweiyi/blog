export const Friends: Friend[] = [  
  {
    title: 'Ethan',
    description: 'Don’t stay awake for too long.',
    website: 'https://hanlife02.com.cn/',
    avatar: require('./avatar/ear.jpg'),
  },
  {
    title: '云游君',
    description: '希望能成为一个有趣的人',
    website: 'https://www.yunyoujun.cn/',
    avatar: require('./avatar/yunyou.jpg'),
  },
  {
    title: 'Zhaojinxi',
    description: '超厉害的的信竞大佬',
    website: 'https://blog.zhaojinxi.top/',
    avatar: require('./avatar/zhaojinxi.png'),
  },
  {
    title: 'TomyJan',
    description: '人生即是到来、相遇、陪伴、离开',
    website: 'https://www.tomys.top/',
    avatar: require('./avatar/tom.png'),
  },
  {
    title: '峰华前端工程师',
    description: '本站部分源码来自此大佬',
    website: 'https://zxuqian.cn',
    avatar: require('./avatar/zxuqian.png'),
  },
  {
    title: '愧怍',
    description: '本站部分源码来自此大佬',
    website: 'https://kuizuo.cn/',
    avatar: require('./avatar/kuizuo.png'),
  }
];

export type Friend = {
  title: string;
  description: string;
  website: string;
  avatar?: any;
};
