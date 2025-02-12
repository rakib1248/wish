export const speakText = (text) => {
  const speech = new SpeechSynthesisUtterance(text); // Create utterance from text
  speech.lang = "bn-BD"; // ভাষা সেট করুন
  speech.rate = 0.8; // গতি (0.1 থেকে 10 পর্যন্ত)
  speech.pitch = 1.5; // উচ্চতা (0 থেকে 2 পর্যন্ত)
  speech.volume = 1; // ভলিউম (0 থেকে 1 পর্যন্ত)

  // Wait for voices to be loaded
  window.speechSynthesis.onvoiceschanged = () => {
    const voices = window.speechSynthesis.getVoices();

    // Optional: Select a specific voice
    speech.voice = voices.find((voice) => voice.lang === "bn-BD"); // বাংলা ভাষার জন্য ভয়েস নির্বাচন

    window.speechSynthesis.speak(speech); // Speak the text
  };

  // If voices are already loaded
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    speech.voice = voices.find((voice) => voice.lang === "bn-BD"); // বাংলা ভাষার জন্য ভয়েস নির্বাচন
    window.speechSynthesis.speak(speech); // Speak the text
  }
};
