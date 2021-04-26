<template>

<div class="container-fluid">
        <h1>Welcome </h1>
        <div class="card">
            <div class="card" style="width: 18rem;">
                <img src="../assets/GymStep/1.gif" class="card-img-top" alt="cardio">
                <div class="card-body">
                    <h5 class="card-title">Cardio</h5>
                    <p class="card-text">Aerobic-Übungen sind körperliche Übungen mit geringer bis hoher Intensität, die in erster Linie vom aeroben Energieerzeugungsprozess abhängen.</p>
                    <router-link to="cardio"> <a class="btn btn-primary">Mehr</a></router-link>
                </div>
            </div>
            <div class="cardd ml-4" style="width: 18rem;">
                <img src="../assets/GymStep/2.gif" class="card-img-top" alt="Liegestütz">
                <div class="card-body">
                    <h5 class="card-title">Pushups</h5>
                    <p class="card-text">Der Liegestütz, auch: die Liegestütze, englisch Push-Up oder Press-Up, ist eine sportliche Eigengewichtübung zur Kräftigung der Muskeln, hier speziell Schulter-, Arm- und Brustmuskulatur. Der gestreckte Körper wird dabei von den Armen gestützt, der Blick ist zum Boden hin gerichtet.</p>
                    <router-link to="pushups"> <a class="btn btn-primary">Mehr</a></router-link>
                </div>
            </div>
            <div class="cardd ml-4" style="width: 18rem;">
                <img src="../assets/GymStep/3.gif" class="card-img-top" alt="calorie">
                <div class="card-body">
                    <h5 class="card-title">lifting</h5>
                    <p class="card-text">Aerobic-Übungen sind körperliche Übungen mit geringer bis hoher Intensität, die in erster Linie vom aeroben Energieerzeugungsprozess abhängen.</p>
                    <router-link to="lifting"> <a class="btn btn-primary">Mehr</a></router-link>
                </div>
            </div>
             <div class="cardd ml-4" style="width: 18rem;">  
                <img src="../assets/GymStep/4.gif" class="card-img-top" alt="running">
                <div class="card-body">
                    <h5 class="card-title">Cardio</h5>
                    <p class="card-text">Aerobic-Übungen sind körperliche Übungen mit geringer bis hoher Intensität, die in erster Linie vom aeroben Energieerzeugungsprozess abhängen.</p>
                    <router-link to="cardio"> <a class="btn btn-primary">Mehr</a></router-link>
                </div>
            </div>
            <div class="cardd ml-4" style="width: 18rem;">
                <img src="../assets/GymStep/5.gif" class="card-img-top" alt="shoulder">
                <div class="card-body">
                    <h5 class="card-title">Back</h5>
                    <p class="card-text">Aerobic-Übungen sind körperliche Übungen mit geringer bis hoher Intensität, die in erster Linie vom aeroben Energieerzeugungsprozess abhängen.</p>
                    <router-link to="back"> <a class="btn btn-primary">Mehr</a></router-link>
                </div>
            </div>
            <div class="cardd ml-4" style="width: 18rem;">
                <img src="../assets/GymStep/6.gif" class="card-img-top" alt="lifting">
                <div class="card-body">
                    <h5 class="card-title">Shoulder</h5>
                    <p class="card-text">Aerobic-Übungen sind körperliche Übungen mit geringer bis hoher Intensität, die in erster Linie vom aeroben Energieerzeugungsprozess abhängen.</p>
                    <router-link to="shoulder"> <a class="btn btn-primary">Mehr</a></router-link>
                </div>
            </div>    
        </div>                  
    </div>
</template>

<style scoped>
.card {
    flex-direction: row;
    flex-wrap: wrap;
}
.triangle {
 
  width: 0;
  height:0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 100px solid #777;
}
</style>