const Pages = {
  DEFAULT: '/',
  MAIN: '/admin/dashboard',
  DASH_BOARD: '/admin/dashboard',
  NOT_FOUND: '/not-found',
  PROFILE: '/profile',

  SIGN_IN: '/sign-in',
  FORGOT_PASSWORD: '/forgot-password',

  PERMISSION: '/admin/permissions',

  USER: '/admin/users',
  CREATE_USER: '/admin/users/create',
  EDIT_USER: '/admin/users/:userId',
  GET_USER: (id: string | number) => `/admin/users/${id}`,

  VENDOR: '/admin/vendors',
  CREATE_VENDOR: '/admin/vendors/create',

  PRODUCT: '/admin/products',
  CREATE_PRODUCT: '/admin/products/create',

  CATEGORY: '/admin/categories',
};

export default Pages;
