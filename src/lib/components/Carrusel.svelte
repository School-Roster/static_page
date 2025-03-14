<script>
  let currentIndex = 0;
  const images = ["/carru-2.jpg", "/carru-3.jpg", "/carru-4.jpg"];

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }
</script>

<div class="carousel-container">
  <div class="carousel-images">
    <img
      src={images[currentIndex]}
      alt="Carousel Image"
      class="carousel-image"
    />
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
    width: 1000px;
    height: 500px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .carousel-images {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .carousel-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 10px;
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
</style>
