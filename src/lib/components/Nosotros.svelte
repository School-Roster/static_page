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
        <div class="socialmedia">
          <a
            href="https://github.com/awtGerry"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="Github" />
          </a>
          <a
            href="https://www.instagram.com/moises.morales00/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" />
          </a>
        </div>
        <p>Ing. Victor Rodriguez</p>
      </div>
    </div>
    <div class="image-item">
      <img src="/ftmoises.jpg" alt="Imagen de la empresa" />
      <div class="image-text">
        <div class="socialmedia">
          <a
            href="https://github.com/moye30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="Github" />
          </a>
          <a
            href="https://www.instagram.com/moises.morales00/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" />
          </a>
        </div>
        <p>Ing. Moises Morales</p>
      </div>
    </div>
    <div class="image-item">
      <img src="/ftadrian.jpg" alt="Imagen de la empresa" />
      <div class="image-text">
        <div class="socialmedia">
          <a
            href="https://github.com/Abrotello"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="Github" />
          </a>
          <a
            href="https://www.instagram.com/a.brotello/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" />
          </a>
        </div>
        <p>Ing. Adrian Botello</p>
      </div>
    </div>
    <div class="image-item">
      <img src="/ftcc.jpg" alt="Imagen de la empresa" />
      <div class="image-text">
        <div class="socialmedia">
          <a
            href="https://github.com/chriscaza"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="Github" />
          </a>
          <a
            href="https://www.instagram.com/chris.caza/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="Instagram" />
          </a>
        </div>
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
    padding: 0 20px;
  }

  .image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }

  .image-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
    position: relative;
    width: 150px;
  }

  .image-item:hover {
    transform: translateY(-10px);
  }

  .image-item img {
    width: 100%;
    max-width: 120px;
    border-radius: 50px;
    transition: transform 0.3s ease;
  }

  .image-text {
    font-size: 1rem;
    color: #ffffff;
    margin-top: 5px;
    position: relative;
    transition: transform 0.3s ease;
  }

  .socialmedia {
    opacity: 0;
    transform: translateY(10px);
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 5px;
  }

  .image-item:hover .socialmedia {
    opacity: 1;
    transform: translateY(0);
  }

  .socialmedia img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    .about-us-title {
      font-size: 2rem;
    }

    h1 {
      font-size: 1rem;
    }

    .image-container {
      flex-direction: column;
      align-items: center;
    }

    .image-item {
      width: 100%;
      max-width: 250px;
    }
  }

  @media (max-width: 480px) {
    .about-us-title {
      font-size: 1.8rem;
    }

    h1 {
      font-size: 0.9rem;
    }

    .socialmedia img {
      width: 24px;
      height: 24px;
    }
  }
</style>
