#### hosted link : https://chaabiassignment12015448.netlify.app

***

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

The above code defines a function called generateWordList which takes two arguments: combinationValue and length. This function generates a list of random words based on the provided combination value and the length of each word.

Here's how the generateWordList function works:

1. It creates an empty array called wordList to store the generated words.
2. It enters a loop that iterates combinationValue times.
3. Inside the loop, it creates an empty string called word to store a single word.
4. It enters another loop that iterates length times.
5. Inside the inner loop, it generates a random character and appends it to the word string.
6. After the inner loop, it pushes the generated word into the wordList array.
7. After the outer loop completes, it returns the wordList array containing the generated words.

The generateText function is defined using the useCallback hook and takes four arguments: sourceValue, combinationValue, repetitionValue, and customText. This function is responsible for generating the final text based on the provided values.

Here's how the generateText function works:

1. It initializes an empty array called words to store the generated words.
2. It uses a switch statement on the sourceValue to determine the combination value to be used.
3. Depending on the sourceValue, it calls the generateWordList function with the appropriate combinationValue (2, 3, or 4) and assigns the result to the words array.
4. It initializes an empty string called text to store the final generated text.
5. It enters a loop that iterates repetitionValue times.
6. Inside the loop, it joins the words array into a string with spaces between the words and appends it to the text string.
7. After the loop completes, it sets the text as the value for the taskGiven state variable (assuming setTaskGiven is a state setter function).
8. It sets the text as the value for the word state variable (assuming setWord is a state setter function).

The useEffect hook is used to trigger the generateText function whenever the dependencies (SourceOptionValue, CombinationValue, RepetitionValue, CoustomValue, generateText) change. This ensures that the generateText function is called with the updated values when any of these dependencies change.

Overall, this code generates a list of random words based on the provided combination value and length, and then generates a final text by repeating the generated words a certain number of times. The final text is stored in the taskGiven and word state variables.

***

```react 
const [word, setWord] = useState("");
const [count, setCount] = useState(0);
const [incorrectCount, setIncorrectCount] = useState(0);
```
This  above line uses the useState hook to declare a state variable called word , count , incorrectCount , and their corresponding setter function setWord, setCount,setIncorrectCount . intially the value of the setWord is an empty string , setcount is 0 and setIncorrectCount is 0.

***

```react 
const [hours, setHours] = useState(0);
const [minutes, setMinutes] = useState(0);
const [istimerStarted, setIsTimerStarted] = useState(false);
const [Second, setSeconds] = useState(0);
const [TotalTimeTaken, setTotalTimeTaken] = useState(0);
```
These lines declare additional state variables and their corresponding setter functions using the useState hook. The hours, minutes, Second, and TotalTimeTaken variables are initialized with a value of 0, while the istimerStarted variable is initialized with false.

***

```react
useEffect(() => {
  let timerInterval;
  if (istimerStarted) {
    timerInterval = setInterval(() => {
      if (Second === 59) {
        if (minutes === 59) {
          setHours((prevHours) => prevHours + 1);
          setMinutes(0);
        } else {
          setMinutes((prevMinutes) => prevMinutes + 1);
        }
        setSeconds(0);
      } else {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }
    }, 1000);

    const TimeInMinute =
      Number(hours) * 60 + Number(minutes) + Number(Second) / 60;

    setTotalTimeTaken(TimeInMinute);
    const wpm = ((word.length - 1 / 5) / TotalTimeTaken).toFixed(0);
    setOutPutWpmValue(wpm);
  }

  return () => {
    clearInterval(timerInterval);
  };
}, [istimerStarted, Second, minutes, hours, TotalTimeTaken, word]);

```
This code block uses the useEffect hook to perform side effects or execute code based on certain conditions. It specifies a function that will be executed when the dependencies (istimerStarted, Second, minutes, hours, TotalTimeTaken, word) change.

Within the effect function:

