import React, { useState } from "react";
import PropTypes from "prop-types";
import shortid from "shortid";
import NoteModel from "../models/NoteModel";

const AddForm = ({ handleAdd, loadData }) => {
  const [form, setForm] = useState({ content: "" });

  const handleChange = eventt => {
    const { value } = eventt.target;
    setForm({ content: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const note = new NoteModel(shortid.generate(), form.content);
    handleAdd(note);
    setForm({ content: "" });
  };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="note">Текст</label>
          <div className="ui input">
            <textarea
              rows="3"
              id="note"
              name="note"
              value={form.content}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button className="ui button" type="submit">
          Добавить
        </button>
        <button className="ui button" type="button" onClick={loadData}>
          <i className="redo green icon"></i>
        </button>
      </form>
    </div>
  );
};

AddForm.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  loadData: PropTypes.func.isRequired
};

export default AddForm;
