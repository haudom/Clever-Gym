<template>
  <div>

    <div class="container" style="width: 90%;padding-top: 20px;">
      <div class="row" style="height: 80px;">
        <div v-for="entry in wochen" class="col" style="width: 35px;padding-right: 2px;padding-left: 2px;"
          :key="entry.day">
          <h1 style="width: 40px;">{{ entry.day }}</h1>
          <button id="addMon" class="btn btn-primary" type="button"
            style="width: 40px;padding: 0px;height: 40px;">+</button>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
.add-button {
  height: 50px;
  width: 50px;
}
</style>



<script>

const DayComponent = {
  template: `
       
    `
}

export default {
  components: {
    'day': DayComponent
  },
  data: () => ({
    wochen: [{
      day: 'Mo',
      week: 1,
      training: []
    },
    {
      day: 'Di',
      week: 2,
      training: []
    }, {
      day: 'Mi',
      week: 1,
      training: []
    },
    {
      day: 'Do',
      week: 2,
      training: []
    }, {
      day: 'Fri',
      week: 1,
      training: []
    },
    {
      day: 'Sa',
      week: 2,
      training: []
    }
    ]
  })
}
</script>