import React from 'react';
import { createPlugin, createRoutableExtension, createRouteRef } from '@backstage/core-plugin-api';

// Crie o RouteRef
export const rootRouteRef = createRouteRef({
  id: 'meuplugin-root',
});

export const plugin = createPlugin({
  id: 'pluginteste',
  routes: {
    root: rootRouteRef,
  },
});

export const MeupluginPage = plugin.provide(
  createRoutableExtension({
    name: 'MeupluginPage',
    component: () => import('./components/MeupluginPage').then(m => m.MeupluginPage),
    mountPoint: rootRouteRef,
  }),
);
