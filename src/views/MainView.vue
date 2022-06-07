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
    <div class="container containerMainView" style="width: 100%;height: 98%;margin-bottom: 0;">
      <router-link to="/training" class="btn-big btn" role="button">
        Start Training
      </router-link>
      <button class="btn btn-primary link-primary" type="button"
        style="margin-left: 10%;margin-right: 10%;width: 80%;margin-top: 10%;height: 30%;min-height: 0px;max-height: none;color: var(--bs-gray-900);border-radius: 30px;box-shadow: 5px 5px 7px rgba(33,37,41,0.08);background: #FFFFFF;border-width: 0px;"></button>
    </div>
  </div>

</template>

<style>
.btn-big {
  background-color: black;
  color: white;
  width: 60%;
  height: 80px;
}
</style>