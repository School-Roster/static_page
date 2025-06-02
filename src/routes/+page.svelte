<script>
  import { onMount } from "svelte";

  import Background from "$lib/components/Background.svelte";
  import Header from "$lib/components/Header.svelte";
  import Title from "$lib/components/Title.svelte";
  import Carrusel from "$lib/components/Carrusel.svelte";
  import Nosotros from "$lib/components/Nosotros.svelte";
  import Contacto from "$lib/components/Contacto.svelte";
  import Footer from "$lib/components/footer.svelte";
  import DetectarOs from "$lib/components/DetectarOS.svelte";
  import Pricing from "$lib/components/pricing.svelte";
  import TextoInformativo from '$lib/components/info.svelte';

  onMount(() => {
    document.title = "School Roster";
  });

  const headerOffsetContacto = -2100;
  const headerOffsetNosotros = -1500;
  const headerOffsetSoftware = -250;

  function scrollToContacto() {
    const section = document.getElementById("contacto");
    if (section) {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffsetContacto;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }

  function scrollToNosotros() {
    const section = document.getElementById("nosotros");
    if (section) {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffsetNosotros;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }

  function scrollToSoftware() {
    const section = document.getElementById("software");
    if (section) {
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffsetSoftware;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }
</script>

<div class="Bg">
  <Background />
</div>

<Header {scrollToContacto} {scrollToNosotros} {scrollToSoftware} />

<div class="Title">
  <Title />
</div>

<DetectarOs />
<TextoInformativo />


<div id="software" class="carrusel">
  <Carrusel />
</div>

<div id="pricing" class="pricing">
  <Pricing />
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
  .pricing {
    margin-top: 50px;
    margin-bottom: 50px;
  }
</style>
