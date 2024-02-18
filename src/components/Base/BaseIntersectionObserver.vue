<template>
  <div ref="container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const emit = defineEmits(["isInScreen"]);
const props = defineProps<{ entriesProperty: string }>();

const container = ref();

const onElementObserved = (entries: IntersectionObserverEntry[]) => {
  if (props.entriesProperty && !entries[0][props.entriesProperty as keyof IntersectionObserverEntry]) return;
  if (!props.entriesProperty && entries[0].intersectionRatio <= 0) return;
  emit("isInScreen");
};

onMounted(() => {
  const intersectionObserver = new IntersectionObserver(onElementObserved);
  intersectionObserver.observe(container.value);
});
</script>
