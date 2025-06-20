import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

const plugin = createPlugin({
  id: "pluginteste",
  routes: {
    root: {}
  }
});
const MeupluginPage = plugin.provide(
  createRoutableExtension({
    name: "MeupluginPage",
    component: () => import('./esm/MeupluginPage-34aec53e.esm.js').then((m) => m.MeupluginPage),
    mountPoint: {}
  })
);

export { MeupluginPage, plugin };
//# sourceMappingURL=index.esm.js.map