1. It declares a variable timerInterval to store the interval ID returned by setInterval.
2. If istimerStarted is true, an interval is set up using setInterval to execute a callback function every 1000 milliseconds (1 second).
3. Inside the callback function, it increments the seconds state variable. If seconds reaches 59, it checks if minutes has also reached 59. If so, it increments hours by 1    and resets minutes to 0. If not, it increments minutes by 1. Finally, it resets seconds to 0.
4. After each interval execution, the TotalTimeTaken state variable is updated by calculating the total time in minutes using the values of hours, minutes, and Second.
5. The calculated Words Per Minute (WPM) value is computed using the formula (word.length - 1 / 5) / TotalTimeTaken and stored in the OutPutWpmValue state variable.
6. The returned cleanup function clears the interval using clearInterval to stop the execution of the callback function when the effect is cleaned up.

Overall, this code snippet is responsible for updating the timer values (hours, minutes, Second, TotalTimeTaken) and calculating the Words Per Minute (WPM) value based on the word length and the time elapsed.

***

```react 

const [TotalCharacterEntered, setTotalCharacterEntered] = useState(0);
const [TotalCorrectCharacterEntered, setTotalCorrectCharacterEntered] = useState(0);

```
These lines declare state variables TotalCharacterEntered and TotalCorrectCharacterEntered using the useState hook. The initial values of both variables are set to 0. setTotalCharacterEntered and setTotalCorrectCharacterEntered are the setter functions to update the corresponding state variables.

```react 

const [UserAccuracyOutput, setUserAccuracyOutput] = useState(0);

```
This line declares the state variable UserAccuracyOutput and its setter function setUserAccuracyOutput using the useState hook. It initializes the UserAccuracyOutput variable with a value of 0.

```react

const PassedOrNot = () => {
    // Function implementation
};

```
This code declares a function called PassedOrNot. It is an arrow function without any parameters.

```react

if (Number(UserAccuracyOutput) >= Number(AccuracyValue) && Number(outPutWpmValue) >= Number(WPMValue)) {
    // Code executed if the condition is true
} else {
    // Code executed if the condition is false
}

```
This if-else statement checks two conditions using the >= (greater than or equal to) operator. If both conditions are true, the code inside the first block will be executed. Otherwise, the code inside the else block will be executed.

Inside the if block:

```react
if (passed) {

  const PassedSound = new Audio("/sound/Passed.mp3");
  PassedSound.play();
}
if (lessonPassed === totatLesson) {
  setLessonPassed(1);
  setTotalLesson(totatLesson);
} else {
  setLessonPassed(lessonPassed + 1);
}
generateText(SourceOptionValue, CombinationValue, RepetitionValue, CoustomValue);
setIsTimerStarted(false);
setCount(0);
setIncorrectCount(0);
setTotalTimeTaken(0);
setHours(0);
setMinutes(0);
setSeconds(0);
let removeEnteredValue = document.getElementById("userInput");
removeEnteredValue.value = "";

```

Here's what is happening inside the if block:

1. If passed is true, it creates an Audio object called PassedSound that plays the sound file "/sound/Passed.mp3".
2. It checks if lessonPassed is equal to totatLesson (presumably a typo, should be totalLesson). If true, it sets lessonPassed to 1 and totalLesson to totatLesson.
3. If the above condition is false, it increments lessonPassed by 1.
4. It calls the generateText function with the specified arguments (SourceOptionValue, CombinationValue, RepetitionValue, CoustomValue).
5. It sets isTimerStarted to false, effectively stopping the timer.
6. It resets several state variables (count, incorrectCount, totalTimeTaken, hours, minutes, seconds) to 0.
7. It retrieves the DOM element with the ID "userInput" and sets its value to an empty string.

Inside the else block:

```react

if (failed) {

  const FailedSound = new Audio("/sound/Failed.mp3");
  FailedSound.play();
}

```

