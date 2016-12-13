401 JS -- class 38 filters and bootstrap
===

## Angular Filter Resources
* [filter guide]

## Bootstrap Resources

## Learning Objectives
<!-- unordered list of learning objectives --> 

## Overview
#### overivew sub topic 

#### example fuzzy search filter
#### built in filters
* angular filters are away to format the value of an expression for display
* filters can be used in templates, controllers, or services
* built in filters include
 * [date filter] - helps format dates
 * [currency filter] - helps format currency
 * [json filter] - helps format json
 * [limitTo filter] - helps limit number of items in a list
 * [lowercase filter] - helps lowercase strings
 * [uppercase filter] - help lowercase strings
* using a filter in a template takes the form ` {{ value | filterName:arg1:arg2 }} `
* date filter example ` <p> {{ someCtrl.timestamp | date:'short' }} </p>`

### creating custom filters
``` javascript
// define a filter that will cut out strings that dont match a fuzzy search
myApp.filter('fuzzyFilter', function(){

  return function(stringList, searchTerm){
    let fuzzyRegex = genorateFuzzyRegex(searchTerm);

    return stringList.filter(str => {
      return fuzzyRegex.test(str.toUpperCase());
    });
  };
});

function genorateFuzzyRegex(input){
  if (!input) return /.*/
  let fuzzyString = '.*' + input.toUpperCase().split('').join('.*') + '.*';
  return new RegExp(fuzzyString);
}
```
``` html
<!--use the fuzzyFilter in a tempate-->
<div>
  <input type="text" ng-model="searchUserCtrl.searchTerm">
  <p ng-repeat="name in searchUserCtrl.names | fuzzyFilter:searchUserCtrl.searchTerm" {{name}}  </p>
</div>
```

<!--links -->
[filter guide]: https://docs.angularjs.org/guide/filter
[date filter]: https://docs.angularjs.org/api/ng/filter/date
[currency filter]: https://docs.angularjs.org/api/ng/filter/currency
[json filter]: https://docs.angularjs.org/api/ng/filter/json
[limitTo filter]: https://docs.angularjs.org/api/ng/filter/limitTo
[lowercase filter]: https://docs.angularjs.org/api/ng/filter/lowercase
[uppercase filter]: https://docs.angularjs.org/api/ng/filter/uppercase 
