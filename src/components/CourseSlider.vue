<template>
  <div class="wrapper" ref="wrapper">
    <div class="cards-slider-header">
      <h6>{{ title }}</h6>
      <router-link :to="{ name: 'category', params: { id } }"
        >See all</router-link
      >
    </div>
    <ul class="carousel" ref="carousel">
      <CourseCard
        :title="'Present simple'"
        :level="1"
        :phrases="80"
        :background-color="backgroundColor"
      />
      <CourseCard
        :title="'Present simple'"
        :level="1"
        :phrases="80"
        :background-color="backgroundColor"
      />
      <CourseCard
        :title="'Present simple'"
        :level="1"
        :phrases="80"
        :background-color="backgroundColor"
      />
      <CourseCard
        :title="'Present simple'"
        :level="1"
        :phrases="80"
        :background-color="backgroundColor"
      />
      <CourseCard
        :title="'Present simple'"
        :level="1"
        :phrases="80"
        :background-color="backgroundColor"
      />
    </ul>
  </div>
</template>

<script setup>
import CourseCard from "./CourseCard.vue";

defineProps({
  title: String,
  id: { type: [String, Number], default: 123 },
  backgroundColor: {
    type: String,
    default: "blue",
    validator: (value) =>
      ["blue", "orange", "red", "green", "purple"].includes(value),
  },
});

let firstCardWidth = 0;

const setupCarousel = () => {
  const carousel = $refs.carousel;
  const wrapper = $refs.wrapper;

  let isDragging = false;
  let startX, startScrollLeft;

  const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    if (!isDragging) return;
    const newScrollLeft = startScrollLeft - (e.pageX - startX);
    if (
      newScrollLeft <= 0 ||
      newScrollLeft >= carousel.scrollWidth - carousel.offsetWidth
    ) {
      isDragging = false;
      return;
    }
    carousel.scrollLeft = newScrollLeft;
  };

  const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
  };

  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
  wrapper.addEventListener("mouseenter", () => clearTimeout(this.timeoutId));
  wrapper.addEventListener("mouseleave", autoPlay);
};

const autoPlay = () => {
  if (window.innerWidth < 800) return;
  const carousel = $refs.carousel;
  const totalCardWidth = carousel.scrollWidth;
  const maxScrollLeft = totalCardWidth - carousel.offsetWidth;
  if (carousel.scrollLeft >= maxScrollLeft) return;
  this.timeoutId = setTimeout(
    () => (carousel.scrollLeft += firstCardWidth),
    2500
  );
};

const scroll = (direction) => {
  const carousel = $refs.carousel;
  carousel.scrollLeft += direction * firstCardWidth;
};
</script>

<style scoped>
ul {
  margin-left: 1rem;
}
.wrapper {
  max-width: 1100px;
  width: 100%;
  position: relative;
}

.wrapper .carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% / 2.5) - 12px);
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: 0;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel.dragging {
  scroll-snap-type: none;
  scroll-behavior: auto;
}

.carousel.no-transition {
  scroll-behavior: auto;
}

@media screen and (max-width: 900px) {
  .wrapper .carousel {
    grid-auto-columns: calc((100% / 2.5) - 12px);
  }
}

@media screen and (max-width: 600px) {
  .wrapper .carousel {
    grid-auto-columns: 60%; /* Display one and a half slides */
  }
}
</style>
