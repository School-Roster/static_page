<script>
  import { fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  let currentIndex = 0;
  const images = ["/carru-2.jpg", "/carru-3.jpg", "/carru-4.jpg"];

  let tiltX = 0;
  let tiltY = 0;
  const maxTilt = 5;

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
    tiltX = offsetY * maxTilt;
    tiltY = offsetX * -maxTilt;
  }

  function handleMouseLeave() {
    tiltX = 0;
    tiltY = 0;
  }
</script>

<div class="carousel-container">
  <div class="carousel-images">
    {#key currentIndex}
      <div
        class="image-container"
        on:mousemove={handleMouseMove}
        on:mouseleave={handleMouseLeave}
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

  <button class="carousel-button prev" on:click={prev}> &#10094; </button>
  <button class="carousel-button next" on:click={next}> &#10095; </button>

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
    width: 750px;
    height: 450px;
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
    border-radius: 10px;
    transition: transform 0.2s ease-out;
  }

  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 2rem;
    z-index: 10;
  }

  .prev {
    left: 10px;
  }

  .next {
    right: 10px;
  }

  .indicators {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 5px;
  }

  .indicator {
    width: 10px;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    cursor: pointer;
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
    .carousel-button {
      padding: 0.75rem;
      font-size: 1.75rem;
    }
  }

  @media (max-width: 600px) {
    .carousel-container {
      width: 100%;
      aspect-ratio: 750 / 450;
    }
    .carousel-button {
      padding: 0.5rem;
      font-size: 1.5rem;
    }
    .indicators {
      gap: 3px;
    }
    .indicator {
      width: 8px;
      height: 8px;
    }
  }
</style>
