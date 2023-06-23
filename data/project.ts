export const projects: Project[] = [
  {
    title: '郭惟一的小站',
    description: '基于DocusaurusV2静态网站生成器实现个人博客',
    preview: '/img/project/blog.jpg',
    website: 'https://cdn.gwy.fun',
    source: 'https://github.com/guoweiyi/blog',
    tags: ['opensource', 'design', 'favorite'],
    type: 'web',
  },
  {
    title: '学情大数据分析与预测系统',
    description: '基于Thinlphp搭建的学情分析系统',
    preview: '/img/project/ana.jpg',
    website: 'https://ana.gwy.fun/',
    tags: ['favorite', 'product','large'],
    type: 'web',
  },
  {
    title: '郭惟一文件共享平台',
    description: '文件托管站',
    preview: 'https://www.gwy.fun/%E5%9B%BEapi/pangwyfun.png',
    website: 'https://pan.gwy.fun/',
    tags: ['favorite', 'product','large'],
    type: 'web',
  },
  {
    title: '随机图片API',
    description: '托管阿里FC函数',
    preview: 'https://www.gwy.fun/%E5%9B%BEapi/tuapi2.png',
    website: 'http://t-api.gwy.fun/',
    tags: ['favorite'],
    type: 'web',
  },
  {
    title: 'CAS中央认证系统',
    description: '统一认证',
    preview: 'https://www.gwy.fun/pancdn/casxin.png',
    website: 'https://cas.gwy.fun/',
    tags: ['product'],
    type: 'web',
  },
  {
    title: 'API文档管理系统',
    description: '技术文档存档处',
    preview: 'https://www.gwy.fun/pancdn/jish.png',
    website: 'https://doc.gwy.fun/',
    tags: ['product'],
    type: 'web',
  },
  {
    title: '知识管理系统(停止维护只做技术备份)',
    description: '实现完整知识管理的多端聚合系统',
    preview: '/img/project/bj.jpg',
    website: 'https://bj.gwy.fun/',
    tags: ['favorite', 'product','large'],
    type: 'web',
  },
]

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'large'
  | 'personal';

export type ProjectType =
  | 'personal'
  | 'web'
  | 'app'
  | 'toy'
  | 'other';

export type Project = {
  title: string;
  description: string;
  preview?: any;
  website: string;
  source?: string | null;
  tags: TagType[];
  type: ProjectType
};

export const Tags: Record<TagType, Tag> = {
  favorite: {
    label: '喜爱',
    description: '我最喜欢的网站，一定要去看看!',
    color: '#e9669e',
  },
  opensource: {
    label: '开源',
    description: '开源项目可以提供灵感!',
    color: '#39ca30',
  },
  product: {
    label: '产品',
    description: '与产品相关的项目!',
    color: '#dfd545',
  },
  design: {
    label: '设计',
    description: '设计漂亮的网站!',
    color: '#a44fb7',
  },
  large: {
    label: '大型',
    description: '大型项目，原多于平均数的页面',
    color: '#8c2f00',
  },
  personal: {
    label: '个人',
    description: '个人项目',
    color: '#12affa',
  },
};

export const TagList = Object.keys(Tags) as TagType[];

export const groupByProjects = projects.reduce((group, project) => {
  const { type } = project;
  group[type] = group[type] ?? [];
  group[type].push(project);
  return group;
},
  {} as Record<ProjectType, Project[]>
)

