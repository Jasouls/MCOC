<template>
  <div>
    <Background></Background>
    <Video></Video>
    <Aside></Aside>
    <Bottom></Bottom>
  </div>
</template>
<script>
import Background from '@/components/current/photo/Background.vue'
import Bottom from '@/components/current/bottom/Bottom.vue'
import Aside from '@/components/current/fixed/Aside.vue'
import Video from '@/components/current/photo/Video.vue'
export default {
  components: {
    Background,
    Bottom,
    Aside,
    Video
  }
}
</script>
