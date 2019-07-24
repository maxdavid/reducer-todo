import React from 'react';
import { useStateValue } from '../hooks';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

function TodoForm({ values, errors, touched, isSubmitting }) {
  const [{ todoList }, dispatch] = useStateValue();
  return (
    <Form>
      <h2>Add Todo</h2>
      <div>
        {touched.title && errors.title && <p>{errors.title}</p>}
        <Field type='text' name='title' placeholder='New Todo' />
      </div>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const FormikTodoForm = withFormik({
  mapPropsToValues({ title, tag }) {
    return {
      title: title || ''
    };
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().required('Todo title is required')
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting, props }) {
    props.dispatch({ type: 'ADD_TODO', payload: values });
  }
})(TodoForm);

export default FormikTodoForm;
