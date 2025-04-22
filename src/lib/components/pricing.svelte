<script>
  import Login from "./login.svelte";

  let showPricing = true;
  let showLogin = false;

  export let close = null; // opcional

  function openLogin() {
    showPricing = false;
    showLogin = true;
  }

  function closeLogin() {
    showPricing = true;
    showLogin = false;
  }
</script>

{#if showPricing}
  <div class="pricing-container">
    <h2 class="pricing-title">Elige tu plan</h2>
    <div class="pricing-cards">
      <div class="plan basic">
        <h3>Básico</h3>
        <p class="price">Gratis</p>
        <ul>
          <li>✔ Descarga estándar</li>
          <li>✔ Acceso limitado</li>
          <li>✖ IA para recomendación de cambios</li>
          <li>✖ Soporte prioritario</li>
        </ul>
        <button on:click={openLogin}>Seleccionar</button>
      </div>

      <div class="plan pro">
        <h3>Pro</h3>
        <p class="price">$999/Anual</p>
        <ul>
          <li>✔ Descarga rápida</li>
          <li>✔ Funcionalidades avanzadas</li>
          <li>✔ IA para recomendación de cambios</li>
          <li>✔ Soporte prioritario</li>
        </ul>
        <button on:click={openLogin}>Seleccionar</button>
      </div>
    </div>
  </div>
{/if}

{#if showLogin}
  <Login close={closeLogin} />
{/if}

<style>
  .pricing-container {
    text-align: center;
    padding: 2rem;
    background-color: #ffffffb5;
    border-radius: 10px;
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
    min-height: 300px;
  }

  .pricing-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .pricing-cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }

  .plan {
    background: rgb(255, 255, 255);
    border-radius: 10px;
    padding: 1.5rem;
    width: 280px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .plan:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(255, 255, 255, 0.1);
  }

  .plan h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  .price {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #007bff;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 1rem;
  }

  li {
    margin: 0.5rem 0;
    color: #555;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.7rem 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #0056b3;
  }

  @media (max-width: 1024px) {
    .pricing-container {
      padding: 1.5rem;
    }
    .pricing-title {
      font-size: 2rem;
    }
    .plan {
      width: 90%;
      max-width: 740px;
    }
  }

  @media (max-width: 600px) {
    .pricing-container {
      padding: 1rem;
    }
    .pricing-title {
      font-size: 1.75rem;
    }
    .plan {
      width: 100%;
      padding: 1rem;
    }
    button {
      font-size: 0.9rem;
      padding: 0.6rem 1rem;
    }
  }
</style>