Inside the else block, there is an if statement that checks if failed is true. If it is true, it creates an Audio object called FailedSound and assigns the sound file "/sound/Failed.mp3" to it. Then, it plays the audio by calling the play() method on the FailedSound object.

```react

setIsTimerStarted(false);
setTotalCharacterEntered(0);
setTotalCorrectCharacterEntered(0);
setCount(0);
setIncorrectCount(0);
setTotalTimeTaken(0);
setHours(0);
setMinutes(0);
setSeconds(0);

```

The subsequent lines inside the else block set various state variables to their initial values or reset them:

1. setIsTimerStarted(false) sets the isTimerStarted state variable to false, effectively stopping the timer.
2. setTotalCharacterEntered(0) sets the TotalCharacterEntered state variable to 0, indicating that no characters have been entered.
3. setTotalCorrectCharacterEntered(0) sets the TotalCorrectCharacterEntered state variable to 0, indicating that no correct characters have been entered.
4. setCount(0) resets the count state variable to 0, representing the count of characters.
5. setIncorrectCount(0) resets the incorrectCount state variable to 0, representing the count of incorrectly entered characters.
6. setTotalTimeTaken(0) resets the totalTimeTaken state variable to 0, indicating that no time has elapsed.
7. setHours(0), setMinutes(0), and setSeconds(0) reset the hours, minutes, and seconds state variables to 0, respectively, indicating that the timer has been reset to zero.

```react
let removeEnteredValue = document.getElementById("userInput");
removeEnteredValue.value = "";
```
The last line retrieves the DOM element with the ID "userInput" using document.getElementById("userInput"). It assigns this element to the variable removeEnteredValue. Finally, it sets the value of the removeEnteredValue element to an empty string, effectively clearing the entered text in the input field with the ID "userInput".

Overall, this code block handles the logic and actions to be performed when the condition in the if-else statement is true or false. It plays audio, resets state variables, stops the timer, and clears the entered text based on the outcome of the condition.

***

```react

const handleKeyPressed = (event) => {
 if (!istimerStarted) {

    setIsTimerStarted(true);
  }
  // ...
};

```
This code declares the handleKeyPressed function with an event parameter representing the keypress event and it is going to be triggered only when the key is pressed . It 
checks if the timer has not started (!istimerStarted), and if so, it sets isTimerStarted to true using the setIsTimerStarted setter function.

```react

const UserAccuracy =(TotalCorrectCharacterEntered / TotalCharacterEntered) * 100;
setUserAccuracyOutput(UserAccuracy.toFixed(0));

``` 
This code calculates the user's accuracy by dividing TotalCorrectCharacterEntered by TotalCharacterEntered and multiplying it by 100. The result is stored in the 
UserAccuracy variable. The toFixed(0) method is used to round the accuracy value to 0 decimal places. Finally, it updates the UserAccuracyOutput state variable with the 
calculated accuracy using the setUserAccuracyOutput setter function.

```react 

const KeyPressed = event.key;

```

This line retrieves the key that was pressed and assigns it to the KeyPressed variable.

```react

if (KeyPressed === word[count]) {

  // Code executed if the pressed key matches the expected character
} else if (
  KeyPressed === "Tab" ||
  KeyPressed === "Escape" ||
  KeyPressed === "Enter"
) {
  // Code executed if the pressed key is Tab, Escape, or Enter
} else {
  // Code executed for all other keys
}

```

This if-else statement checks the value of the KeyPressed variable to determine the action to be taken based on the pressed key.

Inside the first if block:

```react

if (incorrectCount === 0) {
  if (correct) {
    const typingSound = new Audio("/sound/typing_sound.wav");
    typingSound.play();
  }
  setTotalCorrectCharacterEntered(TotalCorrectCharacterEntered + 1);
}

setCount(count + 1);
setTotalCharacterEntered(TotalCharacterEntered + 1);

if (count === word.length - 1) {
  if (incorrectCount === 0) {
    PassedOrNot();
  }
}

```

Here's what is happening inside the first if block:

