'use strict';

import React from 'react';

import {
  subStateUpdaterCreate,
  changeHandlerCreate,
  classToggler, 
  renderIf,
} from '../../lib/util.js';

import budgetProfile from '../../lib/budget-proflie.js';

const ProfileChangeForm = ({app}) => {
  let {state, setState} = app;
  let updateFormState = subStateUpdaterCreate('profileChangeForm', setState);
  let handleChange = changeHandlerCreate(updateFormState);

  let resetFormState = () => 
    updateFormState({name: '', error: false, notFound: ''});

  let className = classToggler({
    'profile-create-form': true,
    error: state.profileChangeForm.error,
  });

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log('booooya');
    budgetProfile.fetch({name: state.profileChangeForm.name})
    .then(profile => setState({profile}))
    .then(() => resetFormState())
    .catch((err) => {
      updateFormState({ notFound: state.profileChangeForm.name });
      console.log(err);
    });
  };

  return (
    <form 
      autoComplete='off'
      className={className} 
      onSubmit={handleSubmit}>

      {renderIf(state.profileChangeForm.notFound,
        <p className="hint error">
          Sorry, we cant find the profile {state.profileChangeForm.notFound}.
        </p>)}

      <input 
        name='name'
        minLength='1'
        placeholder='name'
        onChange={handleChange}
        value={state.profileChangeForm.name}
        />

        <button type='submit'> change form </button>
    </form>
  );
};

export default ProfileChangeForm;
