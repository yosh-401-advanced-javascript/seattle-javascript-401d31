401 JS -- class 36 Component Bindings
=========================

## Component Resources
* Review [component guide]

## Learning Objectives
* Students will understand how to modify the state of a component usigin atribute bindings
* Students will know how to identify when to use atribute bindings

## Overview
#### configuring component bindings 
* component bindings are a way to pass state into a component at initialization
* bindings create properties $scope of the component's controller
* the $scope of a component's controller is bound context of the controller function
 * that means that binding properties can be acceced in a controller by `this.propertyName`
* types of component bindings
 * `@` - used to pass a literal value into a component's state
 * `=` - used to pass a two way data binding reference to an object into a component's state
 * `<` - used to pass a one way data binding reference to an object into a component's state
 * `&` - used to pass a callback function into a component's state
``` html
<!-- image item template -->
<li class="image-item"> 
  <h2> {{ imageItemCtrl.image.name }} </h2>
  <img ng-src="{{ imageItemCtrl.image.imageURL }}" alt="{{ imageItemCtrl.image.name }}">
  <p> {{ imageItemCtrl.image.totalHearts }} </p>
  <button ng-click="imageItemCtrl.heartImage()"> &lt;3 </button>
</li>
````
``` javascript
// imageItem declaration
myApp.component('imageItem', {
  template: require('./image-item.html'),
  controllerAs: 'imageItemCtrl',
  bindings: {
    image: '<', // creates an one way data bound referance called image on the controller's context
  }, 
  controller: ['$log', 'heartService', function($log){
    this.heartImage = function(){
      heartService.heartImage(this.image)
      .then(() => this.image.totalHearts++)
      .catch(err => $log.error(err.message));
    };
  }],
});
```
``` html
<!-- using the componen image-item component                   -->
<!--                                                           --> 
<!--  homeCtrl.image = {                                       -->
<!--    name: 'cool beach photo',                              -->
<!--    imageURL: /images/beach.png',                          -->
<!--    totalHearts: 31,                                       -->
<!--  }                                                        -->
<!--                                                           --> 

<ul>
  <image-item image="homeCtrl.image"> </image-item>
</ul>
```
``` html
<!-- compiled -->
<ul>
  <image-item>
    <li class="image-item"> 
      <h2> cool beach photo </h2>
      <img src="/images/beach.png" alt="cool beach photo">
      <p> 31 </p>
      <button ng-click="imageItemCtrl.heartImage()"> &lt;3 </button>
    </li>
  </image-item>
</ul>
```
#### mocking component bindings for testing
* $componentController takes three arguments 
 * 1) the component name
 * 2) locals -- perhaps to mock the setup from an ng-init directive
 * 3) mock binings
* to mock the bindings for a controller create an object with all the binding properties on it and pass it in as the third argument to $componentController
``` javascript
it('should initiaize the the scope with the bindings', () => {
  let mockBindings = {
    image: {
      name: 'the moon',
      imageUrl: '/images/moon.gif',
      totalHearts: 6043,
    },
  };
  
  let imageItemCtrl = this.$componentController('imageItem', null, mockBindings);
  
  expect(imageItemCtrl.image.name).toEqual('the moon');
})

```


<!--links -->
[component guide]: https://docs.angularjs.org/guide/component
