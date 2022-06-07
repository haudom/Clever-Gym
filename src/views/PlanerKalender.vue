<template>
    <h1>Planer</h1>
    <div class="container" style="width: 90%;padding-top: 20px;">
        <div class="row" style="height: 80px;">
            <div class="col" style="width: 35px;padding-right: 2px;padding-left: 2px;">
                <h1 style="width: 40px;">Mo</h1><button id="addMon" class="btn btn-primary" type="button" style="width: 40px;padding: 0px;height: 40px;">+</button>
            </div>
            <div class="col" style="width: 35px;padding-right: 2px;padding-left: 2px;">
                <h1 style="width: 40px;">Di</h1><button id="addDi" class="btn btn-primary" type="button" style="width: 40px;padding: 0px;height: 40px;">+</button>
            </div>
            <div class="col" style="width: 35px;padding-right: 2px;padding-left: 2px;">
                <h1 style="width: 40px;">Mi</h1><button id="addMi" class="btn btn-primary" type="button" style="width: 40px;padding: 0px;height: 40px;">+</button>
            </div>
            <div class="col" style="width: 35px;padding-right: 2px;padding-left: 2px;">
                <h1 style="width: 40px;">Do</h1><button id="addDo" class="btn btn-primary" type="button" style="width: 40px;padding: 0px;height: 40px;">+</button>
            </div>
            <div class="col" style="width: 35px;padding-right: 2px;padding-left: 2px;">
                <h1 style="width: 40px;">Fr</h1><button id="addFr" class="btn btn-primary" type="button" style="width: 40px;padding: 0px;height: 40px;">+</button>
            </div>
            <div class="col" style="width: 35px;padding-right: 2px;padding-left: 2px;">
                <h1 style="width: 40px;">Sa</h1><button id="addSa" class="btn btn-primary" type="button" style="width: 40px;padding: 0px;height: 40px;">+</button>
            </div>
            <div class="col" style="width: 35px;padding-right: 2px;padding-left: 2px;">
                <h1 style="width: 40px;">So</h1><button id="addSo" class="btn btn-primary" type="button" style="width: 40px;padding: 0px;height: 40px;">+</button>
            </div>
        </div>
    </div>
    <div class="btn-toolbar" style="margin-bottom: 0;width: 100%;">
        <div class="btn-group button-group" role="group" style="margin-bottom: 0;width: 100%;"><a class="btn btn-primary active btn-icon" role="button" style="background: transparent;border-width: 0px;" href="MainView.html"><i class="fas fa-dumbbell" style="color: var(--bs-gray-900);font-size: 32px;"></i></a><a class="btn btn-primary btn-icon" role="button" style="border-width: 0;background: transparent;" href="Statistiken/Statistiken.html"><i class="icon-graph" style="font-size: 40px;color: var(--bs-gray-900);"></i></a><button class="btn btn-primary disabled active btn-icon" type="button" style="border-width: 0;background: transparent;" disabled><i class="fa fa-calendar" style="font-size: 32px;color: var(--bs-gray-900);"></i></button></div>
    </div>
</template>
