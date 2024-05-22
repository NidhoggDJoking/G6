import { Graph } from '@antv/g6';

const data = {
  nodes: [
    { id: '0', data: { type: 'a' } },
    { id: '1', data: { type: 'a' } },
    { id: '2', data: { type: 'a' } },
    { id: '3', data: { type: 'a' } },
    { id: '4', data: { type: 'c' } },
    { id: '5', data: { type: 'a' } },
    { id: '6', data: { type: 'b' } },
    { id: '7', data: { type: 'b' } },
    { id: '8', data: { type: 'c' } },
    { id: '9', data: { type: 'd' } },
    { id: '10', data: { type: 'd' } },
    { id: '11', data: { type: 'b' } },
    { id: '12', data: { type: 'c' } },
    { id: '13', data: { type: 'b' } },
    { id: '14', data: { type: 'd' } },
    { id: '15', data: { type: 'd' } },
    { id: '16', data: { type: 'b' } },
    { id: '17', data: { type: 'c' } },
    { id: '18', data: { type: 'c' } },
    { id: '19', data: { type: 'b' } },
    { id: '20', data: { type: 'b' } },
    { id: '21', data: { type: 'd' } },
    { id: '22', data: { type: 'd' } },
    { id: '23', data: { type: 'd' } },
    { id: '24', data: { type: 'a' } },
    { id: '25', data: { type: 'a' } },
    { id: '26', data: { type: 'b' } },
    { id: '27', data: { type: 'b' } },
    { id: '28', data: { type: 'd' } },
    { id: '29', data: { type: 'c' } },
    { id: '30', data: { type: 'c' } },
    { id: '31', data: { type: 'b' } },
    { id: '32', data: { type: 'b' } },
    { id: '33', data: { type: 'a' } },
  ],
  edges: [
    { source: '0', target: '1' },
    { source: '0', target: '2' },
    { source: '0', target: '3' },
    { source: '0', target: '4' },
    { source: '0', target: '5' },
    { source: '0', target: '7' },
    { source: '0', target: '8' },
    { source: '0', target: '9' },
    { source: '0', target: '10' },
    { source: '0', target: '11' },
    { source: '0', target: '13' },
    { source: '0', target: '14' },
    { source: '0', target: '15' },
    { source: '0', target: '16' },
    { source: '2', target: '3' },
    { source: '4', target: '5' },
    { source: '4', target: '6' },
    { source: '5', target: '6' },
    { source: '7', target: '13' },
    { source: '8', target: '14' },
    { source: '9', target: '10' },
    { source: '10', target: '22' },
    { source: '10', target: '14' },
    { source: '10', target: '12' },
    { source: '10', target: '24' },
    { source: '10', target: '21' },
    { source: '10', target: '20' },
    { source: '11', target: '24' },
    { source: '11', target: '22' },
    { source: '11', target: '14' },
    { source: '12', target: '13' },
    { source: '16', target: '17' },
    { source: '16', target: '18' },
    { source: '16', target: '21' },
    { source: '16', target: '22' },
    { source: '17', target: '18' },
    { source: '17', target: '20' },
    { source: '18', target: '19' },
    { source: '19', target: '20' },
    { source: '19', target: '33' },
    { source: '19', target: '22' },
    { source: '19', target: '23' },
    { source: '20', target: '21' },
    { source: '21', target: '22' },
    { source: '22', target: '24' },
    { source: '22', target: '25' },
    { source: '22', target: '26' },
    { source: '22', target: '23' },
    { source: '22', target: '28' },
    { source: '22', target: '30' },
    { source: '22', target: '31' },
    { source: '22', target: '32' },
    { source: '22', target: '33' },
    { source: '23', target: '28' },
    { source: '23', target: '27' },
    { source: '23', target: '29' },
    { source: '23', target: '30' },
    { source: '23', target: '31' },
    { source: '23', target: '33' },
    { source: '32', target: '33' },
  ],
};

const graph = new Graph({
  container: 'container',
  data,
  layout: {
    linkDistance: 10,
    maxIteration: 1000,
    nodeSize: 30,
    preventOverlap: true,
    sortBy: 'type',
    sortStrength: 50,
    type: 'radial',
    unitRadius: 70,
  },
  node: {
    style: {
      labelText: (d) => d.id,
      labelPlacement: 'center',
      size: 20,
    },
    palette: {
      type: 'group',
      field: 'type',
    },
  },
  edge: {
    style: {
      endArrow: true,
    },
  },
  behaviors: ['drag-canvas', 'drag-element'],
});

graph.render();