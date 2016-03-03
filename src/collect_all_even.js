'use strict';

function collect_all_even(collection) {
  var collection_result = [];
  collection_result = collection.filter(function(ele){
    return (ele % 2 == 0);
  });
  return collection_result;
}

module.exports = collect_all_even;
