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

Here in the above code snipet at first I have created the 2 variable ( i.e displayvalue and buttonstatus)
