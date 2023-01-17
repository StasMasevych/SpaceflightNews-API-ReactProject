import { useState } from 'react'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { useNewsContext } from '../../hooks/useNewsContext';



function NewsSearch() {
  const [text, setText] = useState('')
  const {data, searchNews} = useNewsContext()

  const onChangeHandler = (e) => {
    setText(e.target.value)
    searchNews(data, text)
  }

  /* console.log(text) */

  return (
 
    <form className="search-form">
      <Box
        sx={{
          width: 500,
          maxWidth: '100%',
          '& > :not(style)': { m: 4, width: '50ch' },
        
        }}
        >
        <TextField 
          id="fullWidth"
          label="Search" 
          color="primary"
          fullWidth
          type='search'
          sx={{
              mb:"3rem",
          }}
          value={text}
          onChange={onChangeHandler}
          />
      </Box>
    </form>
    
  );
}

export default NewsSearch