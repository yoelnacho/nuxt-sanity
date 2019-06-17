export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'nuxt-sanity-studio',
                  apiId: '1691d4cd-8e55-4222-bf1a-93c7216d4457'
                },
                {
                  buildHookId: '5d07fafdfc96203aaf5a7915',
                  title: 'Events Website',
                  name: 'nuxt-sanity-web',
                  apiId: '2fab1136-f1a8-4809-bb54-5fac7e63433c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yoelnacho/nuxt-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nuxt-sanity-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
