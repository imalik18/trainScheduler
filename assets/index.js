// {/* <tr>
// <td>Alvin</td>
// <td>Eclair</td>
// <td>$0.87</td>
// </tr> */}

var config = {
    apiKey: "AIzaSyA6PORgvl2eJMGwco10C8zjdgHZklMUExM",
    authDomain: "trainscheduler-f2344.firebaseapp.com",
    databaseURL: "https://trainscheduler-f2344.firebaseio.com",
    projectId: "trainscheduler-f2344",
    storageBucket: "trainscheduler-f2344.appspot.com",
    messagingSenderId: "801990996148"
};

 firebase.initializeApp(config);

  // Create a variable to reference the database.
  var database = firebase.database();
  var trains = database.ref('trains');


  // Capture Button Click
 $('#submit').on('click', function(){
    var train = {
        name: $("#train_name").val(),
        destination: $("#destination").val(),
        frequency: $("#frequency").val(),
        firstTrainTime: $("#first_train_time").val()
    };

    if( $('#train_name').val() != '' || $('#destination').val() != ''){
        trains.push(train)       
            
    };
 });   
    
    
    //trains.push(train);
    //populateTable();
    
    // code for handling the push
    //database.ref().push({
       // name: name,
        //destination: destination,
        //frequency: frequency,
       // firstTrainTime : first_train_time,
    //});
    
//child snapshot
//declare var
//create a vars that hold train name, dest, fre- but get em from FIREBASE from child snapshot and then pass them as html for e.name etc and decalare in child snapshot



// Firebase watcher .on("child_added"
 trains.on("child_added", function(childSnapshot) {

   var key = childSnapshot.key;
   var childData = childSnapshot.val();

   var name = childSnapshot.val().name;
   var destination = childSnapshot.val().destination;
   var frequency = childSnapshot.val().frequency;
   var firstTrainTime = childSnapshot.val().firstTrainTime;

    console.log(childSnapshot.val().name);
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().frequency);
    console.log(childSnapshot.val().firstTrainTime);
    
    //var nameSnapshot = snapshot.child("train_name");
    //var name = nameSnapshot.val();
    // Console.logging the data
    //console.log(snap.val());
  
    $('#trains').append(populateTable(childSnapshot.val()));
    //.name + childSnapshot.val().destination + childSnapshot.val().frequency + childSnapshot.val().firstTrainTime));     
    //$("#train_name").text(name);
    //$("#destination").text(name);
});



function populateTable(e){
    $('#tableBody').empty();
    trains.forEach( e => {
        var html = ""
        html += "<tr>";
        html += "<td>" + e.name + "</td>";
        html += "<td>" + e.destination + "</td>";
        html += "<td>" + e.frequency + '</td>';
        html += "<td> 5 min </td>";
        html += "<td> 10 min </td>";
        
    });

    console.log(e);
    $('#tableBody').append(html);
}

//trains.push(train);
//populateTable();