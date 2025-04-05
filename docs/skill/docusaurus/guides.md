---
id: docusaurus-guides
slug: /docusaurus-guides
title: Docusaurus 主题魔改
authors: kuizuo
keywords: ['guides', 'docusaurus', 'docusaurus-guides']
---

这里是[Docusaurus](https://docusaurus.io/)的魔改指南。

import DocCardList from '@theme/DocCardList'; import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
