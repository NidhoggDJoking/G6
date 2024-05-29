import { layoutGrid } from '@@/demos/g6/layout-grid';
import { createDemoGraph } from '@@/utils';
import type { Graph } from '@antv/g6';

describe('grid', () => {
  let graph: Graph;

  beforeAll(async () => {
    graph = await createDemoGraph(layoutGrid);
  });

  afterAll(() => {
    graph.destroy();
  });

  it('sortBy default', async () => {
    await expect(graph).toMatchSnapshot(__filename, 'sortby-default');
  });

  it('sortBy id', async () => {
    graph.setLayout({ type: 'grid', sortBy: 'id' }), await graph.layout();
    await expect(graph).toMatchSnapshot(__filename, 'sortby-id');
  });
});
