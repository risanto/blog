import { useEffect } from 'react'
import useScript from '../hooks/useScript'

export default function JobHuntChart() {
    useEffect(() => {
        useScript('https://www.gstatic.com/charts/loader.js')
        google.charts.load('current', { 'packages': ['sankey'] });
        google.charts.setOnLoadCallback(drawChart);
    }, [])

    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');
        data.addRows([
            ['A', 'X', 5],
            ['A', 'Y', 7],
            ['A', 'Z', 6],
            ['B', 'X', 2],
            ['B', 'Y', 9],
            ['B', 'Z', 4]
        ]);

        // Sets chart options.
        var options = {
            width: 600,
        };

        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
        chart.draw(data, options);
    }

    return (
        <div id="sankey_basic" style={{ width: '900px', height: '300px' }}></div>
    )
}