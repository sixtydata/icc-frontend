export const navigationRoutes = {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    
    {
      name: 'dashboard',
      displayName: 'menu.dashboard',
      meta: {
        iconClass: 'glyphicon glyphicon-home',
      },
    },
    {
      name: 'travel',
      displayName: 'menu.travel',
      meta: {
        iconClass: 'glyphicon glyphicon-briefcase',
      },
      disabled: true,
      children: [
        {
          name: 'form-elements',
          displayName: 'menu.formElements',          
        },
        {
          name: 'medium-editor',
          displayName: 'menu.mediumEditor',
        },
      ],
    },
    {
      name: 'statistics',
      displayName: 'menu.statistics',
      meta: {
        iconClass: 'glyphicon glyphicon-bullhorn',
      },
      disabled: true,
      children: [
        {
          name: 'charts',
          displayName: 'menu.charts',
        },
        {
          name: 'progress-bars',
          displayName: 'menu.progressBars',
        },
      ],
    },
    {
      name: 'forms',
      displayName: 'menu.forms',
      meta: {
        iconClass: 'glyphicon glyphicon-book',
      },
      disabled: true,
      children: [
        {
          name: 'form-elements',
          displayName: 'menu.formElements',
        },
        {
          name: 'medium-editor',
          displayName: 'menu.mediumEditor',
        },
      ],
    },
    {
      name: 'tables',
      displayName: 'menu.tables',
      meta: {
        iconClass: 'glyphicon glyphicon-plus-sign',
      },
      children: [
        {
          name: 'markup',
          displayName: 'menu.markupTables',
        },
        {
          name: 'data',
          displayName: 'menu.dataTables',
        },
      ],
    },
    {
      name: 'ui',
      displayName: 'menu.uiElements',
      meta: {
        iconClass: 'glyphicon glyphicon-th-large',
      },
      disabled: true,
      children: [
        {
          name: 'buttons',
          displayName: 'menu.buttons',
        },
        {
          name: 'cards',
          displayName: 'menu.cards',
        },
        {
          name: 'chat',
          displayName: 'menu.chat',
        },
        {
          name: 'chips',
          displayName: 'menu.chips',
        },
        {
          name: 'collapses',
          displayName: 'menu.collapses',
        },
        {
          name: 'colors',
          displayName: 'menu.colors',
        },
        {
          name: 'color-pickers',
          displayName: 'menu.colorPickers',
        },
        {
          name: 'file-upload',
          displayName: 'menu.fileUpload',
        },
        {
          name: 'grid',
          displayName: 'menu.grid',
        },
        {
          name: 'icon-sets',
          displayName: 'menu.icons',
          children: [
            {
              displayName: 'concrete',
              name: 'icon-set',
            },
          ],
        },
        {
          name: 'lists',
          displayName: 'menu.lists',
        },
        {
          name: 'modals',
          displayName: 'menu.modals',
        },
        {
          name: 'notifications',
          displayName: 'menu.notifications',
        },
        {
          name: 'popovers',
          displayName: 'menu.popovers',
        },
        {
          name: 'rating',
          displayName: 'menu.rating',
        },
        {
          name: 'sliders',
          displayName: 'menu.sliders',
        },
        {
          name: 'spacing',
          displayName: 'menu.spacing',
        },
        {
          name: 'spinners',
          displayName: 'menu.spinners',
        },
        {
          name: 'tabs',
          displayName: 'menu.tabs',
        },
        {
          name: 'timelines',
          displayName: 'menu.timelines',
        },
        {
          name: 'tree-view',
          displayName: 'menu.treeView',
        },
        {
          name: 'typography',
          displayName: 'menu.typography',
        },
      ],
    },
    {
      name: 'maps',
      displayName: 'menu.maps',
      meta: {
        iconClass: 'glyphicon glyphicon-map-marker',
      },
      disabled: true,
      children: [
        {
          name: 'google-maps',
          displayName: 'Google Maps',
        },
        {
          name: 'yandex-maps',
          displayName: 'Yandex Maps',
        },
        {
          name: 'leaflet-maps',
          displayName: 'Leaflet Maps',
        },
        {
          name: 'bubble-maps',
          displayName: 'Bubble Maps',
        },
        {
          name: 'line-maps',
          displayName: 'Line Maps',
        },
      ],
    },
    {
      name: 'pages',
      displayName: 'menu.pages',
      meta: {
        iconClass: 'glyphicon glyphicon-calendar',
      },
      disabled: true,
      children: [
        {
          name: 'login',
          displayName: 'Login/Signup',
        },
        {
          name: '404-pages',
          displayName: '404 Pages',
        },
      ],
    },
    {
      name: 'contact',
      displayName: 'menu.contact',
      meta: {
        iconClass: 'glyphicon glyphicon-headphones',
      },
      disabled: true,
      children: [
        {
          name: 'login',
          displayName: 'Login/Signup',
        },
        {
          name: '404-pages',
          displayName: '404 Pages',
        },
      ],
    },
  ],
}
