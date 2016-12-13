401 JS -- class 37 Component Callbacks
===

## Binding Resources
<!-- unordered list of links with suggestions to (Watch, Read, Skim, Review...)--> 
* Review [component guide]

## Learning Objectives
<!-- unordered list of learning objectives --> 
* Students will learn how to invoke a function in a parent $scope
* Students will be able to identify reasns to use a callback binding

## Overview
* angular's `&` binding is used to configure a component to recieve a callback through its attributes
* `&` bindings should be used any time a child component neads to invoke its parents function
* `&` bindings have a really tricky syntax
 * when passing a function in to a component the atribute will have the form  
 `bindingName="functionName(paramName1, paramName2)"`
 * _functionName_ is not being invoked above, instead it is just defining the named paramiters paramName1 and paramName2
 * when invokeing a function from within the compoent the call will have the form  
 `bindingName({paramName1: someValue, paramName2: someValue})`
 * the calling function will allways pass an object whos keys will map to the named paramiters
  
#### callback binding example  
bare with the order, you will need to read this several times 
 ``` javascript
// define the componet that expects a callback 
myApp.component('articleItem', {
  template: require('./article-item.html'),
  controllerAs: 'articleItemCtrl',
  bindings: {
    article: '<',
    deleteArticle: '&',
  },
});
```

``` javascript
// define the parent controller with a function deleteArticle
myApp.controller('MainController', ['$log', 'articleService', function($log, articleService){
  this.onInit = function(){
    articleService.fetchArticles()
    .then(articles => {
      this.articles = articles;
    })
    .catch(err => $log.error(err.message);
  };

  // if articleService.deleteArticle succedes it will remove the article from this.articles
  this.deleteArticle = function(article){
    articleService.deleteArticle(article)
    .then(() => {
      for(var i=0; i<this.articles.length; ++i){
        if(this.articles[i]._id === article._id){
          delete this.articles[i]; 
          break;
        }
      }
    })
    .catch(err => $log.error(err.message);
  }
});
```

``` html
<!-- this is the parent template --> 
<main class="main-container">
  <article-item ng-repeat="article in mainCtrl.articles"
    article="article" deleteArticle="mainCtrl.deleteArticle(article)"> </article-item>
</main>
```
* **EXTREEMLY IMPORTANT:** when `mainCtrl.deleteArticle(article)` is passed into the `<article-item>` it is not invokeing the _mainCtrl.deleteArticle_ function. Infact it is nameing the first paramiter **article**. Later that same name will be used as a key in an object when the function actualy gets invoked from within the `<article-item>`

``` html 
<!-- article item template -->
<div class="article-item">
  <h3> {{ articleItemCtrl.title }} </h3>
  <h3> {{ articleItemCtrl.content }} </h3>
  <button ng-click="articleItemCtrl.deleteArticle({article: articleItemCtrl.article})"> Delete </button>
</div>
```
* When _articleItemCtrl.deleteArticle_ is invoked it passes an object with the key **article** as a value. That value must be the same as the named paramiter defined when the callabck function was passed into this `article-item` in the parent template.



<!--links -->
[component guide]: https://docs.angularjs.org/guide/component

