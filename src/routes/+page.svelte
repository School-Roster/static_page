<script>
  import Background from "$lib/components/Background.svelte";
  import Header from "$lib/components/Header.svelte";
  import Title from "$lib/components/Title.svelte";
  import Carrusel from "$lib/components/Carrusel.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Nosotros from "$lib/components/Nosotros.svelte";
  import DetectarOs from "$lib/components/DetectarOS.svelte";
  import Contacto from "$lib/components/Contacto.svelte";

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 120;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
</script>

<div class="Bg">
  <Background />
</div>
<div class="header">
  <Header {scrollToSection} />
</div>

<div class="Title">
  <Title />
</div>

<DetectarOs />

<div id="software" class="carrusel">
  <Carrusel />
</div>

<div id="nosotros" class="nosotros">
  <Nosotros />
</div>

<div id="contacto" class="contacto">
  <Contacto />
</div>

<Footer />

<style>
  .carrusel {
    margin-top: 50px;
    margin-bottom: 50px;
  }

  .nosotros,
  .contacto {
    margin-bottom: 50px;
  }
</style>
