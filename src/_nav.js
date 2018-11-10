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
          url: '/Garden',
        },
      ],
    },
    {
      name: 'Customers',
      url: '/Customer',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Customer ',
          url: '/Customer',
        },
      ],
    },
   
    {
      
      name: 'Analytics',
      url: '/Board',
      icon: 'icon-chart',
      children: [
        {
          name: 'Dashboard',
          url: '/Board',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Reports',
          url: '/Report',
        },
        {
          name: 'Live Views',
          url: '/LiveView',
          badge: {
            variant: 'secondary',
            text: '4.7',
          },
        },
      ],
    },
    {
      name: 'Marketing',
      url: '/Marketing',
      icon: 'icon-bell',
      
    },
    {
      name: 'Discounts',
      url: '/Discounts',
      icon: 'icon-calculator',
    
      children: [
        {
          name: 'Codes',
          url: '/Codes',
        },
        {
          name: 'Automatic',
          url: '/Automatic',
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
