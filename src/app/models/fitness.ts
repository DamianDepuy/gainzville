
export class User{
    name: string;
    
}
export class Routine {  // Player
    name: string;

    constructor(name:string) {
        this.name = name;
    }
}

export class Tracker {     // quotes
    routineList: Routine[] = [
        { name: "Bench Press"},
        { name: "Dumb Bell Flies"},
        { name: "Shoulder Press"},
        { name: "Upright Row"},
        { name: "Weighted Pullup"},
        { name: "Bent-Over Barbell Deadlift"},
        { name: "bicep curls"},
        { name: "Squts"}
    ];
    myRoutines: Routine[] = [];

    
    drawRoutines() {
        // $("#routine-List").html(
        //     this.routineList.map(x=> `<button class="list-group-item">${x.name}</button>`).join("")
        // );
        // this.http.get(this.apiRoot + "/game/room/quotes").subscribe( data =>{
        //     this.room.quotes = data.json();
        // });
    }

    drawMyRoutines() {
        $("#my-routines").html(
            this.myRoutines.map(x=> `<li class="list-group-item">${x.name}</li>`).join("")
        );
    }
}

//Controller

const tracker = new Tracker();
let empty:boolean = true;

tracker.drawRoutines();

$('#cmd-add').click(function(e) { // '.list-group-item'
    e.preventDefault();
    const workoutName = e.target.textContent;
    if(empty) {
        document.getElementById('default-message').remove();
        empty = false;
    }
    const newRoutine = new Routine(workoutName);
    tracker.myRoutines.push(newRoutine);
    console.log(tracker.myRoutines);
    tracker.drawMyRoutines();
});