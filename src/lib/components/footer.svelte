<script>
  const currentYear = new Date().getFullYear();
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-info">
      <h2><img src="/logo.png" alt="Logo" />School Roster</h2>
      <p>
        Optimización de horarios escolares y asignación eficiente de aulas con
        ayuda de IA.
      </p>
    </div>
    <div class="footer-social">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <img src="/github.png" alt="Github" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="/instagram.png" alt="Instagram" />
      </a>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; {currentYear} School Roster. Todos los derechos reservados.</p>
  </div>
</footer>

<style>
  .footer {
    background: linear-gradient(135deg, #0c1a22, #1b2a33);
    color: #fff;
    padding: 2rem 1rem;
    font-family: sans-serif;
    position: relative;
    z-index: 100;
    box-shadow: 0 -2px 5px rgba(255, 255, 255, 0.5);
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
  }
  .footer-info {
    flex: 1 1 300px;
  }
  .footer-info h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
  }
  .footer-info h2 img {
    width: 40px;
    height: auto;
    margin-right: 10px;
  }
  .footer-info p {
    font-size: 1rem;
    margin: 0;
  }
  .footer-social {
    flex: 1 1 150px;
    display: flex;
    gap: 1rem;
    justify-content: flex-end;
  }
  .footer-social a img {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
  }
  .footer-social a img:hover {
    transform: scale(1.1);
  }
  .footer-bottom {
    text-align: center;
    margin-top: 2rem;
    font-size: 0.875rem;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 1rem;
  }

  :global(body) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
  }
  :global(main) {
    flex: 1;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .footer-info,
    .footer-social {
      flex: 1 1 100%;
    }
    .footer-social {
      justify-content: center;
    }
    .footer-info h2 {
      font-size: 1.3rem;
    }
    .footer-info p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    .footer {
      padding: 1.5rem 1rem;
    }
    .footer-info h2 {
      font-size: 1.2rem;
    }
    .footer-info p {
      font-size: 0.85rem;
    }
    .footer-social a img {
      width: 20px;
      height: 20px;
    }
    .footer-bottom {
      font-size: 0.8rem;
    }
  }
</style>
