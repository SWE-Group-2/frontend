<script>
export default {
  data() {
    return {
      textArray: [
        "I need help with finding internships!",
        "I don't know how to search...",
        "CSIS.com",
      ],
      stringIndex: 0,
      charIndex: 0,
      isTyping: true,
      animationCounter: 0,
      isAnimationStopped: false,
    };
  },
  computed: {
    animatedHeader() {
      return this.textArray[this.stringIndex].substring(0, this.charIndex);
    },
  },
  mounted() {
    setInterval(this.typeJs, 100);
  },
  methods: {
    typeJs() {
      if (
        this.animationCounter < this.textArray.length &&
        this.stringIndex < this.textArray.length
      ) {
        const animatedHeader = this.textArray[this.stringIndex];

        if (this.isTyping) {
          if (this.charIndex < animatedHeader.length) {
            this.charIndex++;
          } else {
            this.isTyping = false;
            this.animationCounter++;
          }
        } else {
          if (this.charIndex > 0) {
            this.charIndex--;
          } else {
            this.isTyping = true;
            this.stringIndex++;

            if (this.stringIndex >= this.textArray.length) {
              this.stringIndex = 0;
            }

            this.charIndex = 0;
          }
        }
      }

      if (
        this.animationCounter === this.textArray.length &&
        !this.isAnimationStopped
      ) {
        this.isAnimationStopped = true;
        this.stopAnimation();
      }
    },
    stopAnimation() {
      const animatedHeaderElement = document.querySelector(".animatedHeader");
      animatedHeaderElement.style.borderRight = "0px";
    },
  },
};
</script>

<template>
  <div id="landing-page">
    <div class="landing-page-header">
      <div class="animatedHeader">{{ animatedHeader }}</div>
    </div>
  </div>
</template>

<style scoped>
.landing-page-header {
  font-family:
    Roboto Slab,
    serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0em;
  line-height: 1.3;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 100px;
}

.landing-information {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 507px;
  margin-left: 30px;
}

.animatedHeader {
  color: black;
  text-align: center;
  display: inline-block;
  padding: 0;
  border-right: 1px solid #414141;
}
</style>
