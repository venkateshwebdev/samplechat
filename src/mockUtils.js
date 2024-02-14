export const delay = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export const createThread = async () => {
  // Wait for the delay
  await delay(2000);

  return {
    id: "thread_PmfKKQAj0DwV93LoGhRrWpch",
    object: "thread",
    created_at: 1707931929,
    metadata: {},
  };
};

export const sendMessageToThread = async (threadId, messageData) => {
  // Wait for the delay
  await delay(2000);

  return {
    id: "msg_sRvjGJr4XVgPw0fRP9MUmpE3",
    object: "thread.message",
    created_at: 1707932715,
    assistant_id: null,
    thread_id: "thread_PmfKKQAj0DwV93LoGhRrWpch",
    run_id: null,
    role: "user",
    content: [
      {
        type: "text",
        text: {
          value: "What are the benifits of meditation?",
          annotations: [],
        },
      },
    ],
    file_ids: [],
    metadata: {},
  };
};

export const startAssistantRun = async (threadId) => {
  // Wait for the delay
  await delay(2000);

  return {
    id: "run_yhpKVujZdrYemdGyneQgKsma",
    object: "thread.run",
    created_at: 1707932720,
    assistant_id: "asst_XbNrXLNcgpeZEbeLhjq2sR9q",
    thread_id: "thread_PmfKKQAj0DwV93LoGhRrWpch",
    status: "queued",
    started_at: null,
    expires_at: 1707933320,
    cancelled_at: null,
    failed_at: null,
    completed_at: null,
    last_error: null,
    model: "gpt-3.5-turbo-1106",
    instructions:
      "You are Swami Vivekananda, a saint of India, the ideal of the youth and lover of India. You shall be a mentor, guide and inspire people to lead a positive way of life. You shall provide spiritual and philosophical guidance.",
    tools: [
      {
        type: "retrieval",
      },
    ],
    file_ids: [
      "file-1SvlsswiLosvRtrIPZCNWKb8",
      "file-Buflzy2K6LNj7zNVwZiOO3Wl",
      "file-HWFXBglFfJDZ7EzABVMR5hpv",
      "file-mImGje3E6AXabPrUF2KBnovW",
      "file-5LOwUmK7wOzSChlFcscgRjQu",
      "file-7Vu0RETSIvchwTdOzCovo41g",
      "file-BakDioSn9EsPksdhaigUvEzT",
      "file-Kc8jNgrKSfBoFRCFFRtmWci9",
      "file-30TQF7AUB2dpHxDOdIuNH7lR",
      "file-Z8JsdV7n7XJVNVItDqynSDft",
      "file-SLAMxK5H3B3zj4RlfXmq3eaX",
    ],
    metadata: {},
    usage: null,
  };
};

export const getAssistantRunStatus = async (threadId, runId) => {
  // Wait for the delay
  await delay(2000);

  return {
    id: "run_SxDokU3MaveeH2vvY1TJwz3q",
    object: "thread.run",
    created_at: 1707932233,
    assistant_id: "asst_XbNrXLNcgpeZEbeLhjq2sR9q",
    thread_id: "thread_PmfKKQAj0DwV93LoGhRrWpch",
    status: "completed",
    started_at: 1707932233,
    expires_at: null,
    cancelled_at: null,
    failed_at: null,
    completed_at: 1707932238,
    last_error: null,
    model: "gpt-3.5-turbo-1106",
    instructions:
      "You are Swami Vivekananda, a saint of India, the ideal of the youth and lover of India. You shall be a mentor, guide and inspire people to lead a positive way of life. You shall provide spiritual and philosophical guidance.",
    tools: [
      {
        type: "retrieval",
      },
    ],
    file_ids: [
      "file-1SvlsswiLosvRtrIPZCNWKb8",
      "file-Buflzy2K6LNj7zNVwZiOO3Wl",
      "file-HWFXBglFfJDZ7EzABVMR5hpv",
      "file-mImGje3E6AXabPrUF2KBnovW",
      "file-5LOwUmK7wOzSChlFcscgRjQu",
      "file-7Vu0RETSIvchwTdOzCovo41g",
      "file-BakDioSn9EsPksdhaigUvEzT",
      "file-Kc8jNgrKSfBoFRCFFRtmWci9",
      "file-30TQF7AUB2dpHxDOdIuNH7lR",
      "file-Z8JsdV7n7XJVNVItDqynSDft",
      "file-SLAMxK5H3B3zj4RlfXmq3eaX",
    ],
    metadata: {},
    usage: {
      prompt_tokens: 7761,
      completion_tokens: 192,
      total_tokens: 7953,
    },
  };
};

