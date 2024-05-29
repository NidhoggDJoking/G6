import { elementEdgeCustomArrow } from '@@/demos/g6';
import { createDemoGraph } from '@@/utils';

describe('element edge custom arrow', () => {
  it('render', async () => {
    const graph = await createDemoGraph(elementEdgeCustomArrow);
    await expect(graph).toMatchSnapshot(__filename);

    graph.destroy();
  });
});
