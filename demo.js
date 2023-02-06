var cy = window.cy = cytoscape({
  container: document.getElementById('cy'),

  boxSelectionEnabled: false,

  style: [
    {
      selector: 'node',
      css: {
        'shape': 'data(type)',
        'label': 'data(label)'
      }
    },
    {
      selector: ':parent',
      css: {
        'text-valign': 'top',
        'text-halign': 'center',
        'padding': '60px',
      }
    },
    {
      selector: 'edge',
      css: {
        'curve-style': 'bezier',
        'label': 'data(label)'
      }
    },
    {
      selector: '#disk',
      css: {
        'background-image': 'cylinder.png',
        'height': 80,
        'width': 80,
        'background-fit': 'contain',
        'background-color': '#ffffff',
      }
    },
  ],

  elements: {
    nodes: [
      { data: { id: 'host1', type: 'rectangle', label: 'Host 1' } },
      { data: { id: 'host2', type: 'rectangle', label: 'Host 2' } },
      { data: { id: 'h1c1', parent: 'host1', type: 'ellipse', label: 'core 1'},  position: { x: 215, y: 5  } },
      { data: { id: 'h1c2', parent: 'host1', type: 'ellipse', label: 'core 2' }, position: { x: 300, y: 5 } },
      { data: { id: 'h2c1', parent: 'host2', type: 'ellipse', label: 'core 1' }, position: { x: 700, y: 105 } },
      { data: { id: 'disk', type: 'rectangle', label: 'Disk' }, position: { x: 15, y: 5 } },
      { data: { id: 'connection', type: 'ellipse', label: '' }, position: { x: 500, y: 75 } },
    ],
    edges: [
      { data: { id: 'ad', source: 'disk', target: 'host1', label: '' } },
      { data: { id: 'eb', source: 'host1', target: 'connection', label: 'Link1' } },
      { data: { id: 'cb', source: 'host2', target: 'connection', label: 'Link2' } },

    ]
  },

  layout: {
    name: 'preset',
    padding: 5
  }
});
