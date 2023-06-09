import React, { useEffect } from 'react'

import Quill from 'quill';
import 'quill/dist/quill.snow.css';

import {Box} from '@mui/material';
import styled from '@emotion/styled';




const Component = styled.div`
background : #F5F5F5;
`
const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],       
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],              
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],     
    [{ 'indent': '-1'}, { 'indent': '+1' }],        
    [{ 'direction': 'rtl' }],                         
    [{ 'size': ['small', false, 'large', 'huge'] }],  
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                        
  ];
const Editor = () => {

    useEffect(()=>{
       const quillServer = new Quill('#container', {theme:'snow', modules: {toolbar:toolbarOptions}})
    }, []);

  return (
    <Component>
        <Box className='container' id='container'></Box>
    </Component>
  )
}

export default Editor;
