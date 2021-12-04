//2e5f60c330ea4b23b982bf4f73681e39
let matches = $.ajax({
  headers: { 'X-Auth-Token': '2e5f60c330ea4b23b982bf4f73681e39' },
  url: 'http://api.football-data.org/v2/competitions/2013/matches?matchday=1',
  dataType: 'json',
  type: 'GET',
});

let obj = {};


let competitions = $.ajax({
  headers: { 'X-Auth-Token': '2e5f60c330ea4b23b982bf4f73681e39' },
  url: 'http://api.football-data.org/v2/competitions?plan=TIER_ONE',
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
	obj = _.cloneDeep(response);
	console.log(obj);
	console.log( _.cloneDeep(response));
	console.log(response);
				// response.competitions.forEach((item, index, array) => {
				// 	React.createElement(
				// 	"li",
				// 	null,
				// 	item
				// )
				// })
				// React.createElement(
				// 	"li",
				// 	null,
				// 	response.competitions.name
				// )
  // do something with the response, e.g. isolate the id of a linked resource   

  //obj = $.parseJSON(response)

  	class Competitions extends React.Component {
		render() {
			return React.createElement(
				"div",
				{ className: "competitionsList" },
				response.competitions.map(item => React.createElement(
					"div",
					{ 
						id: item.id,
						className: "competition" },
					React.createElement(
						"button",
						{ key: item.id },
						item.name,
						React.createElement(
						"img",
						{
						 key: item.id,
						 src: item.emblemUrl
						},

						)
					),

				)),
							// response.competitions.map(item => React.createElement(
				// 		"img",
				// 		{
				// 		 key: item.id,
				// 		 src: item.emblemUrl
				// 		},
				// 	))
				// React.createElement(
				// 	"button",
				// 	null,
				// 	response.competitions[1].name
				// ),
			);
		}
	}


ReactDOM.render(React.createElement(Competitions, null), 
	document.getElementById('root'));


});



console.log(obj);
//console.log(competitions);

// const element = ();

let docCompList = document.querySelector('.competitionsList');


document.querySelector('.buttonCompetitionsList').onclick = function() {
	document.querySelector('.competitionsList').style.visibility = "visible";
	var comp = document.querySelectorAll('.competition');

	comp[1].onclick = function () {
		matches.done(function (response) {
			console.log(response);
			class Matches extends React.Component {
				render() {
					return React.createElement(
						"div",
						{className: "matches"},
						response.matches.map(item => React.createElement(
							"span",
							null,
							item.utcDate
						))
					)
				}
			}
			ReactDOM.render(React.createElement(Matches, null), 
				document.getElementById(response.competition.id));
		});
	}
	console.log(comp);
};



// console.log(obj);

// console.log(obj);