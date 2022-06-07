<template>

  <div>
    <nav class="navbar navbar-light navbar-expand-md">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CleverGym</a>
        <router-link to="/" class="btn btn-primary btn-icon" role="button" href="Optionen.html"
          style="width: 56px;height: 56px;border-width: 0px;">
          <i class="la la-cog" style="color: var(--bs-gray-900);font-size: 32px;"></i>
        </router-link>
      </div>
    </nav>
    <div class="container containerMainView" style="width: 100%;height: 98%;margin-bottom: 0;">
      <a class="btn btn-primary link-primary" role="button"
        style="margin-left: 10%;margin-right: 10%;width: 80%;margin-top: 10%;min-height: 0px;max-height: none;color: var(--bs-gray-100);background: linear-gradient(79deg, #434343, #000000);border-radius: 30px;height: 30%;border-width: 0;"
        href="Training/TrainingsView.html">Start Training</a>
      <button class="btn btn-primary link-primary" type="button"
        style="margin-left: 10%;margin-right: 10%;width: 80%;margin-top: 10%;height: 30%;min-height: 0px;max-height: none;color: var(--bs-gray-900);border-radius: 30px;box-shadow: 5px 5px 7px rgba(33,37,41,0.08);background: #FFFFFF;border-width: 0px;"></button>
    </div>
  </div>
  <div class="btn-toolbar" style="margin-bottom: 0;width: 100%;">
    <div class="btn-group button-group" role="group" style="margin-bottom: 0;width: 100%;">
      <a class="btn btn-primary disabled active btn-icon" role="button"
        style="background: transparent;border-width: 0px;" href="MainView.html" disabled>
        <i class="fas fa-dumbbell" style="color: var(--bs-gray-900);font-size: 32px;"></i>
      </a>
      <a class="btn btn-primary btn-icon" role="button" style="border-width: 0;background: transparent;"
        href="Statistiken/Statistiken.html">
        <i class="icon-graph" style="font-size: 40px;color: var(--bs-gray-900);"></i>
      </a>
      <a class="btn btn-primary btn-icon" role="button" style="border-width: 0;background: transparent;"
        href="WorkoutEditor/Planerkalender.html"><i class="fa fa-calendar"
          style="font-size: 32px;color: var(--bs-gray-900);"></i>
      </a>
    </div>
  </div>

</template>
