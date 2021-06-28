import { init } from 'netlify-cms-app'

init({
  config: {
    backend: {
      name: 'git-gateway'
    },
    load_config_file: false,
    media_folder: 'docs/images/uploads',
    public_folder: '/images/uploads',
    collections: [
      {
        label: 'Docs',
        label_singular: 'Doc',
        name: 'docs',
        folder: 'docs',
        create: true,
        slug: '{{menu}}{{name}}',
        identifier_field: 'route',
        extension: 'mdx',
        format: 'frontmatter',
        fields: [
          {
            label: 'Name',
            name: 'name'
          },
          {
            label: 'Menu',
            name: 'menu',
            required: false
          },
          {
            label: 'Route',
            name: 'route'
          },
          {
            label: 'Body',
            name: 'body',
            widget: 'markdown'
          },
        ]
      },
      {
        label: 'Settings',
        name: 'settings',
        files: [
          {
            label: 'Menu',
            name: 'menu',
            file: 'config/menu.json',
            fields: [
              {
                label: 'Menu Items',
                name: 'menuItems',
                widget: 'list',
                fields: [
                  {
                    label: 'Name',
                    name: 'name'
                  },
                  {
                    label: 'Menu',
                    name: 'menu',
                    widget: 'list',
                    required: false
                  }
                ],
                default: [
                  'Welcome'
                ]
              }
            ]
          }
        ]
      }
    ],
  },
});