1. It checks if incorrectCount is 0, indicating that no incorrect characters have been entered.
2. If correct is true (presumably a variable indicating the correctness of the typed word), it creates an Audio object called typingSound and assigns the sound file
   "/sound/typing_sound.wav" to it. Then, it plays the audio by calling the play() method on the typingSound object.
3. It increments TotalCorrectCharacterEntered by 1 using the setTotalCorrectCharacterEntered setter function.
4. It increments count by 1 using the setCount setter function.
5. It increments TotalCharacterEntered by 1 using the setTotalCharacterEntered setter function.
6. If count is equal to word.length - 1, indicating that the entire word has been typed, and incorrectCount is 0, it calls the PassedOrNot function.

Inside the else if block:

```react

setCount(0);

```
This line sets the count state variable to 0 using the setCount setter function. It resets the count of characters typed to the initial state, indicating that the user is starting a new word.

```react

let removeEnteredValue = document.getElementById("userInput");
removeEnteredValue.value = "";

```

These lines retrieve the DOM element with the ID "userInput" using document.getElementById("userInput") and assign it to the variable removeEnteredValue. Then, it sets the value property of the removeEnteredValue element to an empty string. This effectively clears the text entered by the user in the input field with the ID "userInput".

```react

setTotalCharacterEntered(TotalCharacterEntered + 1);

```

This line increments the TotalCharacterEntered state variable by 1 using the setTotalCharacterEntered setter function. It keeps track of the total number of characters entered by the user, including correct and incorrect characters.

Overall, inside the else if block, the code resets the count, clears the input field, and increments the total character count when the pressed key is Tab, Escape, or Enter. This is typically done to prepare for the next word or to handle special keys that don't match the expected characters of the current word.

****

This is the complete HTML code for creating the interface 

