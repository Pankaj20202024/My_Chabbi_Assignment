import React, { useCallback, useEffect, useState } from "react";
import styles from "./CustomUseCase.module.css";

export default function CustomUseCase() {
  const [correct, setCorrect] = useState(true);
  const [incorrect, setIncorrect] = useState(true);
  const [passed, setPassed] = useState(true);
  const [failed, setFailed] = useState(true);

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

  //  login for hiding and showing the content on click of the button

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

  const [SourceOptionValue, setSourceOptionValue] = useState("Bigrams");
  const [ScopeOptionValue, setScopeOptionValue] = useState("Top 50");
  const [CombinationValue, setCombinationValue] = useState(2);
  const [RepetitionValue, setRepetitionValue] = useState(2);
  const [CoustomValue, setCoustomValue] = useState("");

  const [WPMValue, setWpmValue] = useState(50);
  const [outPutWpmValue, setOutPutWpmValue] = useState(0);

  const [AccuracyValue, setAccuracyValue] = useState(100);

  const [TaskGiven, setTaskGiven] = useState("");

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

  const [word, setWord] = useState("");
  const [count, setCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  // taking variable for hours , minute, seconds

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [istimerStarted, setIsTimerStarted] = useState(false);
  const [Second, setSeconds] = useState(0);

  const [TotalTimeTaken, setTotalTimeTaken] = useState(0);

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

  const [TotalCharacterEntered, setTotalCharacterEntered] = useState(0);
  const [TotalCorrectCharacterEntered, setTotalCorrectCharacterEntered] =
    useState(0);

  const [UserAccuracyOutput, setUserAccuracyOutput] = useState(0);

  const PassedOrNot = () => {
    if (
      Number(UserAccuracyOutput) >= Number(AccuracyValue) &&
      Number(outPutWpmValue) >= Number(WPMValue)
    ) {
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
      generateText(
        SourceOptionValue,
        CombinationValue,
        RepetitionValue,
        CoustomValue
      );

      setIsTimerStarted(false);
      setCount(0);
      setIncorrectCount(0);
      setTotalTimeTaken(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      let removeEnteredValue = document.getElementById("userInput");
      removeEnteredValue.value = "";
    } else {
      if (failed) {
        const FailedSound = new Audio("/sound/Failed.mp3");
        FailedSound.play();
      }
      setIsTimerStarted(false);
      setTotalCharacterEntered(0);
      setTotalCorrectCharacterEntered(0);
      setCount(0);
      setIncorrectCount(0);
      setTotalTimeTaken(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      let removeEnteredValue = document.getElementById("userInput");
      removeEnteredValue.value = "";
    }
  };

  const handleKeyPressed = (event) => {
    if (!istimerStarted) {
      setIsTimerStarted(true);
    }
    const UserAccuracy =
      (TotalCorrectCharacterEntered / TotalCharacterEntered) * 100;
    setUserAccuracyOutput(UserAccuracy.toFixed(0));
    const KeyPressed = event.key;

    if (KeyPressed === word[count]) {
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
    } else if (
      KeyPressed === "Tab" ||
      KeyPressed === "Escape" ||
      KeyPressed === "Enter"
    ) {
      setCount(0);
      let removeEnteredValue = document.getElementById("userInput");
      removeEnteredValue.value = "";
      setTotalCharacterEntered(TotalCharacterEntered + 1);
    } else {
      if (KeyPressed === "Backspace") {
        if (count > 0) {
          setCount(count - 1);
        }
        if (incorrectCount > 0) {
          setIncorrectCount(incorrectCount - 1);
        }
        setTotalCharacterEntered(TotalCharacterEntered + 1);
      } else {
        if (incorrect) {
          const WrongWordTypedSound = new Audio("/sound/Incorrect.wav");
          WrongWordTypedSound.play();
        }
        setCount(count + 1);
        setIncorrectCount(incorrectCount + 1);
        setTotalCharacterEntered(TotalCharacterEntered + 1);
      }
    }
  };

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
