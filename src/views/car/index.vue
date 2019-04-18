<template>
  <div class="car">
    <CarHead/>
    <CarEmpty/>
    <CarList/>
  </div>
</template>

<script>
import CarHead from "./component/carHead"
import CarEmpty from "./component/carEmpty"
import CarList from "./component/carList"


export default {
  name: 'car',
  components: {
    CarHead,
    CarEmpty,
    CarList
  }
}
</script>

<style lang="scss">
  .car{
    background: #fafafa;
  }
</style>
