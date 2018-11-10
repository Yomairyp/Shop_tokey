export default {
  items: [
    {
      name: 'Home',
      url: '/home',
      icon: 'icon-home',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
  
    {
      name: 'Orders',
      url: '/base',
      icon: 'icon-basket-loaded',
      children: [
        {
          name: 'All Orders',
          url: '/Order',
        },
        {
          name: 'Drafts',
          url: '/Drafts',
        },
        {
          name:'Pending checkouts',
          url: '/Pending',
        },
      ],
    },
    {
      name: 'Products',
      url: '/Products',
      icon: 'icon-cursor',
      children: [
        {
          name: 'HomeItems',
          url: '/HomeItems',
        },
        {
          name: 'Automobile',
          url: '/Automobile',
        },
        {
          name: 'Garden',
          url: '/',
        },
      ],
    },
    {
      name: 'Customer',
      url: '/Customer',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Customer 1',
          url: '/Customer',
        },
        {
          name: 'Customer 2',
          url: '/buttons/button-dropdowns',
        },
        {
          name: 'Customer 3',
          url: '/buttons/button-groups',
        },
      ],
    },
   
    {
      
      name: 'Analytics',
      url: '/charts',
      icon: 'icon-chart',
      children: [
        {
          name: 'Dashboard',
          url: '/icons/coreui-icons',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Reports',
          url: '/icons/flags',
        },
        {
          name: 'Live Views',
          url: '/icons/font-awesome',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
      ],
    },
    {
      name: 'Marketing',
      url: '/notifications',
      icon: 'icon-bell',
      
    },
    {
      name: 'Discounts',
      url: '/widgets',
      icon: 'icon-calculator',
    
      children: [
        {
          name: 'Codes',
          url: '/notifications/alerts',
        },
        {
          name: 'Automatic',
          url: '/notifications/badges',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        
      ],
    },
    {
      divider: true,
    },
  
    {
      name: 'Sale Channles',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star',
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star',
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star',
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'Online Store',
      url: '/dashboard',
      icon: 'icon-globe',
      
    },
    
  ],
};
