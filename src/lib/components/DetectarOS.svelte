<script>
  import { onMount } from "svelte";

  let os = "";

  function detectarSistemaOperativo() {
    const plataforma = navigator.platform.toLowerCase();

    if (plataforma.includes("win")) {
      os = "Windows";
    } else if (plataforma.includes("mac")) {
      os = "macOS";
    } else if (plataforma.includes("linux")) {
      os = "Linux";
    } else {
      os = "Sistema operativo desconocido";
    }
  }

  onMount(() => {
    detectarSistemaOperativo();
  });
</script>

<button class="btn">
  {#if os}
    <p class="os-result">Descarga para {os}</p>
  {/if}
</button>

<style>
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.171);
    border: 2px solid #007bff;
    border-radius: 50px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 2;
    max-width: 400px;
    height: 50px;
    margin: 0 auto;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn:hover {
    background-color: #094067;
    color: white;
  }

  .os-result {
    font-size: 1.25rem;
    color: #ffffff;
    margin: 0;
  }

  @media (max-width: 768px) {
    .btn {
      padding: 1.2rem;
      max-width: 100%;
    }

    .os-result {
      font-size: 1rem;
    }
  }
</style>
