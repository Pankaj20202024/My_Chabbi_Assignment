#### hosted link : https://chaabiassignment12015448.netlify.app

## **LIBRARIES AND PLUGINS USED**

1. React 
2. useCallback
3. useEffect 
4. useState 

***

## **EXPLANATION OF THE CODE**

1. At first I have created the components folder inside the src folder . Inside the components folder I have created two files ( i.e CustomUseCase.js,          
   CustomUseCase.module.css).

2. Here inside the CustomUseCase.js I have written the code for creating the web-based application for touch typing , Touch typing is typing without looking at the   
   keyboard. The fundamental idea is that each finger is given its own section of the keyboard and your fingers learn the location of the keyboard through practising
   regularly and gaining muscle memory to eventually build up speed whilst typing. While touch typing is a practice of keys, words & sentences. For this exercise, I have      focus only on keys practice & only on the 8 keys of the keyboard (asdfjkl;).

3. Inside the CustomUseCase.module.css I have written the css for CustomUseCase.js file.

## CustomUseCase.js 

```react

import React, { useCallback, useEffect, useState } from "react";
import styles from "./CustomUseCase.module.css";


  ```

This above block of code imports the necessary modules and stylesheets. React is imported for creating the component, useState is imported for managing component    state,useEffect is used to generate the initial text and update it whenever the dependencies change. 
style is imported from a local CSS module file for styling the component.

***

```react

export default function CustomUseCase() {
    return (
        <div>  </div>
    );
}

```

These line defines the component CustomUseCase as a functional component that can be imported and used by other components.

 *** 

```react 

const [correct, setCorrect] = useState(true);
const [incorrect, setIncorrect] = useState(true);
const [passed, setPassed] = useState(true);
const [failed, setFailed] = useState(true);

```

At first I have declared and initialized four different state variables using the useState hook: correct, incorrect, passed, and failed. Each of these state variables is associated with a corresponding setter function: setCorrect, setIncorrect, setPassed, and setFailed.

In this project i have added 4 types of sound which will plays on the basis of some conditions. Now suppose if while typing the key if user types the correct key then the correct sound will come and if the use press the wrong key then the iccorect key pressed sound will come , and if some one types the whole content within the setted wpm value and the accuracy is also 100 % then the passed sound will come other wise the failed sound will come . 

Now for handling the state of the sounds come i have created these four variable . so initially all value is set to true . means if any of the above mentioned condition will failed then the corresponding sound to that particular condition will Come . 

```react 

const CheckedStatus1 = () => {
   setCorrect(!correct);
};
const CheckedStatus2 = () => {
   setIncorrect(!incorrect);
};
const CheckedStatus3 = () => {
   setPassed(!passed);
};
const CheckedStatus4 = () => {
   setFailed(!failed);
};
  
```

