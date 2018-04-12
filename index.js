var katzDeliLine = [];

function takeANumber(katzDeliLine){
  var theLine = 0 
  return ++theLine
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return "Currently serving" + " " + katzDeliLine.shift() + "."
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var totalLine = "The line is currently:";
    for (var i = 0, x = katzDeliLine.length; i < x; i++){
      totalLine += " " +  (i + 1) + ". " +  katzDeliLine[i] + ",";
    }
    totalLine = totalLine.slice(0, totalLine.length-1)
    return totalLine;
  } else {
    return "The line is currently empty."
  }
}