```react

return (
   <div id={styles.MainContainer}>
     <div id={styles.NavbarMainContainer}>
       <div id={styles.NavabarContainer}>
          <div id={styles.TimerContainer}>
            <p id={styles.Timer}>
              {hours} : {minutes} : {Second}
            </p>
          </div>
          <div id={styles.SoundContainer}>
            <div
              id={styles.OptionsContainer}
              style={{
                display: displayvalue,
              }}
            >
              <div className={styles.options}>
                <input
                  type="checkbox"
                  checked={correct}
                  onChange={CheckedStatus1}
                />

                <label>Correct Letter</label>
              </div>
              <div className={styles.options}>
                <input
                  type="checkbox"
                  checked={incorrect}
                  onChange={CheckedStatus2}
                />
                <label>Incorrect Letter</label>
              </div>
              <div className={styles.options}>
                <input
                  type="checkbox"
                  checked={passed}
                  onChange={CheckedStatus3}
                />
                <label>Passed Letter</label>
              </div>
              <div className={styles.options}>
                <input
                  type="checkbox"
                  checked={failed}
                  onChange={CheckedStatus4}
                />
                <label>Failed Letter</label>
              </div>
            </div>
            <div id={styles.SoundButtonContainer}>
              <button id={styles.SoundButton} onClick={ShowOrHide}>
                Sound
              </button>
            </div>
          </div>
        </div>
        <div id={styles.HorizontalRow} style={{ display: displayvalue }}></div>
      </div>

      {/* customer use case container  */}

      <div id={styles.CustomerUseCaseContainer}>
        <div id={styles.SourceContainer}>
          <div className={styles.HeadingContainer}>
            <h3 className={styles.Heading}>Source</h3>
          </div>
          <div className={styles.OptionsContainer}>
            <div className={styles.InnerOptionContainer}>
              <input
                type="radio"
                value="Bigrams"
                checked={SourceOptionValue === "Bigrams"}
                onChange={handleSourceOptionChange}
              />
              <label>Bigrams</label>
            </div>
            <div className={styles.InnerOptionContainer}>
              <input
                type="radio"
                value="Trigrams"
                checked={SourceOptionValue === "Trigrams"}
                onChange={handleSourceOptionChange}
              />
              <label>Trigrams</label>
            </div>
            <div className={styles.InnerOptionContainer}>
              <input
                type="radio"
                value="Tetragrams"
                checked={SourceOptionValue === "Tetragrams"}
                onChange={handleSourceOptionChange}
              />
              <label>Tetragrams</label>
            </div>
          </div>
        </div>
        <div id={styles.ScopeContainer}>
          <div className={styles.HeadingContainer}>
            <h3 className={styles.Heading}>Scope</h3>
          </div>
          <div className={styles.OptionsContainer}>
            <div className={styles.InnerOptionContainer}>
              <input
                type="radio"
                value="Top 50"
                checked={ScopeOptionValue === "Top 50"}
                onChange={handleScopeOptionChange}
              />
              <label>Top 50</label>
            </div>
            <div className={styles.InnerOptionContainer}>
              <input
                type="radio"
                value="Top 100"
                checked={ScopeOptionValue === "Top 100"}
                onChange={handleScopeOptionChange}
              />
              <label>Top 100</label>
            </div>
            <div className={styles.InnerOptionContainer}>
              <input
                type="radio"
                value="Top 150"
                checked={ScopeOptionValue === "Top 150"}
                onChange={handleScopeOptionChange}
              />
              <label>Top 150</label>
            </div>
            <div className={styles.InnerOptionContainer}>
              <input
                type="radio"
                value="Top 200"
                checked={ScopeOptionValue === "Top 200"}
                onChange={handleScopeOptionChange}
              />
              <label>Top 200</label>
            </div>
          </div>
        </div>
        <div id={styles.GeneratorContainer}>
          <div className={styles.HeadingContainer}>
            <h3 className={styles.Heading}>Generator</h3>
          </div>
          <div className={styles.OptionsContainer}>
            <div className={styles.InnerOptionContainer}>
              <p>Combination</p>
              <input
                type="number"
                className={styles.InputTypeNumber}
                value={CombinationValue}
                min={1}
                onChange={handleCombinationValueChange}
              />
            </div>
            <div className={styles.InnerOptionContainer}>
              <p>Repetition</p>
              <input
                type="number"
                className={styles.InputTypeNumber}
                value={RepetitionValue}
                min={1}
                onChange={handleRepetitionValueChange}
              />
            </div>
          </div>
        </div>
        <div id={styles.ThresholdContainer}>
          <div className={styles.HeadingContainer}>
            <h3 className={styles.Heading}>Threshold</h3>
          </div>
          <div className={styles.OptionsContainer}>
            <div className={styles.InnerOptionContainer}>
              <p>WPM</p>
              <input
                type="number"
                className={styles.InputTypeNumber}
                value={WPMValue}
                min={1}
                onChange={handleWpmValueChange}
              />
            </div>
            <div className={styles.InnerOptionContainer}>
              <p>Accuracy</p>
              <input
                type="number"
                className={styles.InputTypeNumber}
                value={AccuracyValue}
                min={1}
                max={100}
                onChange={handleAccuracyValueChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Lessons container  */}

      <div id={styles.LessonContainer}>
        <h2>
          Lesson {lessonPassed} / {totatLesson}
        </h2>
      </div>

      {/* TASK GIVEN , TASK OUTPUT , TASK STATUS   CONTAINER  */}

      <div id={styles.TaskMainContainer}>
        <p id={styles.InstructionPara}> At last Press Space To Submit.</p>
        <div id={styles.TaskGivenContainer}>
          <p id={styles.TaskGiven}>{TaskGiven}</p>
        </div>
        <div id={styles.OutOfGivenContainer}>
          <input
            type="text"
            placeholder="Re-type if failed,press <TAB> or <ESC> or <Enter> to reset"
            className={styles.ValueWritten}
            onKeyDown={handleKeyPressed}
            id="userInput"
          />
        </div>
        <div id={styles.TaskOutputStatus}>
          <p className={styles.Status}>WPM : {outPutWpmValue}</p>
          <p className={styles.Status}>Accuracy : {UserAccuracyOutput}%</p>
        </div>
      </div>
    </div>
  );
}

```

