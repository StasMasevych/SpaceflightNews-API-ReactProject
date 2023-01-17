import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div className="spinner">
      <img
        width={500}
        className="spinner__img"
        src={spinner}
        alt='Loading...'
      />
    </div>
  )
}

export default Spinner