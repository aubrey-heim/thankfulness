const players = []
const prompts = [
    {
        category: "Livelihood",
        description:"a moment that gave you joy at any job you’ve had"
    },
    {
        category: "Health",
        description:"one particular aspect of your health"
    },
    {
        category: "Hopes & Dreams",
        description:"one specific dream you have for your life"
    },
    {
        category: "Friend",
        description:"a friend who has made a difference in your life"
    },
    {
        category: "Abilities",
        description:"one of your skills or talents"
    },
    {
        category: "Safety & Sustenance",
        description:"the fulfillment of a basic need you most appreciate"
    },
    {
        category: "Memory",
        description:"a beautiful moment from your past"
    },
    {
        category: "Legacy",
        description:"a person who has gone before you on this Earth"
    },
    {
        category: "Animals",
        description:"a pet, another person’s pet, or a wild creature"
    },
    {
        category: "Service",
        description:"an opportunity you have had to help another person"
    },
    {
        category: "Entertainment",
        description:"an activity for fun or relaxation (for a child, it can be a favorite movie or toy)"
    },
    {
        category: "Rest",
        description:"an activity you do to relax and quiet your body and mind"
    },
    {
        category: "Spirituality",
        description:"an activity that gives you inner peace and helps you feel connected"
    },
    {
        category: "Nature",
        description:"a place or thing outside that fills you with inspiration"
    },
    {
        category: "Senses",
        description:"the sense (sight, hearing, touch, taste, smell) you most appreciate"
    },
    {
        category: "Family Member",
        description:"a family member who has made a positive difference in your life"
    },
    {
        category: "Weather",
        description:"a weather phenomenon that interests, intrigues, or inspires you"
    },
    {
        category: "Famous Person",
        description:"a musician, actor,scientist, politician, leader who inspires you"
    },
    {
        category: "Assistance",
        description:"a person who helped you in an urgent situation"
    },
    {
        category: "Food",
        description:"your favorite food"
    },
    {
        category: "Book",
        description:"a book that transformed and inspired you"
    },
    {
        category: "Learning & Intellect",
        description:"something you have enjoyed learning about"
    },
    {
        category: "Epiphanies",
        description:"something you suddenly understood about yourself or the world"
    },
    {
        category: "Struggle",
        description:"what you learned through a personal struggle"
    },
    {
        category: "Kindness",
        description:"a special time when someone showed you kindness"
    },
]
let shuffled = shuffle(prompts)
let playerUp =""
let questionNumber = 0

function shuffle(arr){
    //looping through the array, starting at the last value
    for (let i = arr.length - 1; i > 0; i--) {    
        //choosing a random number between 0 and the length of the array
        let j = Math.floor(Math.random() * (i + 1)); 
        //creating a variable which gets the last item of the array
        let selected = arr[i]; 
        // making the last item of the array the randomly selected array value
        arr[i] = arr[j]; 
        //moving the value that was initially the last value of the array to the position of the randomly selected value
        arr[j] = selected; 
    }
    //returing the shuffled array for use outside of the function     
    return arr; 
}

$("#add").on("click", function(event){
    //prevents browser trying to submit form
    event.preventDefault()
    //selecting the text typed into the textArea next to the save button
    let inputText = $("#player-name").val()
    players.push(inputText)
    $("#player-name").val("")
})

function pickPlayer(arr){
    let random = Math.floor(Math.random() * (arr.length + 1)); 
    playerUp = arr[random];
}

function startGame(){
    $("#games").removeClass("hidden")
    pickPlayer(players)
    $("#player-up").text(playerUp)
    $("#category").text(prompts[questionNumber].category)
    $("#description").text(prompts[questionNumber].description)
}
