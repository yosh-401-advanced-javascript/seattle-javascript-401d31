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
<div>
  <article-item ng-repeat="article in mainCtrl.articles"
    article="article" deleteArticle="mainCtrl.deleteArticle(article)"> </article-item>
</div>
```
``` html 
<!-- article item template -->
<div class="article-item">
  <h3> {{ articleItemCtrl.title }} </h3>
  <h3> {{ articleItemCtrl.content }} </h3>
  <button ng-click="articleItemCtrl.deleteArticle({article: articleItemCtrl.article})"> Delete </button>
</div>
```
``` javascript
// article item declaration
myApp.component('articleItem', {
  template: require('./article-item.html'),
  controllerAs: 'articleItemCtrl',
  bindings: {
    article: '<',
    deleteArticle: '&',
  },
});
```


<!--links -->
[component guide]: https://docs.angularjs.org/guide/component

