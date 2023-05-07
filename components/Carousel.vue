<template>
  <div class="relative">
    <!-- Carousel Items -->
		<div class="overflow-hidden">
			<div
				class=" flex transition-transform duration-500 ease-in-out"
				:style="{ transform: `translateX(-${currentIndex * 100}%)` }"
			>
				<div v-for="(item, index) in items" :key="index" class="w-full flex-none flex justify-center items-center">
					<img :src="item.image" :alt="item.alt" class="max-h-[800px]" />
				</div>
			</div>
		</div>

    <!-- Navigation Buttons -->
    <div class="absolute top-1/2 left-0 transform -translate-y-1/2">
      <button
        class="p-2 bg-zinc-700 text-white rounded focus:outline-none"
        @click="prev"
      >
        <Icon name="mdi:arrow-left" size="24px" />
      </button>
    </div>
    <div class="absolute top-1/2 right-0 transform -translate-y-1/2">
      <button
        class="p-2 bg-zinc-700 text-white rounded focus:outline-none"
        @click="next"
      >
        <Icon name="mdi:arrow-right" size="24px" />
      </button>
    </div>
  </div>
</template>

<script>
// List of image filenames in the 'public/images/carousel' directory
const imageFilenames = [
  'IMG-20230414-WA0012.jpg',
  'IMG-20230414-WA0014.jpg',
  'IMG-20230414-WA0036.jpg',
  'IMG-20230414-WA0038.jpg',
  'IMG-20230414-WA0042.jpg',
  'IMG-20230414-WA0049.jpg',
  'IMG-20230414-WA0067.jpg',
  'IMG-20230414-WA0078 bw.jpg',
  'IMG-20230414-WA0085.jpg',
  'IMG-20230414-WA0101 bw.jpg'
];

// Create an array of image objects with the format { image: 'path', alt: 'filename' }
const items = imageFilenames.map((filename) => {
	return {
		image: `/images/carousel/${filename}`,
		alt: filename,
	};
});

export default {
  data() {
    return {
      currentIndex: 0,
      items: items,
    };
  },
  methods: {
    next() {
      if (this.currentIndex < this.items.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.items.length - 1;
      }
    },
  },
};
</script>