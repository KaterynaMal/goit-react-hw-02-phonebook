import React from 'react';
import css from './ContactsForm.module.css';



const Filter = ({filter, handleFilter}) => {
  return (
      <div>
           <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  )
}

export { Filter };
