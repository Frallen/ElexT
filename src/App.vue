<template>
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="less">
@import "modern-normalize/modern-normalize.css";

html {
  font-size: 16px;
}
p,
h1,
h2,
h3,
h4,
h5,
h6,
ul {
  padding: 0;
  margin: 0;
  color: @black;
}
h1,
h2,
h3 {
  font-weight: 700;
}
.input {
  outline: none;
  width: 100%;
  .br(10px);
  border: 1px solid @black;
  padding: 10px;
  font-size: 1em;
  font-weight: 400;
}
.textarea {
  resize: none;
  overflow-y: auto;
  height: 100px;
  outline: none;
}
body {
  overflow-x: hidden;
  font-family: "Nunito", sans-serif;
}
.button {
  background: #fff;
  padding: 10px 15px;
  outline: none;
  cursor: pointer;
  .br(10px);
  .trs(0.3s);
  font-weight: 400;
}
.button:hover {
  .trs(0.3s);
}
.error {
  margin-top: 5px;
  color: @red;
  font-weight: 400;
  display: block;
}
.container {
  padding: 10px 7.813em;
  width: 100%;
  @media @xxl {
    padding: 10px 6.25em;
  }
  @media @lg {
    padding: 10px 4.375em;
  }
  @media @md {
    padding: 10px 1.875em;
  }
  @media @xs {
    padding: 10px 1.4em;
  }
}
.shadow {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
