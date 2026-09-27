export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      My Dog:
      <br />
      <img
        id="wd-your-image"
        src="/images/MyDog.jpg"
        height="200px"
        alt="My Dog"
      />
      <br />
      Another image from the internet:
      <br />
      <img
        id="wd-ai-image"
        width="200px"
        alt="Dumbbell Nebula"
        src="https://images-assets.nasa.gov/image/PIA14417/PIA14417~medium.jpg"
      />
    </div>
  );
}
