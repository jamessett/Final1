//all deaths

function death1() {

  document.getElementById("choice").innerHTML = "<h3> You throw the box away and your life goes on normally for a week, until one night you are assassinated in your sleep. Never to wake again." +
    "<br>" +
    "<h3> YOU FAILED </h3>" +
    "<br>" +
    "<button type=\button\ onclick=\ firstchoice()\> Go back </button>"

}

function death1a() {

  document.getElementById("choice").innerHTML = "<h3> you raise your hands and are gunned down instantly.</h3>" +
    "<br>" +
    "<h3> YOU FAILED </h3>" +
    "<br>" +
    "<button type=\button\ onclick=\ page2()\> Go back </button>"

}

function death2b() {

  document.getElementById("choice").innerHTML = "<h3> A large russian man comes downstairs and caves your head in." +
    "<br>" +
    "<h3> YOU FAILED </h3>" +
    "<br>" +
    "<button type=\button\ onclick=\ page2()\> Go back </button>"

}

function death2a() {

  document.getElementById("choice").innerHTML = "<h3> As you run past he shoots you, killing you instantly." +
    "<br>" +
    "<h3> YOU FAILED </h3>" +
    "<br>" +
    "<button type=\button\ onclick=\ page2()\> Go back </button>"

}

function death4a() {

  document.getElementById("choice").innerHTML = "<h3> The Russians make it to you and pile onto you." +
    "<br>" +
    "<h3> YOU FAILED </h3>" +
    "<br>" +
    "<button type=\button\ onclick=\ page2()\> Go back </button>"

}

function death3b() {

  document.getElementById("choice").innerHTML = "<h3> As you walk in, one of them throws the knife into your chest. The others run up and beat your face in with their chains. Jeez, Russians are brutal" +
    "<br>" +
    "<h3> YOU FAILED </h3>" +
    "<br>" +
    "<button type=\button\ onclick=\ page2()\> Go back </button>"

}


//deaths end
//choices/story continuation

function firstchoice() {

  document.getElementById("choice").innerHTML = "<h2> SEQUENCE 1: BRANDON BEGINS... <br> <h3> Date: April 19, 1989, Miami</h3> </h2> <br>" + "<h3> * RING RING *   You wake up in the middle of the night to the sound of your apartments landline going off in the living room. You grogglily get out of bed, your feet hitting the cold floor. You quickly rush out and pick up the phone, before you can get out a word a voice on the other end speaks. ''Hello, this is Darla from the Old American bakery. Your shipment of cookies have arrived. Please follow the 'recipie' to the letter. And remember! Be discreet!'' The line flats and you hang up, dumbfounded by what just happened. Intrigued, however, you get dressed and open up the door to see a box outside of your apartment. You open it up and inside is a purple panther mask and a note. You look around before taking the box inside. You read the note as follows *33 West baker street. The old abandoned car dealership. Be discreet, and remeber to 'dress up' for the occasion. noncompliance is not an option. Remember, kill all russians.* you consider it and...</h3>" +
    "<br>" +
    "<button type='button' onclick=' page2()'> Go to the location </button> <button type='button' onclick=' death1()'> Ignore this obvious prank </button>"

};

function page2() {

  document.getElementById("choice").innerHTML = "<h3> You grab the mask and the note after some time of thought and decide to just check out the location, you don't have anything else to do other than go back to sleep. You throw the mask into the passenger seat and drive to the loaction. You arrive on the decrepit street, the car dealership looks completely empty until you notice some quiet voices in the back alley. You then... <button type=\button\ onclick=\ path1()\> Investigate </button> <button type=\button\ onclick=\ path2()\> Go home. </button>"
}

function path2() {

  document.getElementById("choice").innerHTML = "<h3> You get back into your car and turn it on, but as the car starts, a Russian mob member runs up and breaks your window with a brick and knocks you out. You wake up in a basement, your mask on. You decide to...</h3>" +
    "<br>" +
    "<br>" +
    "<button type=\button\ onclick=\ death2b()\> wait, maybe someone will explain the situation </button> <button type=\button\ onclick=\ bustopen()\> screw that, Bust open the door at the top of the basement. </button>"

}

function bustopen() {

  document.getElementById("choice").innerHTML = "<h3>You Bash the door open and kill a mobster on the other side who was carrying a bat. You grab the bat and walk through the dark hall of the auto shop. You hear voices up ahead. You peak the door and see that the next room is full of Russians armed with knives and chain whips. You decide to...</h3>" +
    "<br>" +
    "<br>" +
    "<button type=’button’ onclick=’death3b()’> walk in and ask directions </button> <button type=\button\ onclick=\ killroom()\> Run in and kill em. </button>"



}

