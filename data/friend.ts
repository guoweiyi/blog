export const Friends: Friend[] = [  
  {
    title: '云游君',
    description: '超喜欢的大佬',
    website: 'https://www.yunyoujun.cn/',
    avatar: require('./avatar/yunyou.jpg'),
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
