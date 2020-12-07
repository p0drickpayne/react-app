import Formik from './Formik'
import styled from 'styled-components'

// const Paragraph = Styled.p`
//   text-decoration: underline;
// `
const Div = styled.div`
    flex: 1;
    background-color: red;

`



function Contact() {
   
    return(
        <Div>
            
            <Formik />
      </Div>
    ) 
}

export default Contact