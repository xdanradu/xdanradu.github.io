module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['introduction/get-started', 'introduction/prerequisites'],
    },
    {
      type: 'category',
      label: 'CSS',
      collapsed: false,
      items: [
        'css/selectors',
        'css/animations',
        'css/flexbox-grid',
        'css/positioning',
        'css/display',
        'css/responsive-design',
        'css/coding-standards'
      ],
    },
    {
      type: 'category',
      label: 'Javascript',
      items: [
        'javascript/arrow-functions',
        'javascript/closures',
        'javascript/data-types',
        'javascript/es-versions',
        'javascript/npm-libraries',
        'javascript/polyfills',
        'javascript/spread-operator',
        'javascript/this',
        'javascript/typescript',
        'javascript/web-components',
        'css/coding-standards'],
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
          'advanced/monorepo-multirepo',
          'advanced/state-of-the-art',
          'advanced/data-exchange',
          'advanced/pwa',
          'advanced/build-optimizations'
      ],
    },
  ]
};
