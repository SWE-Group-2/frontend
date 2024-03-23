<template>
  <div id="edit-internship">
    <h1 class="header">Edit Internship Post</h1>
    <div class="mid">
      <div class="container">
        <div class="row">
          <h1 class="title">Internship Information</h1>
        </div>
        <div class="row">
          <div class="column">
            <div class="input-field">
              <input type="text" required spellcheck="false" />
              <label>Company Name</label>
            </div>
            <div class="input-field">
              <input type="text" required spellcheck="false" />
              <label>Internship Period</label>
            </div>
            <div class="input-field">
              <input type="text" required spellcheck="false" />
              <label>Application Deadline</label>
            </div>
            <div class="input-field">
              <input type="text" required spellcheck="false" />
              <label>Company Website</label>
            </div>
          </div>
          <div class="column">
            <div class="photo">
              <img src="/logo_thegang.png" alt="logo" />
            </div>
          </div>
        </div>
        <div class="row">
          <h1 class="title">About</h1>
        </div>
        <div class="row">
          <div class="input-field-about">
            <input type="text" required spellcheck="false" />
            <label>Description</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  font-family:
    Roboto Slab,
    serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 60px;
}

.title {
  font-family:
    Roboto Slab,
    serif;
  font-weight: 500;
  font-size: 28px;
  letter-spacing: 0;
}

.align-center {
  align-items: center;
  justify-content: center;
}

.column {
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  margin-bottom: 30px;
  gap: 1rem;
}

.photo {
  width: 200px;
  height: 200px;
  border: 1px solid #000000;
  border-radius: 50%;
  margin-top: 14px;
  margin-left: 16px;
  margin-right: 50px;
  overflow: hidden;
}

.row {
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  gap: 1rem;
  margin-left: 35px;
}

.container {
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  justify-content: space-between;
  padding: 1.5rem;
  gap: 1rem;
  width: 900px;
  height: 600px;
  margin-bottom: 100px;
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
  width: 400px;
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
  font-family:
    Roboto Mono,
    serif;
  top: 50%;
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

.input-field-about {
  position: relative;
  max-height: 70px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
}

.input-field-about input {
  width: 800px;
  height: 80px;
  border-radius: 6px;
  font-size: 16px;
  padding: 0 15px;
  border: 2px solid #d9d9d9;
  color: #000000;
  outline: none;
}

.input-field-about label {
  position: absolute;
  font-family:
    Roboto Mono,
    serif;
  top: 60%;
  transform: translateY(-80%);
  color: #d9d9d9;
  font-size: 18px;
  pointer-events: none;
  transition: 0.3s;
}
</style>
