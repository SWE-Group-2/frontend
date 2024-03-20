// shows the view for editing an internship post
<template>
    <div class="align-center">
        <h1 class="header">Edit Internship Post</h1>
        <div class="container align-center"></div>
    </div>
</template>

<style lang="scss" scoped>
.header {
  font-family: Roboto Slab;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 60px;
}

.align-center {
  align-items: center;
  justify-content: center;
}

.container {
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    height: 600px;
    width: 900px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.column {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
}

.row {
    height: 500px;
    display: flex;
    margin-bottom: 20px;
}
</style>