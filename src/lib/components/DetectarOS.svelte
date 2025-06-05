<script lang="ts">
  import { onMount } from "svelte";

  let os = "";
  let showFaq = false;

  const downloadLinks: Record<string, string> = {
    windows:
      "https://github.com/School-Roster/school_roster.app/releases/download/v0.1.1/school-roster_0.1.1_x64-setup.exe",
    macOS:
      "https://github.com/School-Roster/school_roster.app/releases/download/v0.1.1/school-roster_0.1.1_aarch64.dmg",
    linux:
      "https://github.com/School-Roster/school_roster.app/releases/download/v0.1.1/school-roster_0.1.1_amd64.AppImage",
  };

  function detectarSistemaOperativo() {
    const plataforma = navigator.platform.toLowerCase();

    if (plataforma.includes("win")) os = "windows";
    else if (plataforma.includes("mac")) os = "macOS";
    else if (plataforma.includes("linux")) os = "linux";
    else os = "desconocido";
  }

  const toggleFaq = () => (showFaq = !showFaq);

  onMount(detectarSistemaOperativo);
</script>

<button class="btn" type="button" on:click={toggleFaq}>
  {#if os && os !== "desconocido"}
    <img src="/{os}.png" alt={os} />
    <p class="os-result">Descarga para {os}</p>
  {:else}
    <p class="os-result">Descarga</p>
  {/if}
</button>

<!-- MODAL FAQ -->
{#if showFaq}
  <div class="overlay" on:click|self={toggleFaq}>
    <div class="modal" role="dialog" aria-modal="true">
      <h2>Descarga School Roster</h2>

      <details open>
        <summary>Cómo descargar e instalar</summary>
        <div>
          <h3>macOS</h3>
          <ul>
            <li>Descarga el archivo <code>.dmg</code>.</li>
            <li>
              Ábrelo y arrastra la aplicación a la carpeta <strong
                >Aplicaciones</strong
              >.
            </li>
            <li>
              Si ves una advertencia, ve a <em
                >Preferencias del Sistema → Seguridad y privacidad</em
              > y permite la app manualmente.
            </li>
          </ul>

          <h3>Windows</h3>
          <ul>
            <li>Descarga el instalador <code>.exe</code>.</li>
            <li>
              Ejecuta el archivo. Si aparece una advertencia de SmartScreen, haz
              clic en <em>"Más información"</em> y luego en
              <em>"Ejecutar de todas formas"</em>.
            </li>
          </ul>

          <h3>Linux</h3>
          <ul>
            <li>Descarga el archivo <code>.AppImage</code>.</li>
            <li>
              Hazlo ejecutable con <code
                >chmod +x nombre_del_archivo.AppImage</code
              >.
            </li>
            <li>Ejecuta el archivo directamente.</li>
          </ul>

          {#if os !== "desconocido" && downloadLinks[os]}
            <a class="download-link" href={downloadLinks[os]} download>
              Descargar para {os}
            </a>
          {:else}
            <p>
              No pudimos detectar tu sistema operativo. Visita la <a
                href="https://github.com/School-Roster/school_roster.app/releases"
                target="_blank">página de descargas</a
              >.
            </p>
          {/if}
        </div>
      </details>

      <details>
        <summary>Requisitos mínimos</summary>
        <div>
          <h4>Sistema operativo</h4>
          <ul>
            <li>Windows 8/11 (64 bits)</li>
            <li>Ubuntu 20.04 o superior</li>
            <li>macOS 11 (Big Sur) o superior</li>
          </ul>

          <h4>Procesador</h4>
          <ul>
            <li>Intel Celeron o superior</li>
            <li>AMD Ryzen 3 1200 o superior</li>
            <li>Apple M1 o superior</li>
          </ul>

          <h4>Memoria RAM</h4>
          <ul>
            <li>2 GB</li>
          </ul>

          <h4>Almacenamiento</h4>
          <ul>
            <li>250B disponibles</li>
          </ul>

          <h4>Pantalla</h4>
          <ul>
            <li>Resolución mínima de 1280 x 720 px</li>
          </ul>
        </div>
      </details>

      <button class="close" on:click={toggleFaq} aria-label="Cerrar FAQ"
        >Cerrar</button
      >
    </div>
  </div>
{/if}

<style>
  /* --- BOTÓN --- */
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.17);
    border: 2px solid #007bff;
    border-radius: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    height: 50px;
    margin: 0 auto;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #ffffff;
    position: relative;
    z-index: 2;
  }
  .btn:hover {
    background: #094067;
  }
  .btn img {
    width: 20px;
    margin-right: 10px;
  }
  .os-result {
    font-size: 1.25rem;
    margin: 0;
  }

  /* --- OVERLAY & MODAL --- */
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  .modal {
    background: #fff;
    color: #000;
    max-width: 560px;
    width: 90%;
    border-radius: 1rem;
    padding: 2rem 1.5rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

    /* Hacer scrollable si hay mucho contenido */
    max-height: 90vh;
    overflow-y: auto;
    scroll-behavior: smooth;
  }

  .modal h2 {
    margin-top: 0;
  }
  details {
    margin: 1rem 0;
  }
  summary {
    cursor: pointer;
    font-weight: 600;
  }

  .download-link {
    display: inline-block;
    width: 50%;
    margin-top: 1rem;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    border-radius: 0.5rem;
    border: none;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: background 0.3s;
  }

  .download-link:hover {
    background-color: #0056b3;
  }

  .close {
    margin-top: 1.5rem;
    display: block;
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 0.5rem;
    background: #094067;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
  }

  details h3,
  details h4 {
    margin: 1rem 0 0.5rem;
    font-size: 1.1rem;
    color: #094067;
  }

  details ul {
    padding-left: 1.25rem;
    margin-bottom: 1rem;
  }

  details ul li {
    margin-bottom: 0.5rem;
  }

  /* --- RESPONSIVE --- */
  @media (max-width: 768px) {
    .btn {
      padding: 1.2rem;
      max-width: 90%;
      height: auto;
    }
    .os-result {
      font-size: 1rem;
    }
    .btn img {
      width: 18px;
      margin-right: 8px;
    }
  }

  @media (max-width: 480px) {
    .btn {
      padding: 1rem;
      max-width: 100%;
    }
    .os-result {
      font-size: 0.9rem;
    }
    .btn img {
      width: 16px;
      margin-right: 6px;
    }
  }
  @media (max-width: 480px) {
    .download-link {
      font-size: 0.95rem;
      padding: 0.65rem;
    }
  }
</style>
