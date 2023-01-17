import {FaGithub} from 'react-icons/fa';

function Contact() {
  
  return (
    <div className="contact__container">
      <h1 className="contact">Let's be in contact!🙌</h1>
      <br/>
      <div className="contact__info">
        <a className="contact__link" href="https://github.com/StasMasevych">
          <FaGithub 
          size='2em'
          style={{color: 'green'}}
          />
        </a>
        <h4 className="contact__person">Stas Masevych</h4>
      </div>
    </div>
  )
}

export default Contact