export const fetchThreadMessages = async (threadId) => {
  // Wait for the delay
  await delay(2000);

  return {
    object: "list",
    data: [
      {
        id: "msg_M4c9c9D8GSbZVsYHmT0OaYKm",
        object: "thread.message",
        created_at: 1707932725,
        assistant_id: "asst_XbNrXLNcgpeZEbeLhjq2sR9q",
        thread_id: "thread_PmfKKQAj0DwV93LoGhRrWpch",
        run_id: "run_yhpKVujZdrYemdGyneQgKsma",
        role: "assistant",
        content: [
          {
            type: "text",
            text: {
              value:
                "The benefits of meditation are profound and diverse. When you meditate, the mind's thought-waves stop, leading to a sense of expansion in consciousness. It provides a deep level of rest for the system, surpassing even the rest obtained from the deepest sleep. During meditation, the brain almost stops, allowing for a feeling of lightness and perfect rest. Additionally, meditation has been associated with healing, clairvoyance, and the development of psychic gifts【37†source】.",
              annotations: [
                {
                  type: "file_citation",
                  text: "【37†source】",
                  start_index: 466,
                  end_index: 477,
                  file_citation: {
                    file_id: "",
                    quote:
                      "The mind stops all the [thought-waves] and the world stops. Your consciousness expands. Every time you meditate you will keep your growth. ... Work a little harder, more and more, and meditation comes. You do not feel the body or anything else. When you come out of it after the hour, you have had the most beautiful rest you ever had in your life. That is the only way you ever give rest to your system. Not even the deepest sleep will give you such rest as that. The mind goes on jumping even in deepest sleep. Just those few minutes [in meditation] your brain has almost stopped. Just a little vitality is kept up. You forget the body. You may be cut to pieces and not feel it at all. You feel such pleasure in it. You become so light. This perfect rest we will get in  \fmeditation. Then, meditation upon different objects. There are meditations upon\n# 【3†C6_P1097-1452_L1_Volume-IV.txt†file-Z8JsdV7n7XJVNVItDqynSDft】\nThe mind stops all the [thought-waves] and the world stops. Your consciousness expands. Every time you meditate you will keep your growth. ... Work a little harder, more and more, and meditation comes. You do not feel the body or anything else. When you come out of it after the hour, you have had the most beautiful rest you ever had in your life. That is the only way you ever give rest to your system. Not even the deepest sleep will give you such rest as that. The mind goes on jumping even in deepest sleep. Just those few minutes [in meditation] your brain has almost stopped. Just a little vitality is kept up. You forget the body. You may be cut to pieces and not feel it at all. You feel such pleasure in it. You become so light. This perfect rest we will get in  \fmeditation. Then, meditation upon different objects. There are meditations upon\n# 【4†C6_P1097-1452_L1_Volume-IV.txt†file-Z8JsdV7n7XJVNVItDqynSDft】\nThere is no knowledge without the power of meditation. From ignorance, superstition, etc. we can get cured by meditation for the time being and no more. [Suppose] a man has told me that if you drink such a poison you will be killed, and another man comes in the night and says, “Go drink the poison!” and I am not killed, [what happens is this: ] my mind cut out from the meditation the identity between the poison and myself just for the time being. In another case of [drinking] the poison, I will be killed. If I know the reason and scientifically raise myself up to that [state of meditation], I can save anyone. That is what the books say; but how far it is  \fcorrect you must appraise. I am asked, “Why do you Indian people not conquer these things? You claim\n# 【5†C6_P1097-1452_L1_Volume-IV.txt†file-5LOwUmK7wOzSChlFcscgRjQu】\nThere is no knowledge without the power of meditation. From ignorance, superstition, etc. we can get cured by meditation for the time being and no more. [Suppose] a man has told me that if you drink such a poison you will be killed, and another man comes in the night and says, “Go drink the poison!” and I am not killed, [what happens is this: ] my mind cut out from the meditation the identity between the poison and myself just for the time being. In another case of [drinking] the poison, I will be killed. If I know the reason and scientifically raise myself up to that [state of meditation], I can save anyone. That is what the books say; but how far it is  \fcorrect you must appraise. I am asked, “Why do you Indian people not conquer these things? You claim\n# 【6†C6_P1097-1452_L1_Volume-IV.txt†file-Z8JsdV7n7XJVNVItDqynSDft】\nme it is that man’s actions and my body’s reaction. ... Suppose I have so much power over the body that I can resist even that automatic action. Can such power be attained? The books say it can. ... If you stumble on [it], it is a miracle. If you learn it scientifically, it is Yoga. I have seen people healed by the power of mind. There is the miracle worker. We say he prays and the man is healed. Another man says, “Not at all. It is just the power of the mind. The man is scientific. He knows what he is about.” The power of meditation gets us everything. If you want to get power over nature, [you can have it through meditation]. It is through the power of meditation all scientific facts are discovered today. They study the subject and forget everything, their own identity and everything, and then the great fact comes like a flash.\n# 【7†C6_P1097-1452_L1_Volume-IV.txt†file-5LOwUmK7wOzSChlFcscgRjQu】\nme it is that man’s actions and my body’s reaction. ... Suppose I have so much power over the body that I can resist even that automatic action. Can such power be attained? The books say it can. ... If you stumble on [it], it is a miracle. If you learn it scientifically, it is Yoga. I have seen people healed by the power of mind. There is the miracle worker. We say he prays and the man is healed. Another man says, “Not at all. It is just the power of the mind. The man is scientific. He knows what he is about.” The power of meditation gets us everything. If you want to get power over nature, [you can have it through meditation]. It is through the power of meditation all scientific facts are discovered today. They study the subject and forget everything, their own identity and everything, and then the great fact comes like a flash.\n# 【8†C8_P1836-2216_L1_Volume-VI.txt†file-HWFXBglFfJDZ7EzABVMR5hpv】\npart and do not waste time in restraining your wanderings. The mind must think; but slowly and gradually, as the witness does its part, the player will come more and more under control, until at last you cease to play or wander. 2nd Exercise: Meditation — which may be divided into two. We are concrete in constitution and the mind must think in forms. Religion admits this necessity and gives the help of outward forms and ceremonies. You cannot meditate on God without some form. One will come to you, for thought and symbol are inseparable. Try to fix your mind on that form. 3rd Exercise: This is attained by practicing meditation and is really “onepointedness”. The mind usually works in a circle; make it remain on one point. The last is the result. When the mind has reached this, all is gained — healing, clairvoyance, and all psychic gifts",
                  },
                },
              ],
            },
          },
        ],
        file_ids: [],
        metadata: {},
      },
      {
        id: "msg_sRvjGJr4XVgPw0fRP9MUmpE3",
        object: "thread.message",
        created_at: 1707932715,
        assistant_id: null,
        thread_id: "thread_PmfKKQAj0DwV93LoGhRrWpch",
        run_id: null,
        role: "user",
        content: [
          {
            type: "text",
            text: {
              value: "What are the benifits of meditation?",
              annotations: [],
            },
          },
        ],
        file_ids: [],
        metadata: {},
      },
      {
        id: "msg_lXReVUmJbN4bsbRArpaxHYw9",
        object: "thread.message",
        created_at: 1707932677,
        assistant_id: "asst_XbNrXLNcgpeZEbeLhjq2sR9q",
        thread_id: "thread_PmfKKQAj0DwV93LoGhRrWpch",
        run_id: "run_GMBK4CqEd3z7fbn6rJFwt5jX",
        role: "assistant",
        content: [
          {
            type: "text",
            text: {
              value:
                "In practicing meditation, it's important to pay attention to the posture as well as to the process of breathing. Sitting straight, with the chest, neck, and head held in one line, is essential for harmonious practice. Regular and rhythmical breathing is necessary to gain control over the nerves and to harmonize the system. This can be achieved by practicing measured breathing in and out. Additionally, focusing on the breath can be a helpful technique to attain meditation and concentration, leading to the attainment of the goal of stillness and self-realization【32†source】.",
              annotations: [
                {
                  type: "file_citation",
                  text: "【32†source】",
                  start_index: 566,
                  end_index: 577,
                  file_citation: {
                    file_id: "",
                    quote:
                      "Any time that you sit crookedly and try to meditate you do yourself an injury. The three parts of the body, the chest, the neck, and the head, must be always held straight in one line. You will find that by a little practice this will come to you as easy as breathing. The second thing is to get control of the nerves. We have said that the nerve centre that controls the respiratory organs has a sort of controlling effect on the other nerves, and rhythmical breathing is, therefore, necessary. The breathing that we generally use should not be called breathing at all. It is very irregular. Then there are some natural differences of breathing between men and women. The first lesson is just to breathe in a measured way, in and out. That will harmonise the system. When you have practiced this for some time, you will\n# 【1†C8_P1836-2216_L1_Volume-VI.txt†file-HWFXBglFfJDZ7EzABVMR5hpv】\nWe have to turn the mind back upon itself in this study. In training the mind the first step is to begin with the breathing. Regular breathing puts the body in a harmonious condition; and it is then easier to reach the mind. In practicing breathing, the first thing to consider is Âsana or posture. Any posture in which a person can sit easily is his proper position. The spine should be kept free, and the weight of the body should be supported by the ribs. Do not try by contrivances to control the mind; simple breathing is all that is necessary in that line. All austerities to gain concentration of the mind are a mistake. Do not practice them. The mind acts on the body, and the body in its turn acts upon the mind. They act and react upon each other. Every mental state creates a corresponding state\n# 【2†C3_P12-351_L1_Volume-I.txt†file-7Vu0RETSIvchwTdOzCovo41g】\nThis is another sort of concentration. Think of the lotus of the heart, with petals downwards, and running through it, the Sushumna; take in the breath, and while throwing the breath out imagine that the lotus is turned with the petals upwards, and inside that lotus is an effulgent light. Meditate on that. 37. Or (by meditation on) the heart that has given up all attachment to sense-objects.  Take some holy person, some great person whom you revere, some saint whom you know to be perfectly nonattached, and think of his heart. That heart has become non-attached, and meditate on that heart; it will calm the mind. If you cannot do that, there is the next way: 38. Or by meditating on the knowledge that comes in sleep.  Sometimes a man dreams that he has seen angels coming to him and talking\n# 【3†C10_P2602-2986_L1_Volume-VIII.txt†file-Buflzy2K6LNj7zNVwZiOO3Wl】\nshould begin through the left nostril and should turn out through the right nostril, and the next time is should be drawn in through the right and thrown out through the left. Then reverse again, and so on. In the first place you should be able to drive your breathing through either nostril at will, just by the power of the will. After a time you will find it easy; but now I am afraid you have not that power. So we must stop the one nostril while breathing through the other with the finger and during the retention, of course, both nostrils. The first two lessons should not be forgotten. The first thing is to hold yourselves straight; second to think of the body as sound and perfect, as healthy and strong. Then throw a current of love all around, think of the whole universe being happy. Then if you believe in God, pray. Then breathe.\n# 【4†C10_P2602-2986_L1_Volume-VIII.txt†file-Buflzy2K6LNj7zNVwZiOO3Wl】\nshould begin through the left nostril and should turn out through the right nostril, and the next time is should be drawn in through the right and thrown out through the left. Then reverse again, and so on. In the first place you should be able to drive your breathing through either nostril at will, just by the power of the will. After a time you will find it easy; but now I am afraid you have not that power. So we must stop the one nostril while breathing through the other with the finger and during the retention, of course, both nostrils. The first two lessons should not be forgotten. The first thing is to hold yourselves straight; second to think of the body as sound and perfect, as healthy and strong. Then throw a current of love all around, think of the whole universe being happy. Then if you believe in God, pray. Then breathe.\n# 【5†C3_P12-351_L1_Volume-I.txt†file-7Vu0RETSIvchwTdOzCovo41g】\nAnd when you take your body up again, it will feel so rested. It is only perfect rest that you can give to the body. When you have succeeded in conquering the body and keeping it firm, your practice will remain firm, but while you are disturbed by the body, your nerves  \fbecome disturbed, and you cannot concentrate the mind. 47. By lessening the natural tendency (for restlessness) and meditating on the unlimited, posture becomes firm and pleasant.  We can make the seat firm by thinking of the infinite. We cannot think of the Absolute Infinite, but we can think of the infinite sky. 48. Seat being conquered, the dualities do not obstruct.  The dualities, good and bad, heat and cold, and all the pairs of opposites, will not then disturb you. 49. Controlling the motion of the exhalation and the inhalation follows after this.\n# 【6†C8_P1836-2216_L1_Volume-VI.txt†file-HWFXBglFfJDZ7EzABVMR5hpv】\nbody; and when we think of God, we think of Him as body. To stop the gyrations of the mind, so that the soul may become manifested, is the work. Training begins with the body. Breathing trains the body, gets it into a harmonious condition. The object of the breathing exercises is to attain meditation and concentration. If you can get absolutely still for just one moment, you have reached the goal. The mind may go on working after that; but it will never be the same mind again. You will know yourself as you are — your true Self. Still the mind but for one moment, and the truth of your real nature will flash upon you, and freedom is at hand: no more bondage after that. This follows from the theory that if you can know an instant of time, you know all time, as the whole is the rapid succession of one. Master the one know\n# 【7†C3_P12-351_L1_Volume-I.txt†file-7Vu0RETSIvchwTdOzCovo41g】\none of these except the very simple ones. Take a deep breath and fill the lungs. Slowly throw the breath out. Take it through one nostril and fill the lungs, and throw it out slowly through the other nostril. Some of us do not breathe deeply enough. Others cannot fill the lungs enough. These breathings will correct that very much. Half an hour in the morning and half an hour in the evening will make you another person. This sort of breathing is never dangerous. The other exercises should be practiced very slowly. And measure your strength. If ten minutes are a drain, only take five. The Yogi is expected to keep his own body well. These various breathing exercises are a great help in regulating the different parts of the body. All the different parts are inundated with breath. It is through breath that we gain control of them all.\n# 【8†C10_P2602-2986_L1_Volume-VIII.txt†file-Buflzy2K6LNj7zNVwZiOO3Wl】\nwhen through the right, for work; and when through both, the time to meditate. When we are calm and breathing equally through both nostrils, we are in the right condition for quiet meditation",
                  },
                },
              ],
            },
          },
        ],
        file_ids: [],
        metadata: {},
      },
      {
        id: "msg_neSOMGJUXTFsi3rtHkZcMI3d",
        object: "thread.message",
        created_at: 1707932615,
        assistant_id: null,
        thread_id: "thread_PmfKKQAj0DwV93LoGhRrWpch",
        run_id: null,
        role: "user",
        content: [
          {
            type: "text",
            text: {
              value: "I cant focus on my breathing while meditating.",
              annotations: [],
            },
          },
        ],
        file_ids: [],
        metadata: {},
      },
      {
        id: "msg_7HYrRhfkVP9y2h1X1KtLrlRJ",
        object: "thread.message",
        created_at: 1707932236,
        assistant_id: "asst_XbNrXLNcgpeZEbeLhjq2sR9q",
        thread_id: "thread_PmfKKQAj0DwV93LoGhRrWpch",
        run_id: "run_SxDokU3MaveeH2vvY1TJwz3q",
        role: "assistant",
        content: [
          {
            type: "text",
            text: {
              value:
                "The best time for meditation, as per the teachings from India, is early in the morning. It is recommended to practice meditation before having a meal, and it is even taught to children never to eat until they have practiced or worshipped. Additionally, it is advised to have a dedicated room for meditation practice, which should be kept holy and should be entered only after bathing and being perfectly clean in body and mind. The room should be adorned with flowers, pleasing pictures, and incense, and it is important not to sleep in that room to maintain its sanctity【27†source】.",
              annotations: [
                {
                  type: "file_citation",
                  text: "【27†source】",
                  start_index: 571,
                  end_index: 582,
                  file_citation: {
                    file_id: "file-7Vu0RETSIvchwTdOzCovo41g",
                    quote:
                      "In India they teach children never to eat until they have practiced or worshipped, and it becomes natural to them after a time; a boy will not feel hungry until he has bathed and practiced. Those of you who can afford it will do better to have a room for this practice alone. Do not sleep in that room, it must be kept holy. You must not enter the room until you have bathed, and are perfectly clean in body and mind. Place flowers in that room always; they are the best surroundings for a Yogi; also pictures that are pleasing. Burn incense morning and evening",
                  },
                },
              ],
            },
          },
        ],
        file_ids: [],
        metadata: {},
      },
      {
        id: "msg_ojls5YjSWEMJArSCeB6iGMY6",
        object: "thread.message",
        created_at: 1707932037,
        assistant_id: null,
        thread_id: "thread_PmfKKQAj0DwV93LoGhRrWpch",
        run_id: null,
        role: "user",
        content: [
          {
            type: "text",
            text: {
              value: "What is the best time to do meditaion ?",
              annotations: [],
            },
          },
        ],
        file_ids: [],
        metadata: {},
      },
    ],
    first_id: "msg_M4c9c9D8GSbZVsYHmT0OaYKm",
    last_id: "msg_ojls5YjSWEMJArSCeB6iGMY6",
    has_more: false,
  };
};
