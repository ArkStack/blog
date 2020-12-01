module.exports = {
    title: 'Blog+',
    description: 'Just playing around',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    base: '/',
    themeConfig: {
        logo: '/logo_s.svg',
        nav: [
            { text: 'Home', link: '/' },
            { text: '前端', link: '/frontend/' },
            { text: '算法', link: '/algorithm/' }
        ],
        repo: 'ArkStack/blog',
        sidebar: {
            '/frontend/': [
                '',
                'javascript'
            ],
            '/algorithm/': [
                '',
                'leetCode'
            ],
            '/': [
                ''
            ]
        },
        displayAllHeaders: true,
        lastUpdated: 'Last Updated'
    }
}