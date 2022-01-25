export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f087fa5d39880a5df9a5fc',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jqpwibxj',
                  apiId: 'd685fc8b-cf50-4c20-9c2e-6e3639db8404'
                },
                {
                  buildHookId: '61f087fa627fad0c57d6af95',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-71rfp4xg',
                  apiId: '53b74d80-b31e-4529-86b1-279e4205a7f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Serviceliberty/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-71rfp4xg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
