function nonsense(string) {
  var blab = function() {
    alert(string);
  };
  return blab;
}

function nonsense(string) {
  setTimeout(function blab() {
    alert(string);
  }, 2000);
}

var blabLater = nonsense("bimlendu");
var blabAgainLater = nonsense("kumar");

blabLater();
blabAgainLater();

// second problem
var lastNameTrier = function(firstName) {
  var fixedFirstName = firstName;

  var innerFunction = function(lasName) {
    console.log(`${fixedFirstName} ${lasName}`);
  };
  return innerFunction;
};
var firstNameFarmer = lastNameTrier("Farmer"); //logs nothing
firstNameFarmer("Brown"); //logs 'Farmer Brown'

// third problem
function storyWriter() {
  var obj = {
    addWords: function(string) {
      console.log(string);
    },
    erase: function() {
      console.log("");
    }
  };
  return obj;
}

var farmLoveStory = storyWriter();
farmLoveStory.addWords("There was once a lonely cow."); // 'There was once a lonely cow.'
farmLoveStory.addWords("It saw a friendly face.");
