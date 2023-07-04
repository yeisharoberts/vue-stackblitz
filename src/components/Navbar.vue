<script>
import script from '../script/testScript.js';
export default script;
</script>

<template>
  <div class="parent">
    <div>
      <nav class="navigation">
        <ul class="nav-left">
          <li>Nav1</li>
          <li>Nav2</li>
        </ul>
        <ul class="nav-right">
          <li>Nav3</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.parent {
  height: 50px;
  width: 100%;
  background-color: black;
  color: white;
}
.nav-left {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  padding-left: 0;
}
.nav-right {
  position: absolute;
  right: 0;
  top: 0;
}
ul {
  list-style-type: none;
}
</style>
