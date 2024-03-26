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
    setInterval(this.typeJs, 50);
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
    <div class="landing-page-body">
      <div class="landing-page-information">
        <span class="landing-page-title">
          Computer Science Internship Search
        </span>
        <div class="landing-page-description">
          A site to aid MUIC computer science students in finding internships:
          <span class="bullet-item">
            &#x2022; Collated/crowdsourced resources on internship requirements
          </span>
          <span class="bullet-item">
            &#x2022; Internship opportunities that are vetted / shared by CS
            students (+ instructors) for CS students
          </span>
          <span class="bullet-item">
            &#x2022; A hub for CS students to share their profiles and get
            feedback
          </span>
        </div>
      </div>
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
  margin-bottom: 60px;
  margin-top: 100px;
}

.landing-page-body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-width: 1500px;
}
.landing-page-information {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  animation-name: fade-in;
  animation-duration: 5s;
}
.landing-page-title {
  color: #dd9832;
  font-weight: 600;
  font-size: 40px;
}
.landing-page-description {
  color: #462378;
  font-weight: 300;
  font-size: 24px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.3rem;
}
.bullet-item {
  color: black;
  font-weight: 300;
  font-size: 20px;
  margin-left: 5px;
}

.animatedHeader {
  color: black;
  text-align: center;
  display: inline-block;
  border-right: 1px solid #414141;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
