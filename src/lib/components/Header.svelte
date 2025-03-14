<script>
  export let scrollToSection;
</script>

<header class="header">
  <div class="container">
    <div class="logo">
      <img src="/logo.png" alt="Logo" /> School Roster
    </div>
    <nav class="nav">
      <a on:click={() => scrollToSection("contacto")}>Contacto</a>
      <a on:click={() => scrollToSection("nosotros")}>Sobre nosotros</a>
      <a on:click={() => scrollToSection("software")}>Software</a>
    </nav>
    <div class="socialmedia">
      <a
        href="https://github.com/School-Roster"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/github.png" alt="Github" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/instagram.png" alt="Instagram" />
      </a>
    </div>
  </div>
</header>

<main class="content">
  <section id="contacto">Contenido de Contacto</section>
  <section id="nosotros">Contenido de Sobre Nosotros</section>
  <section id="software">Contenido de Software</section>
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Big+Shoulders:opsz,wght@10..72,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap");

  .header {
    background: linear-gradient(
      135deg,
      rgba(12, 26, 34, 0.8),
      rgba(12, 26, 34, 0.8)
    );
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 4px 10px rgba(130, 129, 129, 0.1);
    z-index: 1000;
  }

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
    font-family: "Big Shoulders", cursive;
  }

  .logo img {
    width: 140px;
    height: 90px;
    margin-right: 10px;
  }

  .nav {
    display: flex;
    gap: 1.5rem;
    margin-right: 16rem;
  }

  .nav a {
    color: rgba(255, 255, 255, 0.639);
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    font-family: "Big Shoulders", cursive;
  }

  .socialmedia img {
    width: 34px;
    height: 34px;
    margin-right: 10px;
  }

  .content {
    margin-top: 120px;
    padding: 20px;
    font-family: "Nunito", sans-serif;
  }
</style>
