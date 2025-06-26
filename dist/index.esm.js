import { createRouteRef, createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

const rootRouteRef = createRouteRef({
  id: "meuplugin-root"
});
const plugin = createPlugin({
  id: "pluginteste",
  routes: {
    root: rootRouteRef
  }
});
const MeupluginPage = plugin.provide(
  createRoutableExtension({
    name: "MeupluginPage",
    component: () => import('./esm/MeupluginPage-34aec53e.esm.js').then((m) => m.MeupluginPage),
    mountPoint: rootRouteRef
  })
);

export { MeupluginPage, plugin, rootRouteRef };
//# sourceMappingURL=index.esm.js.map
