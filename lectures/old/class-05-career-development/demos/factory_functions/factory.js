function User(name, permissions){
  this.name = name;
  this.permissions = permissions
}

User.prototype.getName = function() { return this.name };

let ada = new User('adalove', 'admin');
console.log(ada.getName());


// factory function
function user(name, permissions){
  let proto = {
    getName: function(){ return this.name },
  };

  let result = Object.create(proto);
  result.name = name;
  result.permissions = permissions;

  return result;
}

let delia = user('delia', 'moderator');
console.log(delia.getName());
