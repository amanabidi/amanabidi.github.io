
(function() {
  function render() {
    var container = document.getElementById('wordcloud');
    if (!container) return;

    container.innerHTML = '';
    var width = Math.min(container.clientWidth || 800, 1000);
    var height = Math.max(260, Math.floor(width * 0.45));

    container.style.width = '100%';
    container.style.minHeight = height + 'px';
    container.style.border = '1px solid #e5e5e5';
    container.style.margin = '1rem 0';
    container.style.position = 'relative';
    container.style.background = '#fafafa';

    var dataEl = document.getElementById('wc-data');
    var words = [];
    try {
      words = JSON.parse(dataEl.textContent).words || [];
    } catch (e) { console.error('Invalid word cloud JSON'); }

    if (!words.length) return;

    var maxWeight = d3.max(words, d => d.weight);
    var minWeight = d3.min(words, d => d.weight);
    var fontScale = d3.scaleLinear().domain([minWeight, maxWeight]).range([12, 44]);
    var fill = d3.scaleOrdinal().range(['#111', '#333', '#555', '#000']);

    d3.layout.cloud()
      .size([width, height])
      .words(words.map(function(d) { return {text: d.text, size: Math.round(fontScale(d.weight))}; }))
      .padding(3)
      .rotate(0)
      .font('system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial')
      .fontSize(function(d) { return d.size; })
      .on('end', draw)
      .start();

    function draw(layoutWords) {
      var svg = d3.select(container).append('svg')
        .attr('width', width)
        .attr('height', height);

      var g = svg.append('g').attr('transform', 'translate(' + (width/2) + ',' + (height/2) + ')');

      g.selectAll('text')
        .data(layoutWords)
        .enter().append('text')
        .style('font-size', function(d) { return d.size + 'px'; })
        .style('font-family', 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial')
        .style('fill', function(d, i) { return fill(i); })
        .attr('text-anchor', 'middle')
        .attr('transform', function(d) { return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')'; })
        .text(function(d) { return d.text; });

      container.setAttribute('aria-description', 'A word cloud visualising key technologies, research areas, and organisations.');
    }
  }

  var timeout;
  function onResize() { clearTimeout(timeout); timeout = setTimeout(render, 200); }
  window.addEventListener('resize', onResize);
  document.addEventListener('DOMContentLoaded', render);
  if (document.readyState === 'complete' || document.readyState === 'interactive') setTimeout(render, 0);
})();
