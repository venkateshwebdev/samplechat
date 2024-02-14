const OPENAI_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;

export const createThread = async () => {
  const url = "https://api.openai.com/v1/threads";

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_AI_KEY}`,
      "OpenAI-Beta": "assistants=v1",
    },
    body: JSON.stringify({}),
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error("Failed to create thread. Status: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating thread:", error.message);
    throw error;
  }
};

export const sendMessageToThread = async (threadId, messageData) => {
  const url = `https://api.openai.com/v1/threads/${threadId}/messages`;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_AI_KEY}`,
      "OpenAI-Beta": "assistants=v1",
    },
    body: JSON.stringify(messageData),
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error("Failed to send message. Status: " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error sending message:", error.message);
    throw error;
  }
};

export const startAssistantRun = async (threadId) => {
  const url = `https://api.openai.com/v1/threads/${threadId}/runs`;

  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${OPENAI_AI_KEY}`,
      "Content-Type": "application/json",
      "OpenAI-Beta": "assistants=v1",
    },
    body: JSON.stringify({
      assistant_id: process.env.REACT_APP_ASSITANT_ID,
    }),
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error(
        "Failed to start assistant run. Status: " + response.status
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error starting assistant run:", error.message);
    throw error;
  }
};

export const getAssistantRunStatus = async (threadId, runId) => {
  const url = `https://api.openai.com/v1/threads/${threadId}/runs/${runId}`;

  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${OPENAI_AI_KEY}`,
      "OpenAI-Beta": "assistants=v1",
    },
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error(
        "Failed to get assistant run. Status: " + response.status
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error getting assistant run:", error.message);
    throw error;
  }
};

export const fetchThreadMessages = async (threadId) => {
  const url = `https://api.openai.com/v1/threads/${threadId}/messages`;

  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_AI_KEY}`,
      "OpenAI-Beta": "assistants=v1",
    },
  };

  try {
    const response = await fetch(url, requestOptions);
    if (!response.ok) {
      throw new Error(
        "Failed to fetch thread messages. Status: " + response.status
      );
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching thread messages:", error.message);
    throw error;
  }
};
