$(document).ready( function () {

    var config = {
        apiKey: "AIzaSyAGAhaC7nIXYdXfql1p3bpjPT8vCfQaAxQ",
        authDomain: "project1-test-triptracker.firebaseapp.com",
        databaseURL: "https://project1-test-triptracker.firebaseio.com",
        projectId: "project1-test-triptracker",
        storageBucket: "project1-test-triptracker.appspot.com",
        messagingSenderId: "158304705795"
    };
    firebase.initializeApp(config);
    
    
    // Event listener for translating user input data into the Trip Planner Entries (TPE) card
    $("#entrySubmit").on("click", function(event) {
        event.preventDefault();
        
        var format = "MM/DD/YYYY";

        // Entries in the form are stored in variables
        var dest = $("#destInput").val().trim();
        var sDate = $("#datepicker1").val().trim();
        var eDate = $("#datepicker2").val().trim();
        var pMembers = $("#party-members").val().trim();

        // Reconverts date format using momentJS
        var startD = moment(sDate, format).format("MMM Do YYYY");
        var endD = moment(eDate, format).format("MMM Do YYYY");

        // Creating new entries for the TPE card
        var newEntry = $("<tr>");
        $("#newEntryList2").append(newEntry);

        // Summited info is converted to be displayed in TPE card
        var destEntryItem = $("<th>").text(dest);
        var sDateEntryItem = $("<th>").text(startD);
        var eDatentryItem = $("<th>").text(endD);
        var pMembersEntryItem = $("<th>").text(pMembers);
        
        destEntryItem.attr("scope", "col");
        sDateEntryItem.attr("scope", "col");
        eDatentryItem.attr("scope", "col");
        pMembersEntryItem.attr("scope", "col");

        // Submitted info appended to the new entry for the TPE card
        newEntry.append(destEntryItem);
        newEntry.append(sDateEntryItem);
        newEntry.append(eDatentryItem);
        newEntry.append(pMembersEntryItem);
    })


});