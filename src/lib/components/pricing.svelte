<script>
  import { onMount } from "svelte";
  import Login from "./login.svelte";

  let showPricing = true;
  let showLogin = false;

  export let close;

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
  <div class="overlay" on:click={close}>
    <div class="modal" on:click|stopPropagation>
      <h2 class="title">Elige tu plan</h2>

      <div class="plans">
        <div class="plan basic">
          <h3>Básico</h3>
          <p class="price">Gratis</p>
          <ul>
            <li>✔ Descarga estándar</li>
            <li>✔ Acceso limitado</li>
            <li>✖ IA para recomendacion de cambios</li>
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
            <li>✔ IA para recomendacion de cambios</li>
            <li>✔ Soporte prioritario</li>
          </ul>
          <button on:click={openLogin}>Seleccionar</button>
        </div>
      </div>

      <button class="close-btn" on:click={close}>✖</button>
    </div>
  </div>
{/if}

{#if showLogin}
  <Login close={closeLogin} />
{/if}

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

  .modal {
    background: rgb(12, 26, 34);
    border-radius: 1rem;
    padding: 2rem;
    position: relative;
    max-width: 800px;
    width: 90%;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }

  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #ffffff;
  }

  .plans {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }

  .plan {
    background: #f5f5f5;
    border-radius: 1rem;
    padding: 1.5rem;
    width: 280px;
    text-align: center;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .plan:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
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
    border-radius: 0.5rem;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    color: #ffffff;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
  }

  .plan.basic {
    border-top: 5px solid #4caf50;
  }

  .plan.pro {
    border-top: 5px solid #007bff;
  }

  @media (max-width: 768px) {
    .plans {
      flex-direction: column;
      align-items: center;
    }

    .modal {
      padding: 1.5rem;
    }
  }
</style>
