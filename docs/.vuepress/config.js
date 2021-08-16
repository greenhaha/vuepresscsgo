module.exports = {
    title: '黄粱一梦技术文档',
    description: '这是一个CSGO社区服务器技术相关文档',
    head:[
      ['link', {rel:'shortcut icon', href:'/favicon.ico', type: 'image/jpg'}]
    ],
    configureWebpack: {
      resolve: {
        alias: {
          '@image': '/Users/licheng/Documents/workspace/myblog/docs/image'
        }
      }
    },
    themeConfig: {
      lastUpdated: 'Last Updated', // string | boolean
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '关于',
                link: '/about/'
            }
        ],
        sidebar: [
        {
            title: 'CSGO',   // 必要的
            //path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: false, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
            {title:'快速上手(linux)',path: '/guide/quickly'},
            {title:'快速上手(window)',path: '/guide/csgoserve'},
            {title:'插件添加',path: '/guide/csgoaddmode'},
            {title:'娱乐对抗', path:'/serplugin/mgserve'},
            {title:'竞技模式',path:'/serplugin/pvp'},
            {title:'地图音乐',path:'/serplugin/music'},
            {title:'手电筒',path:'/serplugin/flush'},
            {title:'商店',path:'/serplugin/store'}
            // {title:'地图添加',path: '/guide/csgomakemap'}
            ]
        },
        {
            title: '我的世界',
            children: [{title:'搭建中',path:'/mcserve/'}],
            initialOpenGroupIndex: -1 // 可选的, 默认值是 0
        },
        {
            title: 'L4D2',
            children: [{title:'搭建中',path:'/L4D2/'}],
            initialOpenGroupIndex: -1 // 可选的, 默认值是 0
        },
        {
            title: '其他小游戏',
            children: [],
            initialOpenGroupIndex: -1 // 可选的, 默认值是 0
        },
        {
            title: '更多',
            children: [ /* ... */ ],
            initialOpenGroupIndex: -1 // 可选的, 默认值是 0
        }
        ]
    },
    plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'FBf8QatBJJxrMATTrUw25uEB-gzGzoHsz',
          appKey: 'YfPYkmn6NglhrunpqvkaVVan',
          emojiCDN: '//i0.hdslb.com/bfs/emote/',
          path: 'window.location.pathname',
          // 表情title和图片映射
          emojiMaps: {
              "tv_doge": "6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
              "tv_亲亲": "a8111ad55953ef5e3be3327ef94eb4a39d535d06.png",
              "tv_偷笑": "bb690d4107620f1c15cff29509db529a73aee261.png",
              "tv_再见": "180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png",
              "tv_冷漠": "b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png",
              "tv_发怒": "34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png",
              "tv_发财": "34db290afd2963723c6eb3c4560667db7253a21a.png",
              "tv_可爱": "9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png",
              "tv_吐血": "09dd16a7aa59b77baa1155d47484409624470c77.png",
              "tv_呆": "fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png",
              "tv_呕吐": "9f996894a39e282ccf5e66856af49483f81870f3.png",
              "tv_困": "241ee304e44c0af029adceb294399391e4737ef2.png",
              "tv_坏笑": "1f0b87f731a671079842116e0991c91c2c88645a.png",
              "tv_大佬": "093c1e2c490161aca397afc45573c877cdead616.png",
              "tv_大哭": "23269aeb35f99daee28dda129676f6e9ea87934f.png",
              "tv_委屈": "d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png",
              "tv_害羞": "a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png",
              "tv_尴尬": "7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png",
              "tv_微笑": "70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png",
              "tv_思考": "90cf159733e558137ed20aa04d09964436f618a1.png",
              "tv_惊吓": "0d15c7e2ee58e935adc6a7193ee042388adc22af.png",
              // ... 更多表情
          } 
        }
      }
    ],
    '@vuepress/back-to-top'
  ]
}