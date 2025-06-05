<script>
  import { fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  let currentIndex = 0;
  const images = [
    "/carru1.jpg",
    "/carru5.jpg",
    "/completo.jpg",
    "/materias.jpg",
    "/carru2.jpg",
    "/carru-2.jpg",
    "/carru-3.jpg",
    "/carru-4.jpg",
  ];

  let tiltX = 0;
  let tiltY = 0;
  const maxTilt = 5;
  let startX = 0;
  let endX = 0;

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const offsetX = (x - centerX) / centerX;
    const offsetY = (y - centerY) / centerY;
    tiltX = -offsetY * maxTilt;
    tiltY = offsetX * maxTilt;
  }

  function handleMouseLeave() {
    tiltX = 0;
    tiltY = 0;
  }

  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  function handleTouchEnd(event) {
    endX = event.changedTouches[0].clientX;
    if (startX - endX > 50) next();
    if (endX - startX > 50) prev();
  }
</script>

<div class="carousel-container">
  <div class="carousel-images">
    {#key currentIndex}
      <div
        class="image-container"
        on:mousemove={handleMouseMove}
        on:mouseleave={handleMouseLeave}
        on:touchstart={handleTouchStart}
        on:touchend={handleTouchEnd}
      >
        <img
          src={images[currentIndex]}
          alt="Carousel Image"
          transition:fade={{ duration: 300, easing: cubicOut }}
          class="carousel-image"
          style="transform: perspective(1000px) rotateX({tiltX}deg) rotateY({tiltY}deg);"
        />
      </div>
    {/key}
  </div>

  <div class="indicators">
    {#each images as _, index}
      <span
        class="indicator"
        class:active={currentIndex === index}
        on:click={() => (currentIndex = index)}
      ></span>
    {/each}
  </div>
</div>

<style>
  .carousel-container {
    position: relative;
    width: 1050px;
    height: 650px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .carousel-images {
    position: relative;
    height: 100%;
  }

  .image-container {
    width: 100%;
    height: 100%;
    perspective: 1000px;
  }

  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 10px;
    transition: transform 0.2s ease-out;
    background-color: #ffffff00;
  }

  .indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 20px;
  }

  .indicator {
    width: 30px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }

  .indicator.active {
    background-color: white;
  }

  .indicator:hover {
    background-color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 1024px) {
    .carousel-container {
      width: 90%;
      aspect-ratio: 750 / 450;
    }
  }

  @media (max-width: 600px) {
    .carousel-container {
      width: 90%;
      height: 500px;
      aspect-ratio: 750 / 450;
    }
    .indicators {
      gap: 3px;
    }
    .indicator {
      width: 8px;
      margin-top: -120px;
      height: 8px;
    }
  }
</style>
