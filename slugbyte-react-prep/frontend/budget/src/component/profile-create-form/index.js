'use strict';

import React from 'react';
import {subStateUpdaterCreate, changeHandlerCreate} from '../../lib/util.js';
import budgetProfile from '../../lib/budget-proflie.js';

const ProfileCreateForm = ({app}) => {
  let {state, setState} = app;
  let updateFormState = subStateUpdaterCreate('profileCreateForm', setState);
  let resetFormState = () => updateFormState({total: 0, name: ''});
  let handleChange = changeHandlerCreate(updateFormState);

  let handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: state.profileCreateForm.name,
      total: state.profileCreateForm.total,
    };

    if(!data.name){
      return updateFormState({error: true});
    }

    budgetProfile.create(data)
    .then(profile => setState({profile}))
    .then(() => resetFormState())
    .catch(console.error);
  };


  return (
    <form
    className='profile-create-form'
    onSubmit={handleSubmit}>
    <input
    name='name'
    placeholder='name'
    onChange={handleChange}
    value={state.profileCreateForm.name}
    />

    <input
    min='0'
    step='any'
    name='total'
    type='number'
    onChange={handleChange}
    value={state.profileCreateForm.total}
    />

    <button type='submit'> create budget </button>
    </form>
  );
};

export default ProfileCreateForm;
