import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';


const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        message
      };

      // Use emailjs to email contact form data
      await emailjs.send(
        process.env.GATSBY_SERVICE_ID,
        process.env.GATSBY_TEMPLATE_ID,
        templateParams,
        process.env.GATSBY_USER_ID
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };


  return (

<div className='container-fluid contact-form'>
<div className='container py-5'>

<form id='contact-form' className='justify-content-center' onSubmit={handleSubmit(onSubmit)} noValidate>

    <div className='row formRow'>

      <div className='col-12 col-md-6 pb-3 pb-md-0'>
        <input
          type='text'
          name='name'
          {...register('name', {
            required: {
              value: true,
              message: 'Please enter your name'
            },
            maxLength: {
              value: 30,
              message: 'Please use 30 characters or less'
            }
          })}
          className='form-control formInput'
          placeholder='Name'
        ></input>
        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
      </div>

      <div className='col-12 col-md-6'>
        <input
          type='email'
          name='email'
          {...register('email', {
            required: true,
            pattern:
              /^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          })}
          className='form-control formInput'
          placeholder='Email address'
        ></input>
        {errors.email && (
          <span className='errorMessage'>Please enter a valid email address</span>
        )}
      </div>
      
    </div>
    
    <div className='row formRow mb-4'>
      <div className='col'>
        <textarea
          rows={5}
          name='message'
          {...register('message', {
            required: true
          })}
          className='form-control formInput'
          placeholder='Message'
        ></textarea>
        {errors.message && <span className='errorMessage'>Please enter a message </span>}
      </div>
    </div>

    <button className='submit-btn mb-5 mb-md-0 d-flex w-auto' disabled={disabled} type='submit'>
        Send Message
    </button>



  </form>
  </div>

  <ToastContainer />

</div>





  );
};

export default ContactForm;
