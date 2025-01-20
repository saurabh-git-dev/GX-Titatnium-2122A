const observeFrameset = () => {
  const frames = document.getElementsByTagName("frame");

  for (let frame of frames) {
    if (frame.name !== "contentfrm") {
      continue;
    }
    frame.addEventListener("load", () => {
      try {
        const frameWindow = frame.contentWindow;
        const frameDocument = frame.contentDocument;

        if (frameWindow) {
          var inputs = frameDocument.getElementsByTagName("input");
          var selects = frameDocument.getElementsByTagName("select");
          var buttons = frameDocument.getElementsByTagName("button");

          const elements = [...inputs, ...selects, ...buttons];
          for (var i = 0; i < elements.length; i++) {
            try {
              elements[i].disabled = false;
            } catch (error) {
              console.error("Error enabling element:", error);
            }
          }
        }
      } catch (error) {
        console.error(
          "Error accessing or overriding functions in frame:",
          error
        );
      }
    });
  }
};

observeFrameset();