***

## CustomUseCase.module.css
CustomUseCase.module.css This the external css file where I have written the css for this CustomUseCase.js Component

```css
#MainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


/* CSS FOR NAVABR MAINCONTAINER */

#NavbarMainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}


#NavabarContainer {
    color: white;
    display: flex;
    width: 100%;
}

/* css for timer container  */
#TimerContainer {
    width: 100%;
    display: flex;
    justify-content: flex-start;

}

#Timer {
    margin: 1%;
    padding: 1%;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1rem;
}


/* css for sound container  */

#SoundContainer {
    display: flex;
    width: 100%;
    justify-content: flex-end;
}


#SoundButtonContainer {
    margin: 1%;
    padding: 1%;
}

#SoundButton {
    font-size: 1.1rem;
    font-family: 'Open Sans', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 8px;
    padding: 8px;
    width: 100px;
    border: none;
    outline: none;
    transition: all 0.2s ease-in-out;
    background: none;
    color: #a8afbd;
}

#SoundButton:hover {
    background-color: #424957;
    color: white;
}


#OptionsContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 1%;
    padding: 1%;
    width: 25%;
}

.options {
    margin: 1%;
    padding: 1%;
    font-size: 1.1rem;
    font-family: 'Open Sans', sans-serif;
}

.options input {
    cursor: pointer;
}


/* css for horizontal row  */

#HorizontalRow {
    width: 98%;
    border: 1px solid white;
}



/* CSS FOR CUSTOMER USE CASE CONTAINER  */

#CustomerUseCaseContainer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 1%;
}

/* css for source container  */
#SourceContainer {
    width: 15%;
    margin-left: 10%;
    height: 250px;
}

/* css for Scope Container */
#ScopeContainer {
    width: 15%;
    height: 250px;
}

/* css for Generator Container */
#GeneratorContainer {
    width: 20%;
    height: 250px;
}

/* css for Threshold Container */
#ThresholdContainer {
    width: 20%;
    height: 250px;
}


/* common css for all the container  */
.HeadingContainer {
    color: white;
}

.Heading {
    font-size: 1.4rem;
    font-family: 'Roboto', sans-serif;
    padding: 3px;
    margin: 3px;

}

.InnerOptionContainer {
    color: white;
    font-family: 'Open Sans', sans-serif;
    margin: 1%;
    padding: 1%;

}

.InnerOptionContainer input {
    cursor: pointer;
}

.InputTypeNumber {
    width: 30%;
    border: none;
    outline: none;
    padding: 2%;
    border-radius: 4px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
}

/* CSS FOR LESSONS CONTAINER  */
#LessonContainer {
    color: white;
    font-size: 1.14rem;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    margin: 2%;
    width: 100%;

}


/* CSS FOR TASK CONTAINER  */

#TaskMainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}


#TaskGivenContainer {
    color: white;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    text-align: center;
    width: 65%;
    background-color: #222;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

#InstructionPara {
    width: 30%;
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 2%;
    border: none;
    outline: none;
    color: rgb(134, 133, 133);
    font-family: 'Open Sans', sans-serif;
    word-spacing: 0.1rem;
}

#TaskGiven {
    width: 100%;
}

#OutOfGivenContainer {
    color: #222;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}


.ValueWritten {
    color: #222;
    width: 62%;
    font-size: 1.6rem;
    text-align: center;
    padding: 1.5%;
    margin: 2%;
    border: none;
    outline: none;
    border-radius: 4px;
}


/* CSS FOR TASK OUTPUT STATUS  */

#TaskOutputStatus {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.Status {
    color: #888;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    margin: 2%;
    padding: 1%;
}

```
