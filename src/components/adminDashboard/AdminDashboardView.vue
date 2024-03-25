<template>
  <div class="admin-dashboard">
    <h1>Admin Dashboard</h1>

    <h2>Time Periods</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Time period name</td>
          <td>start date</td>
          <td>end date</td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <h3>Add Time Period</h3>
    <form @submit.prevent="">
      <div class="search-bar">
        <label for="name">Name:</label>
        <input type="text" id="name" />
        <label for="start-date">Start Date:</label>
        <input type="date" id="start-date" />
        <label for="end-date">End Date:</label>
        <input type="date" id="end-date" />
        <button type="submit">Create</button>
      </div>
    </form>
    <h2>Users</h2>
    <h3>Change User Role</h3>
    <form @submit.prevent="">
      <div class="user-form">
        <label for="username">Username:</label>
        <input type="text" id="username" />
        <label for="role">Role:</label>
        <select id="role">
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="editor">Instructor</option>
          <option value="user">Student</option>
        </select>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>
<style scoped>
@import "@/components/adminDashboard/AdminDashboard.css";
</style>
