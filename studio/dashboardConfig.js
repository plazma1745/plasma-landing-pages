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
                  buildHookId: '5fb4b7ccbd13003be0640e40',
                  title: 'Sanity Studio',
                  name: 'plasma-landing-pages-studio',
                  apiId: 'c9717b16-5426-4f1b-8a3b-500a67bf31d0'
                },
                {
                  buildHookId: '5fb4b7cc593cb6391797b2e6',
                  title: 'Landing pages Website',
                  name: 'plasma-landing-pages',
                  apiId: '3faf3505-23f7-4d8e-b954-4ef35ced4efb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/plazma1745/plasma-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://plasma-landing-pages.netlify.app', category: 'apps'}
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
