var chartUtil = {
	initialized: false,
	init: function (){
		Highcharts.setOptions({
			colors: ['#009fda', '#66cc33', '#cc0033'],
			chart: {
				style: {
					fontFamily: 'Open Sans'
				},
				spacingLeft: 0,
				spacingRight: 0
			}
		});
		this.initialized = true;
	},
	render: function (el) {
		if (!this.initialized) this.init();
		$(el).highcharts({
			title: {
				text: ''
			},
			credits: {
				enabled: false
			},
			legend: {
				itemMarginTop: 5,
				itemMarginBottom: 5,
				symbolWidth: 8,
				symbolRadius: 0,
				symboHeight: 20
			},
			tooltip: {
				enabled: false
			},
			plotOptions: {
				series: {
					lineWidth: 3
				}
			},
			xAxis: {
				tickColor: '#17191f',
				lineColor: '#ffffff',
				tickLength: 8,
				lineWidth: 0,
				tickmarkPlacement: 'on',
				tickPosition: 'outside',
				offset: 0,
				categories: ['0', '10', '20', '30', '40', '50' ]
			},
			yAxis: {
				tickColor: '#17191f',
				gridLineColor: '#ffffff',
				lineWidth: 0,
				offset: 0,
				title: {text: ''},
				labels: {
					format: '{value} —',
					align: 'right',
					x: 15,
					y: 0
				}
			},
			series: [
				{	name: 'Citation',
					data: [99, 71, 106, 129, 144, 176],
					marker: {
						enabled: true,
						radius: 4,
						lineWidth: 2,
						lineColor: '#fff',
						symbol: 'circle'
					}
				},
				{	name: 'Downloads from IEEE Xplore',
					data: [15, 85, 73, 110, 78, 94 ],
					marker: {
						enabled: true,
						radius: 4,
						lineWidth: 2,
						lineColor: '#fff',
						symbol: 'circle'
					}
				},
				{
					name: 'Downloads from Google Scholar ' + "(" + 'estimate' + ")",
					data: [71.5, 106.4, 129.2, 144.0, 176.0, 29.9 ],
					marker: {
						enabled: true,
						radius: 4,
						lineWidth: 2,
						lineColor: '#fff',
						symbol: 'circle'
					}
				}
			]
		});
	}
};
