<script>
window.addEventListener("load", () => {
  const toggles = document.querySelectorAll("[data-toggle]");
  const selects = document.querySelectorAll(".material-input-group select");
  window.addEventListener("click", (e) => {
    e.preventDefault();
    toggles.forEach((toggle) => {
      toggle.nextElementSibling.classList.remove("show");
    });
  });
  toggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggle.nextElementSibling.classList.toggle("show");
    });
  });
  selects.forEach((select) => {
    select.addEventListener("change", (e) => {
      if (e.target.value) {
        select.classList.add("validity");
      } else {
        select.classList.remove("validity");
      }
    });
  });
});
</script>

<template>
  <div id="edit-profile">
    <div class="top">
      <h1>Edit Profile</h1>
      <span class="student-name">Piti Ongmongkolkul</span>
    </div>

    <div class="mid">
      <div class="about">
        <span class="edit-header">About</span>
        <div class="input-field">
          <input type="text" required spellcheck="false" />
          <label>Description</label>
        </div>
        <div class="input-field-gpa">
          <input type="text" required spellcheck="false" />
          <label>GPA</label>
        </div>
        <span class="edit-header">Update Photo</span>
      </div>
      <div class="extra">
        <span class="edit-header">Public Contact Information</span>
        <div class="input-field">
          <input type="text" required spellcheck="false" />
          <label>E-mail Address</label>
        </div>
        <div class="input-field">
          <input type="text" required spellcheck="false" />
          <label>Phone Number</label>
        </div>
        <div class="input-field">
          <input type="text" required spellcheck="false" />
          <label>LinkedIn Link</label>
        </div>
        <div class="input-field">
          <input type="text" required spellcheck="false" />
          <label>GitHub Link</label>
        </div>
        <span class="edit-header">Work Information</span>
        <div class="input-field">
          <input type="text" required spellcheck="false" />
          <label>Desired Positions</label>
        </div>
        <div class="input-field">
          <input type="text" required spellcheck="false" />
          <label>Desired Period</label>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  margin-top: 100px;
  margin-left: 1.5rem;
  text-align: right;
}
.mid {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;
}
.about {
  --shadow-color: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1rem;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.418);
}

.extra {
  --shadow-color: rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  gap: 1rem;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.418);
}

.student-name {
  color: white;
  display: inline;
  background-color: #462378;
  padding: 5px;
  padding-left: 10px;
  padding-right: 10px;
  width: fit-content;
  font-weight: 600;
  font-size: 25px;
  text-align: right;
}
.edit-header {
  font-family: Roboto Mono;
  font-size: 20px;
}
h1 {
  font-family: Roboto Slab;
  font-weight: 700;
  font-size: 25px;
  letter-spacing: 0em;
  line-height: 0;
}

.input-field {
  position: relative;
  max-height: 70px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}
.input-field input {
  width: 350px;
  height: 50px;
  border-radius: 6px;
  font-size: 16px;
  padding: 0 15px;
  border: 2px solid #d9d9d9;
  color: #000000;
  outline: none;
}
.input-field label {
  position: absolute;
  font-family: Roboto Mono;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #d9d9d9;
  font-size: 18px;
  pointer-events: none;
  transition: 0.3s;
}
input:focus {
  border: 2px solid #dd9832;
}
input:focus ~ label,
input:valid ~ label {
  top: 0;
  left: 15px;
  font-size: 15px;
  padding: 0 2px;
  background: #ffffff;
  color: #dd9832;
}

.input-field-gpa {
  position: relative;
  max-height: 70px;
  min-height: 50px;
  display: flex;
  align-items: left;
  justify-content: left;
  border-radius: 6px;
}
.input-field-gpa input {
  width: 100px;
  height: 50px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  padding: 0 15px;
  border: 2px solid #d9d9d9;
  color: #462378;
  font-family:
    Roboto Mono,
    monospace;
  outline: none;
}
.input-field-gpa label {
  position: absolute;
  font-family: Roboto Mono;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: #d9d9d9;
  font-size: 18px;
  pointer-events: none;
  transition: 0.3s;
}
</style>
