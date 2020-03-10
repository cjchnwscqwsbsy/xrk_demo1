//        const svg = d3.select('.main-cta-modal')
//            .append('svg')
//            .attr('width', 1200).attr('height', 700)
//            .append('g')
//            .attr('transform', 'translate(0, 30)');
//
//        const tree = d3.layout.tree()
//            .size([1200, 500])
//            .separation((a, b) => {
//                return (a.parent == b.parent ? 1 : 2);
//            });
//
//        const diagonal = d3.svg.diagonal().projection(d => {
//            return [d.x, d.y]
//        });
//
//        const nodes = tree.nodes(dataSource);
//        const links = tree.links(nodes);
//
//        const link = svg.selectAll('.link')
//            .data(links)
//            .enter()
//            .append('path')
//            .attr('class', 'link')
//            .attr('d', diagonal)
//
//        const node = svg.selectAll('.node')
//            .data(nodes)
//            .enter()
//            .append('g')
//            .attr('class', 'node')
//            .attr('transform', (d) => {
//                return `translate(${d.x}, ${d.y})`;
//            })
//
//        node.append("circle")
//            .attr('r', '80')
//
//        node.append('text')
//            .attr('dx', (d) => {
//                return d.children ? -48 : 48;
//            })
//            .attr('dy', 3)
//            .style('text-anchor', (d) => {
//                return d.children ? 'end' : 'start';
//            })
//            .attr('class', 'text')
//            .text((d) => d.name)