const insertTxt = document.getElementById("game");

//Case Files Button
let fileBtn = document.createElement("button");
fileBtn.innerHTML = "Case Files";
fileBtn.addEventListener("click", function () {
  fileBtn.style.visibility = "hidden";
  victimBtn.style.visibility = "visible";
  sceneBtn.style.visibility = "visible";
  suspectBtn1.style.visibility = "visible";
  suspectBtn2.style.visibility = "visible";
  suspectBtn3.style.visibility = "visible";
  suspectBtn4.style.visibility = "visible";
  questionBtn.style.visibility = "hidden";
});
document.getElementById("game").appendChild(fileBtn);
fileBtn.style.backgroundColor = "#880808";
fileBtn.style.height = "5rem";
fileBtn.style.width = "12rem";
fileBtn.style.fontSize = "1.75rem";

//Victim Button
let victimBtn = document.createElement("button");
victimBtn.innerHTML = "The Victim, Kenny";
victimBtn.addEventListener("click", function () {
  const victimTxt = `The victim, Kenny Wolf, was found deceased with an embroidered wooden stake piercing their left calf, and presumably bled out from the wound. 
  Kenny is the head of the prosperous Wolf family, who singlehandedly raised the family to it's status. 
  According to the other family members, the family conference to decide his massive inheritance was ongoing at the time of death.
  On Kenny's body underneath him is the key for the room. The death was ruled a homicide, but the cause of death is a mystery.
  The time of death seems to be a bit after the family dinner, somewhere in between 10:00 PM - 11:00 PM, and being discovered at approximately 7:00 AM the following day.`;
  insertTxt.innerHTML = victimTxt;
});
document.getElementById("game").appendChild(victimBtn);

//Scene Button
let sceneBtn = document.createElement("button");
sceneBtn.innerHTML = "Crime Scene";
sceneBtn.addEventListener("click", function () {
  const sceneTxt = `The door to the crime scene, the master bedroom was locked when first investigated, and automatically locks after being closed. 
  There's one window, but the window is locked and only locks from inside the room.
  There are no hidden passageways to enter or exit the room, the door is the only entrance. 
  However, one strange thing of note in the room is that the only blood in the room is pooled around the body, as if the victim was stabbed and didn't move afterwards. 
  In addition to that, all documents relating to the inheritance seem to be completely missing from the master bedroom, where Kenny mostly stayed in his later years.`;
  insertTxt.innerHTML = sceneTxt;
});
document.getElementById("game").append(sceneBtn);

//Suspect Buttons
let suspectBtn1 = document.createElement("button");
suspectBtn1.innerHTML = "Suspect 1, Eva";
suspectBtn1.addEventListener("click", function () {
  const suspect1Txt = `Eva Wolf, the oldest daughter of the Wolf family. She owns a small business dedicated to making designer clothing, but it's yet to see any real success.
  She's often considered snakry and sarcastic, always trying to get the last word in on the conversation. 
  According to the other suspects, she got into an argument with Kenny Wolf over dinner, saying it was unfair that the inheritance be divided with the other children, and even the servant. 
  After which, she retired to her bedroom at what the other suspects presume is around 9:45 PM that night, and wasn't seen afterwards. 
  In the morning when the victim was discovered, she was the person who found the body after seeing it through the window after noticing the curtains were strangely open, and went around waking up the various family members to alert them of the tragedy.`;
  insertTxt.innerHTML = suspect1Txt;
});
document.getElementById("game").appendChild(suspectBtn1);

let suspectBtn2 = document.createElement("button");
suspectBtn2.innerHTML = "Suspect 2, Daniel";
suspectBtn2.addEventListener("click", function () {
  const suspect2Txt = `Daniel Wolf, the oldest son and second in order of succession. 
  Daniel runs a semi-successful restaurant, idolizing Chapman when growing up and learning how to cook from Chapman.
  Daniel and Chapman were together to make the food for the family dinner, before the family conference started and Daniel left the rest to Chapman.
  According to Chapman, Chapman made garlic toast, rice, and beans, while Daniel worked on the mushroom stew portion of the dinner for Kenny before leaving for the conference.
  According to Daniel, he was with Morgan discussing how worried they were for Eva, and when the discussion on the inheritance would resume.`;
  insertTxt.innerHTML = suspect2Txt;
});
document.getElementById("game").appendChild(suspectBtn2);

let suspectBtn3 = document.createElement("button");
suspectBtn3.innerHTML = "Suspect 3, Chapman";
suspectBtn3.addEventListener("click", function () {
  const suspect3Txt = `Chapman Mitchell, the Wolf family chef, has been serving Kenny Wolf and the Wolf family for the past twenty years.
  Chapman was taken in at a young age from an orphanage, and despite not wanting to be a chef has excellently fulfilled his role. 
  According to the other suspects, Chapman served the family dinner at around 9:00 PM, and then proceeded to retreat to his servant's chambers on call to clean up table after dinner.
  According to Chapman, after half an hour, Chapman was called to clean up the dinner table, as well as lock all the doors and windows of the family estate.
  Afterwards, he asserts that he went back to his servant's chambers to rest for the night, citing the "servant schedule" readily availible to see in and outside the servant quarters.
  It reads that the servant shifts are from 7:00 AM - 10:00 PM. 
  After the body was discovered, Chapman was able to open the master bedroom by picking the lock, which was a loud and time consuming process due to the amount of security Kenny pursued in his later years.`;
  insertTxt.innerHTML = suspect3Txt;
});
document.getElementById("game").appendChild(suspectBtn3);

let suspectBtn4 = document.createElement("button");
suspectBtn4.innerHTML = "Suspect 4, Morgan";
suspectBtn4.addEventListener("click", function () {
  const suspect4Txt = `Morgan Wolf, the youngest daughter of the Wolf family is fresh out of college pursuing her Bachelor's Degree in the healthcare industry.
  According to Eva and Daniel, Morgan has deep rooted jealousy towards the two of them, as they were "father's favorites" and she was born after father became sick as well as losing her mother at a young age.
  According to Morgan, she was with Daniel during the night, but at around 10:45 PM decided to walk to her bed chambers and rest for the night.`;
  insertTxt.innerHTML = suspect4Txt;
});
document.getElementById("game").appendChild(suspectBtn4);

//Trivia Start Button
let questionBtn = document.createElement("button");
questionBtn.innerHTML = "Questions Page!";
questionBtn.addEventListener("click", function () {
  location.href = "questions.html";
});
document.getElementById("game").appendChild(questionBtn);
questionBtn.style.backgroundColor = "#880808";
questionBtn.style.height = "5rem";
questionBtn.style.width = "12rem";
questionBtn.style.fontSize = "1.75rem";
questionBtn.style.alignContent = "left";

//Button Visibility on Page Load
victimBtn.style.visibility = "hidden";
sceneBtn.style.visibility = "hidden";
suspectBtn1.style.visibility = "hidden";
suspectBtn2.style.visibility = "hidden";
suspectBtn3.style.visibility = "hidden";
suspectBtn4.style.visibility = "hidden";
