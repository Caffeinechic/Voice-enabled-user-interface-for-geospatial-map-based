function startVoiceRecognition() {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript;
      console.log('Voice Command:', command);
      handleVoiceCommand(command);
    };
    recognition.start();
  }