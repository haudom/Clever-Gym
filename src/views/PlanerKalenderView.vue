<template>
   <div class="background">
       <h1>Trainingskalender</h1>
       <div class="container container-additional" style="width: 90%;padding-top: 20px;">
        <div class="row" style="height: 80px;">
          <div v-for="entry in wochen" class="col" style="width: 35px;padding-right: 2px;padding-left: 2px;">
          <h1 style="width: 40px;">{{entry.day}}</h1>
          <button id="addMon" class="btn btn-primary" type="button" style="width: 40px;padding: 0px;height: 40px;">+</button>
       </div>
        </div>
       </div>

    <div class="footer-nav"> 
      <Button class="footer-nav-btn"></Button>
      <Button class="footer-nav-btn"></Button>
      <Button class="footer-nav-btn"></Button>
    </div>

   </div>
</template>

<style>
.add-button {
  height: 50px;
  width: 50px;
}
.background{
  background: #EEEEEE;
  height: 100vh;
}
.container-additional {
  border-radius: 30px;
  background: white;
  box-shadow: 5px;
  padding-bottom: 40px;
}

.footer-nav{
  background: white;
  height: 15vh;
  width: 100vw;
 position: fixed;
 bottom: 0%;
}
.footer-nav-btn{
  border: 1px;
  height: 100%;
  width: 33.33vw;
  background: green;
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