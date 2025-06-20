
import React from 'react';
import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

export const plugin = createPlugin({
  id: 'pluginteste',
  routes: {
    root: {} as any,
  },
});

export const MeupluginPage = plugin.provide(
  createRoutableExtension({
    name: 'MeupluginPage',
    component: () => import('./components/MeupluginPage').then(m => m.MeupluginPage),
    mountPoint: {} as any,
  }),
);
