import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';

import { FaHome } from "react-icons/fa";

function NotFound() {
  const navigate = useNavigate()

  const backToHome = () => {
    navigate('/')
  }
  return (
    <div className="not-found">
      <h1 className="not-found__title">Oops!</h1>
      <h3 className="not-found__subtitle">404 - Page not found!</h3>
      <br/>
      <br/>
      <Box textAlign='center'>
        <Button onClick={backToHome} variant="contained" size="large" sx={{background: '#12d38c', "&:hover": {background: '#05e693'}}}>
          <FaHome style={{marginRight:'10',marginBottom: '2'}}/>
          Back to home
        </Button>
      </Box>
    </div>
  )
}

export default NotFound