function killroom() {

  document.getElementById("choice").innerHTML = "<h3>You take a breath and run into the room. As you charge at the mobsters they run at you and as one goes to cut you down, you smash his face in with the bat. The others don't stop though. Another russian comes up from behind you and knocks your bat away with his chain, you turn around and take his chain from him, knocking him out with it as. After wildly swiping at the other two russians, you are the last man standing. You take a deep breath and take your mask off, vomiting onto the ground. You pass out.</h3>" +
    "<br>" +
    "<br>" +
    "<button type=\button\ onclick=\ richard()\> ????? </button> <button type=\button\ onclick=\ richard()\> ????? </button> <button type=\button\ onclick=\ richard()\> ????? </button> <button type=\button\ onclick=\ richard()\> ????? </button> <button type=\button\ onclick=\ richard()\> ????? </button> <button type=\button\ onclick=\ richard()\> ????? </button> <button type=\button\ onclick=\ richard()\> ????? </button> <button type=\button\ onclick=\ richard()\> ????? </button> <button type=\button\ onclick=\ richard()\> ????? </button> <button type=\button\ onclick=\ richard()\> ????? </button> <button type=\button\ onclick=\ richard()\> ????? </button> <button type=\button\ onclick=\ richard()\> ????? </button> <button type=\button\ onclick=\ richard()\> ????? </button> "

}

function richard() {

  document.getElementById("choice").innerHTML = "<h3> You wake up later, in a dark room. You open the door and a man wearing a rooster mask is on the other side. His stare renders you almost completely frozen, just listening as he starts to speak, the sound of a phone flatline in the background. 'Do you like huirting people?' He says to you. 2 other masked men aproach you and right before they reach you, you wake up in your bed, fully clothed with the mask on your desk. The phone rings and you are inclined to grb the mask and pick up, following the directions on the other end. Over, and over, and over....</h3>" +
    "<br>" +
    "<br>" +
    "<h3> Ending 1/2, The operative.</h3>"

}

function path1() {

  document.getElementById("choice").innerHTML = "<h3>You walk down the alleyway, the Russians spot you instantly. Before you can run the other way cars close in both side of the alley. You decide to...</h3>" +
    "<br>" +
    "<br>" +
    "<button type=’button’ onclick=’death1a()’> surrender and raise your arms </button> <button type=\button\ onclick=\ killroom2()\> Run into the door the other Russians ran into. </button>"

}

function killroom2() {

  document.getElementById("choice").innerHTML = "<h3>You run into the room and the other Russians are at the end of the hall. They start shooting down the hallway at you. You decide to...</h3>" +
    "<br>" +
    "<br>" +
    "<input type='radio' name='cover' id='cover1' > Cardboard box as cover <br> <input type='radio' name='cover' id='cover2' > Plastic Barrel <br> <input type='radio' name='cover' id='cover3' > wooden palletes <button type=’button’ onclick=’ifif()’> Continue </button>" +
    "<br>" +
    "<br>" +
    "<button type=’button’ onclick=’survive()’> CLICK HERE, //if statement wont work// </button>"

  function ifif() {
    let cover1 = document.getElementById("cover1")
    let cover2 = document.getElementById("cover2")
    let cover3 = document.getElementById("cover3")

    if (cover1.checked)
      document.getElementById("choice").innerHTML = "<p>The box is full of military grade kevlar, congrats.</p> <button type=’button’ onclick=’survive()’> Continue </button>";
    else
      document.getElementById("choice").innerHTML = "<p>The bullets pass right through. You died.</p> <button type=’button’ onclick=’page2()’> Continue </button>";
  }
}

function survive() {

  document.getElementById("choice").innerHTML = "<h3> The Russians run after they realize shooting is futile. You get up and rush down the hallway, picking up a shotgun in the middle of the hallway. You keep sprinting forward until you see a wounded Russian on the ground. You decide to...</h3>" +
    "<br>" +
    "<br>" +
    "<button type=’button’ onclick=’death2a()’> spare him </button> <button type=\button\ onclick=\ survive2()\> Shoot him and keep running </button>"

}

function survive2() {

  document.getElementById("choice").innerHTML = "<h3> You kill him, the blast resonates and Russians run out of the door infront of you. You decide to...</h3>" +
    "<br>" +
    "<br>" +
    "<button type=’button’ onclick=’survive3()’> Hold your postiton and blast em all before they reach you, they all have knives anyway. </button> <button type=\button\ onclick=\ death4a()\> Run away and try to hide. </button>"

}

function survive3() {

  document.getElementById("choice").innerHTML = "<h3> You run through the next room and make it to your car, as you fumble with your keys a Russian runs up and pops you in the head. You die.</h3>" +
    "<br>" +
    "<br>" +
    "<h3> ending 2/2. The one where you die. THE END. </h3>"

}



//story stuff end


