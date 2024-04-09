import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <div className="grid grid-cols-1 gap-4">
        <h1 className="title">Welcome to the Crewmate Creator!</h1>
        <p className="discription">
          <em>
            Here is where you can create your very own set of crewmates before
            sending them off into space!
          </em>
        </p>
        <img
          src="https://shimmering-stardust-c75334.netlify.app/assets/crewmates.43d07b24.png"
          className="welcome-image"
        ></img>
        <img
          src="https://shimmering-stardust-c75334.netlify.app/assets/spaceship.3d8f767c.png"
          className="welcome-image"
        ></img>
      </div>
    </div>
  )
}
export default Home
