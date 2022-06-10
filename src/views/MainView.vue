<template>

  <div>
    <nav class="navbar navbar-light navbar-expand-md">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CleverGym</a>
        <router-link to="/optionen" class="btn btn-primary btn-icon" role="button" href="Optionen.html"
          style="width: 56px;height: 56px;border-width: 0px;">
          <i class="la la-cog" style="color: var(--bs-gray-900);font-size: 32px;"></i>
        </router-link>
      </div>
    </nav>
    <div class="container containerMainView" style="background-color: #eeeeee; width: 100%;height: 98%;margin-bottom: 0;">
      <router-link to="/training" class="btn-big btn" role="button">
        <h1>Starte Training</h1>
        <img src="../assets/liegestutz.png" alt="" class="img-trainingsbutton">
        <h3>Brust Training</h3>
      </router-link>

      <router-link to="/statistiken" class="btn-big btn" role="button" style="background-color: white;">
        <h1>Statistiken</h1>
        <h3>Brust Training</h3>
      </router-link>
        </div>
  </div>

</template>

<style>
.btn-big {
  background-color: black;
  color: white;
  width: 80vw;
  height: 80vw;margin-bottom: 10vw;
  border-radius: 30px;
}
.img-trainingsbutton{

  width: 60vw;
  height: 60vw;
}
</style>