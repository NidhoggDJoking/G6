import { pluginHull } from '@@/demos/g6';
import { createDemoGraph } from '@@/utils';
import type { HullOptions } from '@antv/g6';
import { CommonEvent, type Graph, type Hull } from '@antv/g6';

describe('plugin hull', () => {
  let graph: Graph;
  let hull: Hull;

  beforeAll(async () => {
    graph = await createDemoGraph(pluginHull, { animation: false });
    hull = graph.getPluginInstance<Hull>('hull');
  });

  afterAll(() => {
    graph.destroy();
  });

  it('init', async () => {
    await expect(graph).toMatchSnapshot(__filename, 'default');
  });

  const updateHullOptions = (optionsToUpdate: Partial<HullOptions>) => {
    graph.updatePlugin({ key: 'hull', ...optionsToUpdate });
    graph.render();
  };

  it('update corner', async () => {
    updateHullOptions({ corner: 'sharp' });
    await expect(graph).toMatchSnapshot(__filename, 'corner__sharp');
    updateHullOptions({ corner: 'smooth' });
    await expect(graph).toMatchSnapshot(__filename, 'corner__smooth');
    updateHullOptions({ corner: 'rounded' });
    await expect(graph).toMatchSnapshot(__filename, 'corner__rounded');
  });

  it('update padding', async () => {
    updateHullOptions({ padding: 20 });
    await expect(graph).toMatchSnapshot(__filename, 'padding__20');
    updateHullOptions({ padding: 0 });
    await expect(graph).toMatchSnapshot(__filename, 'padding__0');
  });

  it('update labelPlacement', async () => {
    updateHullOptions({ labelPlacement: 'top' });
    await expect(graph).toMatchSnapshot(__filename, 'labelPlacement__top');
    updateHullOptions({ labelPlacement: 'left' });
    await expect(graph).toMatchSnapshot(__filename, 'labelPlacement__left');
    updateHullOptions({ labelPlacement: 'right' });
    await expect(graph).toMatchSnapshot(__filename, 'labelPlacement__right');
    updateHullOptions({ labelPlacement: 'bottom' });
    await expect(graph).toMatchSnapshot(__filename, 'labelPlacement__bottom');
  });

  it('update labelCloseToPath', async () => {
    updateHullOptions({ labelCloseToPath: false });
    await expect(graph).toMatchSnapshot(__filename, 'labelCloseToHull__false');
    updateHullOptions({ labelCloseToPath: true });
    await expect(graph).toMatchSnapshot(__filename, 'labelCloseToHull__true');
  });

  it('update labelAutoRotate', async () => {
    updateHullOptions({ labelAutoRotate: false });
    await expect(graph).toMatchSnapshot(__filename, 'labelAutoRotate__false');
    updateHullOptions({ labelAutoRotate: true });
    await expect(graph).toMatchSnapshot(__filename, 'labelAutoRotate__true');
  });

  it('addMember', async () => {
    hull.addMember('node3');
    await expect(graph).toMatchSnapshot(__filename, 'addMember__node3');
  });

  it('removeMember', async () => {
    hull.removeMember('node1');
    await expect(graph).toMatchSnapshot(__filename, 'removeMember__node1');
  });

  it('updateMember', async () => {
    hull.updateMember(['node5', 'node6']);
    await expect(graph).toMatchSnapshot(__filename, 'updateMember');
    expect(hull.getMember()).toEqual(['node5', 'node6']);
  });

  it('update element position', async () => {
    graph.emit(`node:${CommonEvent.DRAG_START}`, { target: { id: 'node5' }, targetType: 'node' });
    graph.emit(`node:${CommonEvent.DRAG}`, { dx: 50, dy: -50 });
    graph.emit(`node:${CommonEvent.DRAG_END}`);
    await expect(graph).toMatchSnapshot(__filename, 'updateMember__position');
  });
});
