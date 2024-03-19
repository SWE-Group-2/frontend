<script setup>
// insert code to collect list of students as a const
// then replace template with proper loops to display the list
</script>

<template>
  <div id="table">
    <table id="students">
      <tr class="table-header">
        <th>ID</th>
        <th>Name</th>
        <th>GPA</th>
        <th>Positions</th>
      </tr>
      <tr>
        <td class="student-id"><div>60xxxxx</div></td>
        <td class="student-name"><div>Piti Ongmongkolkul</div></td>
        <td class="student-gpa"><div>3.69</div></td>
        <td class="student-positions"><div>CEO</div></td>
      </tr>
      <tr>
        <td class="student-id"><div>6380358</div></td>
        <td class="student-name"><div>Justin Copeland</div></td>
        <td class="student-gpa"><div>4.00</div></td>
        <td class="student-positions"><div></div></td>
      </tr>
      <tr>
        <td class="student-id"><div>6906969</div></td>
        <td class="student-name"><div>somerandom longname maxim</div></td>
        <td class="student-gpa"><div>--</div></td>
        <td class="student-positions"><div>top, bottom</div></td>
      </tr>
      <tr>
        <td class="student-id"><div></div></td>
        <td class="student-name"><div></div></td>
        <td class="student-gpa"><div></div></td>
        <td class="student-positions"><div></div></td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.table {
  border-collapse: collapse;
  width: 50%;
  font-family: Roboto;
  font-size: 20px;
  font-weight: 4500;
  letter-spacing: 0em;
  line-height: 1.4;
  color: #010001;
  background-color: #fefeff;
}

#students th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #cec8ef;
  font-weight: 700;
}
#students th,
#students td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  height: 20px;
}
#students tr:nth-child(even) {
  background-color: #f8f9f8;
}
#students tr:hover {
  background-color: #ddd;
}

.student-name {
  > div {
    overflow: hidden;
    height: 27px;
    width: 400px;
  }
}
.student-id {
  font-weight: 500;
  width: 120px;
  > div {
    overflow: hidden;
    height: 27px;
    width: 100px;
  }
}
.student-gpa {
  color: #462378;

  font-family: "Roboto Mono", monospace;
  font-weight: 500;
  > div {
    overflow: hidden;
    height: 27px;
    width: 60px;
  }
}
.student-positions {
  color: #dd9832;
  > div {
    overflow: hidden;
    height: 27px;
    width: 400px;
  }
}
</style>
