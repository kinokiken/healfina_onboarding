<template>
  <div v-bind="props" :class="$style.container">
    <video
      v-if="loaded"
      ref="videoRef"
      playsinline
      :controls="false"
      :class="$style.video"
      :poster="loadedPoster"
      @click="handlePlayPause"
    >
      <source :src="loaded" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <div v-if="!videoPlaying" :class="$style.tapAnimation" />

    <button v-if="!videoPlaying" :class="$style.fallback" @click="handlePlayPause">
      Нажми, чтобы прослушать
    </button>

    <div v-if="videoPlaying" :class="$style.tapAnimation" />

    <button v-if="videoPlaying" :class="$style.fallback" @click="handlePlayPause">
      ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ  ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
    </button>

  </div>
</template>

<script setup lang="ts">
import { inject, ref, toRefs, watch, onMounted, onUnmounted } from 'vue';
import { WAS_INTERACTION_TOKEN } from '@tok/generation/tokens';
import { noop } from '@tok/ui/utility/noop';

import { VideoPresetProps } from './Media.preset.props';
import { useLoadedImage } from './useLoadedImage';

const props = defineProps<VideoPresetProps>();

const { src, poster } = toRefs(props);

const loaded = useLoadedImage(src);
const loadedPoster = useLoadedImage(poster);

const videoRef = ref<HTMLVideoElement | null>(null);
const videoPlaying = ref(false);
let observer: IntersectionObserver | null = null;

const handlePlayPause = () => {
  if (videoRef.value) {
    if (videoPlaying.value) {
      videoRef.value.pause();
      videoPlaying.value = false;
    } else {
      videoRef.value.play().catch(noop);
      videoPlaying.value = true;
    }
  }
};

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio < 0.5 && videoPlaying.value) {
          videoRef.value?.pause();
          videoPlaying.value = false;
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  if (videoRef.value) {
    observer.observe(videoRef.value);
  }
});

onUnmounted(() => {
  if (observer && videoRef.value) {
    observer.unobserve(videoRef.value);
  }

  if (videoRef.value) {
    videoRef.value.pause();
    videoRef.value.currentTime = 0;
    videoPlaying.value = false;
  }
});
</script>

<style lang="scss" module>
@import '@tok/ui/styles/local.scss';

.container {
  position: relative;

  aspect-ratio: 16/9;
}

.video {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: transparent;
}

.fallback {
  @include clearbutton;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font: var(--tok-body-xs);
  color: var(--tok-text-color-64);
}

.tapAnimation {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 2rem;
  height: 2rem;
  border-radius: 100%;

  pointer-events: none;
  user-select: none;

  background: var(--tok-text-color-16);
  transform: translate(-50%, -50%);
  margin-left: -1rem;
  margin-top: -1rem;

  animation: _tapAnimation 1s infinite ease-in-out;
}

@keyframes _tapAnimation {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  60% {
    opacity: 0.82;
  }

  100% {
    opacity: 0;
    transform: scale(2);
  }
}
</style>
