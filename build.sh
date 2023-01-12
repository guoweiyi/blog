#!/bin/sh
# 前端应用存在NPM依赖时的默认编译脚本

npm config set registry https://registry.npm.taobao.org --global
npm config set ignore-engines true
npm config set sharp_libvips_binary_host "https://npmmirror.com/mirrors/sharp-libvips"
npm config set sharp_binary_host "https://npmmirror.com/mirrors/sharp"
npm --registry https://registry.npm.taobao.org yarn install 
yarn --registry https://registry.npm.taobao.org install
yarn run build
