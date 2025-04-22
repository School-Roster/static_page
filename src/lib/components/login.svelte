<script lang="ts">
  import { initializeApp } from "firebase/app";
  import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
  import { getAnalytics } from "firebase/analytics";

  const firebaseConfig = {
    apiKey: "AIzaSyAuNzDbQ7uDkm8njIWYF0djle4szTkMsTQ",
    authDomain: "school-roster-app.firebaseapp.com",
    projectId: "school-roster-app",
    storageBucket: "school-roster-app.appspot.com",
    messagingSenderId: "181287876141",
    appId: "1:181287876141:web:a90762a57eaa0811962aa4",
    measurementId: "G-ZGLHHL85C7",
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  let loading = false;

  export let close;

  async function handleGoogleLogin() {
    loading = true;
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Usuario autenticado:", user);

      // Realiza la solicitud a la API de pagos
      const response = await fetch("http://localhost:3000/pagos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currency: "mxn",
          amount: 99,
          quantity: 1,
          productName: "Membresia Plus",
          email: user.email, // Enviar el correo si es necesario
        }),
      });

      const data = await response.json();

      if (data.url) {
        // Redirige directamente a la pasarela de pago
        window.location.href = data.url;
      } else {
        console.log("No se recibió una URL de pago");
      }

      close(); // Cierra el modal
    } catch (error) {
      console.error("Error al iniciar sesión o al generar pago:", error);
    } finally {
      loading = false;
    }
  }
</script>

<div class="login-container">
  <h2 class="login-header">
    <img class="login-icon" src="/logosr-fr.png" alt="Icon" />
    School Rooster
  </h2>

  <div class="login-form">
    {#if loading}
      <p>Cargando...</p>
    {:else}
      <button class="google-btn" on:click={handleGoogleLogin}>
        <img class="google-icon" src="/google-icon.svg" alt="Icon" />
        Continuar con Google
      </button>
    {/if}
  </div>

  <button class="close-btn" on:click={close}>✖</button>
</div>

<style lang="scss">
  .login-container {
    background: #fff;
    border-radius: 1rem;
    padding: 3rem;
    width: 400px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }

  .login-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }

  .login-icon {
    width: 50px;
    margin-right: 10px;
  }

  .login-form {
    text-align: center;
  }

  .google-btn {
    background-color: white;
    color: black;
    border: 2px solid #ccc;
    padding: 1.5rem;
    border-radius: 0.5rem;
    width: 100%;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
  }

  .google-icon {
    width: 20px;
    margin-right: 10px;
  }

  .google-btn:hover {
    background-color: #f0f0f0;
    border-color: #888;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    color: #333;
    font-size: 2rem;
    cursor: pointer;
  }
</style>
