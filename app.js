import { Chart_400, Chart_400_lineChart } from './Chart.js';
const qrySel = (id) => document.querySelector(`#${id}`);


// creation chart 1
const canvas1 = qrySel('canvas1');
const ctx1 = canvas1.getContext("2d");

const graph = new Chart_400({
    context: ctx1,
    background_color: '#bbf',
    labels: ['1990', "2000", '2010', "2020"],
    scales: ['0', '100', '200', '300']

});

graph.background();
graph.draw_labels("bold 15px Arial", 'blue');
graph.draw_scales("bold 15px Arial", "red");
graph.histogram([80, 150, 220, 160], ['blue', 'grey', 'green', 'purple']);


// chart 2
const canvas2 = qrySel("canvas2");
const ctx2 = canvas2.getContext("2d");

const graph2 = new Chart_400({
	context: ctx2,
	background_color: "#fff",
	labels: ["Volvo", "Renault", "Ford", "Toyota"],
	scales: ["0%", "100%", "200%", "300%"],
});

graph2.background_line("black");
graph2.draw_labels("bold 15px Arial", "black");
graph2.draw_scales("bold 15px Arial", "black");
graph2.histogram([30, 100, 60, 260], ["blue", "grey", "blue", "grey"]);

// chart 3
const canvas3 = qrySel("canvas3");
const ctx3 = canvas3.getContext("2d");

const graph3 = new Chart_400_lineChart({
	context: ctx3,
	background_color: "#144",
	labels: ["Janvier", "Février", "Mars", "Avril"],
	scales: ["0%", "20%", "40%", "60%"],
	data: [
		{
			x: 100 + 50,
			y: 350,
		},
		{
			x: 150 + 100,
			y: 300,
		},
		{
			x: 250 + 100,
			y: 180,
		},
		{
			x: 350 + 100,
			y: 140,
		},
	],
});

graph3.background();
graph3.draw_labels("bold 15px Arial", "blue");
graph3.draw_scales("bold 15px Arial", "blue");
graph3.draw_point("white", "pink");