No here in the above code snipet I have changed the values of correct, incorrect, passed, and failed variables using their respective setters (i.e suppose if someone don't want the sound which comes when the user press the correct key then he /she can unchecked that option and correct sound stops comming . similary for incorrect, passed, failed condition also .

```react

const [displayvalue, setDisplayvalue] = useState("none");
const [buttonstatus, setButtonStatus] = useState(false);

const ShowOrHide = () => {
  setButtonStatus(!buttonstatus);
    if (!buttonstatus) {
      setDisplayvalue("flex");
    } else {
      setDisplayvalue("none");
  }
};

```

Here in the above code snipet at first I have created the 2 variable ( i.e displayvalue and buttonstatus) using useState hook. Each of these State variables is associated with a corresponding setter function: setDisplayvalue, setButtonState.

After this I have used the inline css for the container where I have created the Sounds state varialbe(i.e Correct Letter, Incorrect Letter, Passed Letter , Failed Letter) or I can say checkboxes. their I have used the display property of the css and assign it a value of displayvalue state variable.so as Initially displayvalue value is none which this container is not visible initialy .

After this I have created the buttonstatus variable just to check weather the user clicked the button or not . Initially it's value is false which means user has not clicked the button yet.

Now below these state variable I have created a function name as ShowOrHide and I am trigerring it using the onClick proerty in the sound button . 
Inside this ShowOrHide function I have written the logic for changing the value of displayvalue from none to flex and from flex to none .

***

Now after this I have created the Logic for setting and changing the values of Source , Scope, Genearator, and Threshold .

```react 

const [SourceOptionValue, setSourceOptionValue] = useState("Bigrams");
const [ScopeOptionValue, setScopeOptionValue] = useState("Top 50");
const [CombinationValue, setCombinationValue] = useState(2);
const [RepetitionValue, setRepetitionValue] = useState(2);
const [WPMValue, setWpmValue] = useState(50);
const [outPutWpmValue, setOutPutWpmValue] = useState(0);
const [AccuracyValue, setAccuracyValue] = useState(100);

const handleSourceOptionChange = (event) => {
   setSourceOptionValue(event.target.value);
};

// taking variables for lesson passed and total lesson

const [lessonPassed, setLessonPassed] = useState(1);
const [totatLesson, setTotalLesson] = useState(25);

const handleScopeOptionChange = (event) => {
  if (event.target.value === "Top 50") {
     setLessonPassed(1);
     setTotalLesson(25);
  } else if (event.target.value === "Top 100") {
      setLessonPassed(1);
      setTotalLesson(50);
  } else if (event.target.value === "Top 150") {
      setLessonPassed(1);
      setTotalLesson(75);
  } else {
      setLessonPassed(1);
      setTotalLesson(100);
  }
  setScopeOptionValue(event.target.value);
};

const handleCombinationValueChange = (event) => {
  setCombinationValue(event.target.value);
};

const handleRepetitionValueChange = (event) => {
  setRepetitionValue(event.target.value);
};

const handleWpmValueChange = (event) => {
  setWpmValue(event.target.value);
};

const handleAccuracyValueChange = (event) => {
  setAccuracyValue(event.target.value);
};

```
Here also I have created the states variable for checking what value is selected inside these above mentioned contiainers (i.e Source, Scope, Generator,Threshold).

so initially SourceOptionValue is setted to Bigrams, ScopeOptionValue is setted to Top 50 , CombinationValue is setted to 2 , RepetitionValue is setted to 2 WPMValue is setted to 50 , AccuracyValue is setted 100 , and outPutWpmValue is setted to 0 which is used to calculated the accuracy of the user when he starts typing the words.

After assigning these default values I have created the functions named as handleSourceOptionChange() for setting the value of current choosen Source value( for eg Bigrams,Trigrams, Tetragrams).

After this I have created two more state variable for taking and setting the value of lesson passed and total lesson . Initially lessonPassed value is 1 and totatLesson value is setted to 25.

After this I have created the function named as handleScopeOptionChange where I am changing the Scope Option value (i.e setting any of these value : "Top 50" , "Top 100", "Top 150", "Top 200") and also before changing the Scope value I am also checking if the scope option value is "Top 50" then I am setting the value of lessonPassed to 1 and totatLesson value to 25 . Similarly for "Top 100" lessonPassed value to 1 and totatLesson value to 50 , for "Top 150" lessonPassed to 1 and totatLesson value to 75 , for "Top 200" lessonPassed to 1 and totatLesson value to 100 .

After this I have Created the handleCombinationValueChange function where I have written the logic for the Combination value . Similarly inside the function handleRepetitionValueChange
I have written the logic for the Repetition value , inside the function handleWpmValueChange I have written the logic for the Wpm Value, inside the function handleAccuracyValueChange I have written the logic for changing the Accuracy value.


***

```react 
const [CoustomValue, setCoustomValue] = useState("");
const [TaskGiven, setTaskGiven] = useState("");

// LOGIC FOR GENERATING THE RANDOM TEXT

const generateWordList = (combination, wordLength) => {
   const wordList = [];
   const characters = "asdfjkl;";

   for (let i = 0; i < combination; i++) {
     let word = "";
     for (let j = 0; j < wordLength; j++) {
       const randomChar = characters.charAt(
         Math.floor(Math.random() * characters.length)
       );
       word += randomChar;
     }
     wordList.push(word);
   }

   return wordList;
};

const generateText = useCallback(
  (sourceValue, combinationValue, repetitionValue, customText) => {
    let words = [];

    switch (sourceValue) {
      case "Bigrams":
        words = generateWordList(combinationValue, 2);
          break;
        case "Trigrams":
          words = generateWordList(combinationValue, 3);
          break;
        case "Tetragrams":
          words = generateWordList(combinationValue, 4);
          break;
        default:
          break;
     }

     let text = "";

     for (let i = 0; i < repetitionValue; i++) {
       text += words.join(" ") + " ";
     }
     setTaskGiven(text);
     setWord(text);
   },
   []
);

useEffect(() => {
   generateText(
     SourceOptionValue,
     CombinationValue,
     RepetitionValue,
     CoustomValue
   );
}, [
    SourceOptionValue,
    CombinationValue,
    RepetitionValue,
    CoustomValue,
    generateText,
]);

```
