import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    addPost({ text });
    setText('');
  };

  return (
    <div class='post-form'>
      <div class='post-form-header bg-primary'>
        <h3>Say something...</h3>
      </div>
      <form class='form my-1' onSubmit={e => onSubmit(e)}>
        <textarea
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={e => onChange(e)}
        ></textarea>
        <input type='submit' value='Submit' class='btn btn-dark my-1' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
