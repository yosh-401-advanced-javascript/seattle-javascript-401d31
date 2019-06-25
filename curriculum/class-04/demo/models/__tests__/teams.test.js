// const Teams = require('../teams/teams-model.monolithic.js');
const Teams = require('../teams/teams.modular.js');


describe('Teams Model', () => {

  let teams;

  beforeEach(() => {
    teams = new Teams();
  })

  it('can post() a new team', () => {
    let obj = { name: 'Test Team' };
    return teams.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a team', () => {
    let obj = { name: 'Test Team' };
    return teams.create(obj)
      .then(record => {
        return teams.get(record._id)
          .then(team => {
            Object.keys(obj).forEach(key => {
              expect(team[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

});