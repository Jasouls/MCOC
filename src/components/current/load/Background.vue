<template>
  <div class="background">
    <video
      muted="muted"
      autoplay="autoplay"
      loop="loop"
      playsinline="playsinline"
      webkit-playsinline="webkit-playsinline"
      x5-playsinline="x5-playsinline"
    >
      <source
        src="//web-static.baochuangames.com/mcoc/video/mcoclangding.webm"
        type="video/webm"
      />
      <source
        src="//web-static.baochuangames.com/mcoc/video/mcoclanding.mp4"
        type="video/mp4"
      />
    </video>
  </div>
</template>
<style lang="less" scoped>
.background {
  width: 100%;
  video {
    display: block;
  }
}
</style>
