<template>
  <div style="display:flex;">
	  <Game type="self"></Game>
	  <Game type="rival"></Game>
	  <button @click="handleSartGame">startGame</button>
  </div>
</template>

<script setup>
import Game from './components/Game.vue'
import { startGame } from './game/index'
function handleSartGame() {
	startGame()
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
