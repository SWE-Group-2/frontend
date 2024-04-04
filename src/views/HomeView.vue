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
    <div class="requirements-body">
      <div class="requirements-header">MUIC CS Cooperative Internship</div>
      <div class="requirements-info">
        Ajarn Poramin's Remarks:
        <span class="number-item">
          1. Work-Integrated Education requires students to work in the
          workplace for at least 16 weeks continuously without any breaks in
          between. This can be remote or on-site, depending on the company's
          policy. Moreover, there is no minimum rate for payment but MUIC
          requires your internship to be paid.
        </span>
        <span class="number-item">
          2. You can register on 2 possible scenarios:
        </span>
        <span class="bullet-item-small">
          &#x2022; Summer + Trimester 1 : This scenario, you have to take ICCS
          384 Work-Integrated Education (Summer) in the summer Term first. Then,
          follow by ICCS 383 Work-Integrated Education (Trimester) in Trimester
          1 continuously.
        </span>
        <span class="bullet-item-small">
          &#x2022; Trimester3 + Summer: This scenario, you have to take ICCS383
          Work-Integrated Education (Trimester) in Trimester 3 and follow by
          ICCS 384 Work-Integrated Education (Summer) in the summer Term
          continuously. Note that you must start the internship not later than 2
          weeks after the trimester starts.
        </span>
        <span class="number-item">
          3. MUIC does not offer the Work-Integrated Education course in
          Trimester 2 as you cannot make the continuous work for those ICCS383 &
          384
        </span>
        <span class="number-item">
          4. During your Work-Integrated Education period, you are not allowed
          to take other subjects even though that subject is on Weekends to have
          smooth working period.
        </span>
        <span class="number-item">
          5. After you finish your work-integrated education, you have to come
          back to conduct the final presentation at the university.
        </span>
      </div>
      <div class="requirements-info">
        How to start the MUIC Internship Process?
        <span class="number-item">
          1. After receiving an acceptance email from the company you plan to
          intern at, forward that to the internship coordinator.
        </span>
        <span class="number-item">
          2. The internship coordinator will send you an internship request form
          with information. You need to fill out about yourself and the company.
        </span>
        <span class="number-item">
          3. After filling out the form and returning it to the internship
          coordinator, they will prepare a confirmation letter and send it to
          the contact person you specified in the request form.
        </span>
        <span class="number-item">
          4. This should be done prior to a month before the internship starts.
        </span>
      </div>
      <div class="requirements-info">
        What to do before the internship?
        <span class="number-item">
          1. You will have to take an online course through MUIC Connect before
          the internship starts on workplace behavior, an email writing course,
          and public speaking skills.
        </span>
        <span class="number-item">
          2. This also involves watching some compulsory videos for the
          cooperative education course.
        </span>
      </div>
      <div class="requirements-info">
        Project Requirements
        <span class="number-item">
          1. Depends on the company, but the student should be given at least 1
          main project to work on so that their work can be graded.
        </span>
        <span class="number-item">
          2. This can be a pre-existing project that the company decides the
          student can help with or a project proposed by the student to the
          company.
        </span>
        <span class="number-item">
          3. You will send reports/updates on this project to the university
          after your supervisor at the company has vetted it (as well as removed
          any confidential information).
        </span>
      </div>
      <div class="requirements-info">
        What to do after the internship?
        <span class="number-item">
          After your internship is completed, students will come back to MUIC to
          present on their experience with other students who interned in the
          same time period.
        </span>
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
  width: 1000px;
}
.landing-page-information {
  display: flex;
  flex-direction: column;
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

.requirements-body {
  --shadow-color: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.418);
  border-radius: 8px;
  margin-top: 16rem;
  padding: 1.5rem;
  width: 1000px;
  animation-name: fade-in;
  animation-duration: 5s;
}
.requirements-header {
  font-family:
    Roboto Slab,
    serif;
  font-weight: 700;
  font-size: 25px;
  letter-spacing: 0;
  line-height: 0;
  margin-bottom: 30px;
}
.requirements-info {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding-left: 10px;
  gap: 5px;
  color: #462378;
  font-weight: 400;
  font-size: 24px;
}

.bullet-item {
  color: black;
  font-weight: 300;
  font-size: 20px;
  margin-left: 5px;
}
.number-item {
  color: black;
  font-weight: 400;
  font-size: 19px;
  margin-left: 5px;
}
.bullet-item-small {
  color: black;
  font-weight: 400;
  font-size: 17px;
  margin-left: 15px;
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
