<script>
  export let scrollToContacto;
  export let scrollToNosotros;
  export let scrollToSoftware;
  let menuAbierto = false;

  function toggleMenu() {
    menuAbierto = !menuAbierto;
  }

  function cerrarMenu() {
    menuAbierto = false;
  }
</script>

<header class="header">
  <div class="container">
    <div class="logo">
      <img src="/logo.png" alt="Logo" /> School Roster
    </div>

    <nav class="nav" class:active={menuAbierto}>
      <a
        href="#contacto"
        on:click|preventDefault={() => {
          scrollToContacto();
          cerrarMenu();
        }}
      >
        Contacto
      </a>
      <a
        href="#nosotros"
        on:click|preventDefault={() => {
          scrollToNosotros();
          cerrarMenu();
        }}
      >
        Sobre nosotros
      </a>
      <a
        href="#software"
        on:click|preventDefault={() => {
          scrollToSoftware();
          cerrarMenu();
        }}
      >
        Software
      </a>
    </nav>

    <div class="socialmedia">
      <a
        href="https://github.com/School-Roster"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/github.png" alt="Github" />
      </a>
      <a href="https://www.instagram.com/school_roster00/" target="_blank" rel="noopener noreferrer">
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
    position: relative;
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
    transition: all 0.3s ease-in-out;
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
    z-index: 1100;
  }

  .menu-toggle img {
    width: 30px;
    height: 30px;
    margin-right: 50px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .container {
      flex-wrap: nowrap;
      justify-content: space-between;
    }

    .nav {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      right: 0;
      background: rgba(12, 26, 34, 0.95);
      width: 100%;
      text-align: center;
      padding: 1rem 0;
      margin: 0;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .nav.active {
      display: flex;
    }

    .socialmedia {
      display: none;
    }

    .menu-toggle {
      display: block;
    }

    .logo img {
      width: 80px;
      height: auto;
    }

    .logo {
      font-size: 1rem;
    }
  }

  .content {
    padding: 120px 20px 20px;
    font-family: "Nunito", sans-serif;
  }
</style>
