async function handleGoogleLogin() {
  loading = true;
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("Usuario autenticado:", user);

    const pagoResponse = await fetch("http://localhost:3000/pagos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        currency: "mxn",
        amount: 999,
        quantity: 1,
        productName: "Membresia Pro School roster",
        email: user.email,
      }),
    });

    const data = await pagoResponse.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      console.log("No se recibió la URL de la pasarela");
    }

    close();
  } catch (error) {
    console.error(
      "Error al iniciar sesión con Google o al generar el pago:",
      error
    );
  } finally {
    loading = false;
  }
}
