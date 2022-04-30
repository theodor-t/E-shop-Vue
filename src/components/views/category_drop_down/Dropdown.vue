<template>
  <nav>
    <div class="select-box">
      <div :class="[isToggled ? 'active' : '']" id="options-container">
        <div :key="category.name" @click="selectItem(category.name)" class="option"
             v-for="category in categories">
          <input :id="category.name" :name="category.name" class="radio" type="radio"/>
          <label :for="category.name">{{ category.name }}</label>
        </div>
      </div>
      <div @click="toggleCategory" class="selected">
        {{ selectedCategory }}
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Dropdown",
  data: () => ({
    isToggled: false,
    selectedCategory: 'Select Category'
  }),
  props: {
    categories: null
  },
  methods: {
    toggleCategory() {
      this.isToggled = !this.isToggled;
    },
    selectItem(name) {
      this.selectedCategory = name;
      this.isToggled = false;
    }
  },
  watch: {
    selectedCategory(newCategory) {
      this.$emit("changedCategory", newCategory);
    }
  }
}
</script>

<style scoped>
nav {
  position: absolute;
  top: 150px;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: auto;
  color: #fff;


}

.select-box {
  display: flex;
  width: 200px;
  flex-direction: column;
  margin-left: 100px;
}

.select-box #options-container {
  background: #2f3640;
  color: #f5f6fa;
  max-height: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.4s;
  border-radius: 8px;
  overflow: hidden;
  order: 1;
}

.selected {
  background: #2f3640;
  border-radius: 8px;
  margin-bottom: 8px;
  color: #f5f6fa;
  position: relative;
  order: 0;
}

.selected::after {
  content: "";
  background-size: contain;
  background: url("../../../static/img/arrow-down.svg") no-repeat;
  position: absolute;
  height: 100%;
  width: 32px;
  right: 10px;
  top: 10px;
  transition: all 0.4s;
}

.select-box #options-container.active {
  max-height: 240px;
  opacity: 1;
  overflow-y: scroll;
  position: static;
  z-index: 50;
}

.select-box #options-container.active + .selected::after {
  transform: rotateX(180deg);
  top: -6px;
}

.select-box #options-container::-webkit-scrollbar {
  width: 8px;
  background: #0d141f;
  border-radius: 0 8px 8px 0;
}

.select-box #options-container::-webkit-scrollbar-thumb {
  background: #525861;
  border-radius: 0 8px 8px 0;
}

.select-box .option,
.selected {
  padding: 12px 24px;
  cursor: pointer;
}

.select-box .option:hover {
  background: #414b57;
}

.select-box label {
  cursor: pointer;
}

.select-box .option .radio {
  display: none;
}

@media (max-width: 1180px) {
  .select-box {
    margin-left: 100px;
  }
}

@media (max-width: 880px) {
  .select-box {
    margin-left: 250px;
  }
}

@media (max-width: 670px) {
  .select-box {
    margin-left: 150px;
  }
}

</style>