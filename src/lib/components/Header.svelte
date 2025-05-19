<script>
  export let scrollToContacto;
  export let scrollToNosotros;
  export let scrollToSoftware;
  let menuAbierto = false;

  function toggleMenu() {
    menuAbierto = !menuAbierto;
  }
</script>

<header class="header">
  <div class="container">
    <div class="logo">
      <img src="/logo.png" alt="Logo" /> School Roster
    </div>
    <nav class="nav {menuAbierto ? 'active' : ''}">
      <a href="#contacto" on:click|preventDefault={scrollToContacto}>Contacto</a
      >
      <a href="#nosotros" on:click|preventDefault={scrollToNosotros}
        >Sobre nosotros</a
      >
      <a href="#software" on:click|preventDefault={scrollToSoftware}>Software</a
      >
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
    <button class="menu-toggle" on:click={toggleMenu}>
      <img src="/menu.png" alt="Menú" />
    </button>
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
    font-size: 1.2rem;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
    font-family: "Big Shoulders", cursive;
  }

  .logo img {
    width: 100px;
    height: 70px;
    margin-right: 10px;
  }

  .nav {
    display: flex;
    gap: 2rem;
    flex-grow: 1;
    justify-content: center;
    margin-right: 200px;
  }

  .nav a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    font-family: "Big Shoulders", cursive;
  }

  .socialmedia {
    display: flex;
    gap: 0.5rem;
  }

  .socialmedia img {
    width: 30px;
    height: 30px;
  }

  .menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  .menu-toggle img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    .nav {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 60px;
      right: 0;
      background: rgba(12, 26, 34, 0.9);
      width: 100%;
      text-align: center;
      padding: 1rem;
    }

    .nav.active {
      display: flex;
    }

    .menu-toggle {
      display: block;
    }

    .container {
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  .content {
    padding: 20px;
    font-family: "Nunito", sans-serif;
  }
</style>
