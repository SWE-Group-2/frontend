<script setup>
// insert code to collect list of internship posts as a const
// then replace template with proper loops to display the list
</script>

<template>
  <div id="internships">
    <div class="instructor-container">
      <div>
        <div class="photo">
          <img src="/logo_thegang.png" alt="logo" />
        </div>
      </div>
      <div class="column">
        <div class="row">Author: Instructor</div>
        <div class="row">Company: The GANG Technology Company Limited</div>
        <div class="row">Internship Period: NULL</div>
        <div class="row">Application Deadline: 30 August 2024</div>
        <div class="row">
          Apply on
          <a href="https://thegang.tech/career/"
            >https://thegang.tech/career/</a
          >
        </div>
      </div>
      <div class="column">
        <div class="button-row">
            <RouterLink to="/edit-internship" class="button">
                <img src="/pencil.png" alt="edit"/>
            </RouterLink>
        </div>
        <div class="button-row">
          <a href="/login" class="button">
            <img src="/bin.png" alt="edit" />
          </a>
        </div>
      </div>
    </div>
    <div class="student-container">
      <div>
        <div class="photo">
          <img src="/logo_thegang.png" alt="logo" />
        </div>
      </div>
      <div class="column">
        <div class="row">Author: Student</div>
        <div class="row">Company: The GANG Technology Company Limited</div>
        <div class="row">Internship Period: NULL</div>
        <div class="row">Application Deadline: 30 August 2024</div>
        <div class="row">
          Apply on
          <a href="https://thegang.tech/career/"
            >https://thegang.tech/career/</a
          >
        </div>
      </div>
      <div class="column">
        <div class="button-row">
            <RouterLink to="/edit-internship" class="button">
                <img src="/pencil.png" alt="edit"/>
            </RouterLink>
        </div>
        <div class="button-row">
          <a href="/login" class="button">
            <img src="/bin.png" alt="edit" />
          </a>
        </div>
      </div>
    </div>
    <div class="admin-container">
      <div>
        <div class="photo">
          <img src="/logo_thegang.png" alt="logo" />
        </div>
      </div>
      <div class="column">
        <div class="row">Author: Admin</div>
        <div class="row">
          Company: The GANG Technology Company By Ajarn Piti
        </div>
        <div class="row">Internship Period: NULL</div>
        <div class="row">Application Deadline: 30 August 2024</div>
        <div class="row">
          Apply on
          <a href="https://thegang.tech/career/"
            >https://thegang.tech/career/</a
          >
        </div>
      </div>
      <div class="column">
        <div class="button-row">
            <RouterLink to="/edit-internship" class="button">
                <img src="/pencil.png" alt="edit"/>
            </RouterLink>
        </div>
        <div class="button-row">
          <a href="/login" class="button">
            <img src="/bin.png" alt="edit" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.instructor-container {
  position: relative;
  display: flex;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2);
  background-color: #f7f2ff;
  width: 800px;
  height: 230px;
  padding: 20px;
  border: 0.5px solid #ccc;
  border-radius: 5px;
  margin-bottom: 50px;
}

.student-container {
  display: flex;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2);
  background-color: #efeeee;
  width: 800px;
  height: 230px;
  padding: 20px;
  border: 0.5px solid #ccc;
  border-radius: 5px;
  margin-bottom: 50px;
}

.admin-container {
  display: flex;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2);
  background-color: #fff3e1;
  width: 800px;
  height: 230px;
  padding: 20px;
  border: 0.5px solid #ccc;
  border-radius: 5px;
  margin-bottom: 50px;
}

.photo {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-top: 14px;
  margin-left: 16px;
  margin-right: 50px;
  overflow: hidden;
}

.row {
  max-width: 450px;
  font-family: Roboto Slab;
  font-size: 18px;
  font-weight: 700;
  color: #462378;
  margin-top: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.column {
  margin-right: 50px;
}

.button {
  display: inline-block;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-color: #e5eaef;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
}

.button:hover {
  background-color: #ced2d6;
}

.button-row {
  margin-bottom: 10px;
}

.button img {
  width: 60%;
  height: auto;
  object-fit: cover;
}
</style>
