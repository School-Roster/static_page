<script lang="ts">
  let email = "";
  let message = "";
  let sending = false; // animación mientras envía
  let sent = false; // estado final

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    sending = true;

    const res = await fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, message }),
    });

    sending = false;
    if (res.ok) {
      sent = true;
      email = "";
      message = "";
    } else {
      const { error } = await res.json().catch(() => ({}));
      alert(error ?? "Error desconocido al enviar");
    }
  }
</script>

<div class="contact-container">
  <h2 class="contact-title">Contacto</h2>

  <form class="contact-card" on:submit={handleSubmit}>
    <label for="email">Correo Electrónico</label>
    <input
      id="email"
      type="email"
      bind:value={email}
      required
      disabled={sent || sending}
    />

    <label for="message">Mensaje</label>
    <textarea
      id="message"
      bind:value={message}
      required
      disabled={sent || sending}
    ></textarea>

    <button
      type="submit"
      disabled={sent || sending}
      class:send-button={!sent}
      class:sent-button={sent}
      class:sending-button={sending}
    >
      {#if sent}
        ✅ Enviado
      {:else if sending}
        ⌛ Enviando…
      {:else}
        Enviar
      {/if}
    </button>
  </form>
</div>

<style>
  .contact-container {
    text-align: center;
    padding: 2rem;
    background-color: #f3f4f600;
    border-radius: 10px;
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
    min-height: 300px;
  }

  .contact-title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .contact-card {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
  }

  label {
    font-size: 1rem;
    color: #ffffff;
    width: 100%;
    text-align: left;
  }

  input,
  textarea {
    width: 100%;
    max-width: 740px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
  }

  textarea {
    min-height: 100px;
    resize: none;
  }

  .send-button {
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .send-button:hover {
    background-color: #0056b3;
  }

  .sent-button {
    background-color: #28a745 !important;
    color: white;
    font-size: 1rem;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: default;
  }

  @media (max-width: 1024px) {
    .contact-container {
      padding: 1.5rem;
    }
    .contact-title {
      font-size: 2rem;
    }
    input,
    textarea {
      max-width: 90%;
    }
  }

  @media (max-width: 600px) {
    .contact-container {
      padding: 1rem;
    }
    .contact-title {
      font-size: 1.75rem;
    }
    input,
    textarea {
      max-width: 100%;
    }
    .send-button {
      font-size: 0.9rem;
      padding: 8px 16px;
    }
  }
</style>
