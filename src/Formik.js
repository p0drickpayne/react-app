import { Formik } from 'formik'
import * as Yup from 'yup'
import styled, {css} from 'styled-components'

const Button = styled.button`
background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
  `
  const Div = styled.div`
    background-color: beige;
    flex-direction: row;
  `
  const Form = styled.form`
   width: 300;
   display: flex;
   flex-direction: column;
   align-items: center;
  `
 
 const Basic = () => (
   <Div>
     <h1>Kontakta mig!</h1>
     <Formik
       initialValues={{ email: '', firstName: '', lastName: "", message: "" }}
       validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        message: Yup.string().min(20, 'must be at least 20 characters').required('Required'),
      })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <Form onSubmit={handleSubmit}>
             Email
           <input
             type="email"
             name="email"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.email}
           />
           {errors.email && touched.email && errors.email}
            <label>FirstName</label>
           <input
             type="text"
             name="firstName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.firstName}
           />
           {errors.firstName && touched.firstName && errors.firstName}
           Last name
           <input
             type="text"
             name="lastName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.lastName}
           />
           {errors.lastName && touched.lastName && errors.lastName}
           Message 
           <textarea 
           type="text" 
           name="message" 
           onChange={handleChange} 
           onBlur={handleBlur} 
           value={values.message} 
           />
           {errors.message && touched.message && errors.message}
           <Button primary type="submit" disabled={isSubmitting}>
             Submit
           </Button>
         </Form>
       )}
     </Formik>
   </Div>
 );
 
 export default Basic;
