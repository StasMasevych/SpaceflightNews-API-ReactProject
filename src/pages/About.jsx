import image from '../components/layout/assets/news-img.jpg'

function About() {
  return (
   <div className="about__container">
     <section className="about">
      <h2>This is the Spaceflight News API React Project</h2>
      <div className="image-container">
        <img src={image} alt="img"/>
      </div>
      <div>
        <h3>Lets visit the latest world top news!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus provident rem, impedit sed itaque cumque mollitia nesciunt eum a, maiores omnis natus rerum nam nihil. Qui consectetur vero fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci cupiditate architecto neque voluptatem qui quaerat! Assumenda veritatis hic magni, voluptas doloremque iste soluta corrupti voluptate dolorem, quis rerum incidunt provident!</p>
      </div> 
    </section>
   </div>
  )
}

export default About