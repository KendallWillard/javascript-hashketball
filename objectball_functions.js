const util = require('util');

let data = require("./objectball.js")

function numPointsScored(playerName) {
  for(let location in data) {
    if (data[location]["players"][playerName]) {
      return(data[location]["players"][playerName]["points"]);
    }
  }
}

function shoeSize(playerName) {
  for(let location in data) {
    if (data[location]["players"][playerName]) {
      return(data[location]["players"][playerName]["shoe"]);
    }
  }
}

function teamColors(team) {
  for(let location in data) {
    if( data[location]["teamName"] === team )
    return(data[location]["colors"]);
  }
}

function teamNames() {
  let result = []
  for(let location in data) {
    result.push( (data[location]["teamName"]) );
  }
  return result;
}

function playerStats(playerName) {
  for( let location in data ) {
    if (data[location]["players"][playerName]) {
       return(data[location]["players"][playerName]);
    }
  }
}

function bigShoeRebounds() {
  let biggestRebound = 0;
  let biggestShoe = 0;
  let players = {};
  for( let location in data ) {
    players = (data[location]["players"])
    for(props in players) {
      if ( biggestShoe < (data[location]["players"][props]["shoe"]) ) {
        biggestRebound = (data[location]["players"][props]["rebounds"]);
      }
    }
  }
  return biggestRebound;
}

bigShoeRebounds();

let playersPoints = numPointsScored("Jason Terry");
let playersShoe = shoeSize("Jason Terry");
let colors = teamColors("Brooklyn Nets");
let teamNameArray = teamNames();
let stats = playerStats("Jason Terry");
let playersRebounds = bigShoeRebounds();


console.log(`Points: ${playersPoints}`);
console.log(`Shoe Size: ${playersShoe}`);
console.log(`Team colors: ${colors}`);
console.log(`Team Name Array: ${teamNameArray}`);
console.log(`Player Stats: ${stats}`);
console.log(`Biggest Player Rebounds: ${playersRebounds}`)
