<script>
  let aboutUsText =
    "Somos una empresa de desarrollo de software, y hemos creado School Roster, un desarrollo pensado en la gente de las escuelas dedicada a crear de manera manual los horarios escolares, una labor que solía demandar mucho tiempo y recursos, pero la cual gracias a nuestro algoritmo este proceso ayudará a ahorrar mucho tiempo.";
</script>

<div class="about-us-container">
  <h2 class="about-us-title">Sobre Nosotros</h2>
  <h1>{aboutUsText}</h1>

  <div class="image-container">
    <div class="image-item">
      <img src="/ftvic.jpg" alt="Imagen de la empresa" />
      <div class="image-text">
        <p>Ing. Victor Rodriguez</p>
      </div>
    </div>
    <div class="image-item">
      <img src="/ftmoises.jpg" alt="Imagen de la empresa" />
      <div class="image-text">
        <p>Ing. Moises Morales</p>
      </div>
    </div>
    <div class="image-item">
      <img src="/ftadrian.jpg" alt="Imagen de la empresa" />
      <div class="image-text">
        <p>Ing. Adrian Botello</p>
      </div>
    </div>
    <div class="image-item">
      <img src="/ftcc.jpg" alt="Imagen de la empresa" />
      <div class="image-text">
        <p>Ing. Christian Cazarin</p>
      </div>
    </div>
  </div>
</div>

<style>
  .about-us-container {
    text-align: center;
    padding: 2rem;
    background-color: #f3f4f600;
    border-radius: 10px;
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
    min-height: 300px;
  }

  .about-us-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: normal;
    color: #ffffff;
  }

  .image-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .image-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-text {
    font-size: 1.1rem;
    color: #ffffff;
    margin-top: 10px;
  }

  .image-container img {
    width: 120px;
    height: auto;
    border-radius: 50px;
  }
</style>
