import Graph from 'node-dijkstra';

new Graph();

// Pre-populated graph
new Graph({
    A: { B: 1 },
    B: { A: 1, C: 2, D: 4 }
});

// Passing a Map
const g = new Map<string, Map<string, number>>();

const a = new Map<string, number>();
a.set('B', 1);

const b = new Map<string, number>();
b.set('A', 1);
b.set('C', 2);
b.set('D', 4);

g.set('A', a);
g.set('B', b);

new Graph(g);
