//2e5f60c330ea4b23b982bf4f73681e39
// $.ajax({
//   headers: { 'X-Auth-Token': '2e5f60c330ea4b23b982bf4f73681e39' },
//   url: 'http://api.football-data.org/v2/matches',
//   dataType: 'json',
//   type: 'GET',
// }).done(function(response) {

//   // do something with the response, e.g. isolate the id of a linked resource   
//   console.log(response);
//   //alert(response.competitions[0].code);
// });

let obj = {};

let competitions = $.ajax({
  headers: { 'X-Auth-Token': '7206eff818fa4f5e8de74aa5905f67e4' },
  url: 'http://api.football-data.org/v2/competitions?plan=TIER_ONE',
  dataType: 'json',
  type: 'GET',
}).done(function(response) {
	Object.assign(obj, response);
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

  class Competitions extends React.Component {
	render() {
		return React.createElement(
			"div",
			{ className: "competitionsList" },
			response.competitions.map(item => React.createElement(
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

  //console.log(response);
  //$('#root').html(response);
  //alert(response.competitions[0].code);
  //competitions = response;
});

//console.log(competitions);

// const element = ();

document.querySelector('.buttonCompetitionsList').onclick = function() {
	document.querySelector('.competitionsList').style.visibility = "visible";
};


console.log(obj);