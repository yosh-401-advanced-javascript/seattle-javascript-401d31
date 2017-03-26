function alphabeticalSort(items) {
  var length = items.length;
  for (var i = (length - 1); i >= 0; i--) {
    for (var j = (length - i); j > 0; j--) {
      if (items[j] && (items[j].toLowerCase() < items[j - 1].toLowerCase())) {
        var tmp = items[j];
        items[j] = items[j - 1];
        items[j - 1] = tmp;
      }
    }
  }
}

let spooky = ['grr', 'boo', 'creek', 'squeek', 'glimer'];
alphabeticalSort(spooky);
// spooky is now sorted: ['boo', 'creek', 'glimer', 'grr', squeek']
