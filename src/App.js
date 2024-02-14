import "./App.css";

import { useEffect, useRef, useState } from "react";
import {
  createThread,
  fetchThreadMessages,
  getAssistantRunStatus,
  sendMessageToThread,
  startAssistantRun,
} from "./utils";

const MAX_POLL_COUNT = 5;

function App() {
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const containerRef = useRef(null);

  async function generateThread() {
    let threadId = localStorage.getItem("threadId");
    if (!threadId) {
      const data = await createThread();
      console.log("Generate Thread", data);
      threadId = data.id;
      // save to LS
      if (threadId) localStorage.setItem("threadId", threadId);
    }
    return threadId;
  }
  async function addMessageToThread(threadId, inputValue) {
    await sendMessageToThread(threadId, {
      role: "user",
      content: inputValue,
    });
  }
  async function runThread(threadId) {
    const data = await startAssistantRun(threadId);
    console.log("runThread data ", data);
    return data.id;
  }
  async function checkRunStatus(threadId, runId) {
    const data = await getAssistantRunStatus(threadId, runId);
    console.log("run status", data);
    return data.status;
  }
  async function loadAllMessages(threadId) {
    const data = await fetchThreadMessages(threadId);
    console.log("message data ", data);
    const messages = data.data.map((obj) => ({
      role: obj.role,
      text: obj.content[0].text.value.trim(),
      created_at: obj.created_at,
    }));
    console.log("messages", messages);
    return messages;
  }

  // should be maximum of 3 calls.
  async function pollRequest(threadId, runId, pollCount) {
    pollCount += 1;
    const status = await checkRunStatus(threadId, runId);
    console.log("status", status, pollCount);
    if (status === "completed") {
      console.log("Request is complete.");
      // Perform further actions based on the completion
    } else if (pollCount < MAX_POLL_COUNT) {
      console.log("Polling...");
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait for 2 seconds
      await pollRequest(threadId, runId, pollCount); // Poll again recursively
    } else if (pollCount >= MAX_POLL_COUNT) {
      throw new Error("Poll count limit exceeded");
    }
  }

  function scrollToBottom() {
    if (containerRef.current)
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    const inputValue = e.target.elements.question.value;
    console.log("Input Value:", inputValue);

    // step 0: Push question to message array. and start loading indicator
    setMessages((prev) => [
      ...prev,
      { role: "user", text: inputValue, created_at: Date.now() },
    ]);
    // Auto-scroll to container bottom smoothly.
    scrollToBottom();
    setLoading(true);
    setError(undefined);

    try {
      // step 1: Generate threadID if not in LS.
      let threadId = await generateThread();

      // step 2: Add this question to messages endpoint
      await addMessageToThread(threadId, inputValue);

      // step 3: Run the thread.
      const runId = await runThread(threadId);

      // step 4: Poll continuously
      await pollRequest(threadId, runId, 0);

      // step 5: Load all messages from /message
      const allMessages = await loadAllMessages(threadId);
      setMessages(allMessages);
      // Auto-scroll to container bottom smoothly.
      scrollToBottom();
    } catch (error) {
      setError(error.message ?? "Something went wrong");
    }

    setLoading(false);
  }

  // on initial mount check for threadID in LS and load all messages.
  useEffect(() => {
    async function getInitialMessageData() {
      setLoading(true);
      try {
        const threadId = await generateThread();
        const allMessages = await loadAllMessages(threadId);
        setMessages(allMessages);
      } catch (error) {
        setError(error.message ?? "Something went wrong");
      }
      setLoading(false);
    }
    getInitialMessageData();
  }, []);

  return (
    <div className="App bg-black h-[100vh] text-white">
      <div ref={containerRef} className="bg-gray-700 h-[50vh] overflow-scroll">
        <div className="flex flex-col items-start">
          {messages
            .sort((a, b) => a.created_at - b.created_at)
            .map((message, index) => {
              return (
                <div
                  className={`border-2 rounded-md px-4 ${
                    message.role === "user" ? "bg-black" : ""
                  }`}
                  key={index}
                >
                  {message.text}
                </div>
              );
            })}
        </div>
        {loading && <div className="animate-pulse font-bold">Loading..</div>}
        {error && <div className="text-red-500">{error}</div>}
      </div>
      <form onSubmit={onSubmitHandler} className=" text-black space-x-2">
        <input
          placeholder="enter msg"
          value={value}
          name="question"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className="border text-white px-4" type="submit">
          ASK
        </button>
      </form>
    </div>
  );
}

export default App;
