---
slug: /ai/llm/fundamentals/voice-models
title: Voice Models
description: Discover top voice models like Whisper for accurate speech-to-text conversion, multilingual recognition, and efficient audio transcription solutions.
created: 2026-06-18
last_update: 2026-06-18
---
## Speech to text Model - Whisper / Voice to Text / Audio to Text

- [openai/whisper-large-v3 · Hugging Face](https://huggingface.co/openai/whisper-large-v3)
- Whisper is a general-purpose speech recognition model. It is trained on a large dataset of diverse audio and is also a multitasking model that can perform multilingual speech recognition, speech translation, and language identification.
- [GitHub - openai/whisper: Robust Speech Recognition via Large-Scale Weak Supervision](https://github.com/openai/whisper) ⭐ 102k
- [GitHub - petewarden/spchcat: Speech recognition tool to convert audio to text transcripts, for Linux and Raspberry Pi.](https://github.com/petewarden/spchcat) ⭐ 485
- [The best dictation and speech-to-text software \| Zapier](https://zapier.com/blog/best-text-dictation-software/)
- [REGAL \| The AI Agent Platform](https://www.regal.ai/)
- [LiveKit](https://livekit.io/)
- [Demo \| GigaML](https://demo.gigaml.com/)
- [Teneo.ai \| Make Your AI Agent the Smartest](https://www.teneo.ai/)
- [Build Chat and Voice AI Agents Without Code \| Voiceflow](https://www.voiceflow.com/)
- [GitHub - TEN-framework/ten-framework: Open-source framework for conversational voice AI agents · GitHub](https://github.com/TEN-framework/ten-framework) ⭐ 11k
	- [TEN Agent](https://agent.theten.ai/)

### Speech to Speech

**Personaplex** is a real-time speech-to-speech conversational model that jointly performs streaming speech understanding and speech generation. The model operates on continuous audio encoded with a neural codec and predicts both text tokens and audio tokens autoregressively to produce its spoken responses. Incoming user audio is incrementally encoded and fed to the model while Personaplex simultaneously generates its own outgoing speech, enabling natural conversational dynamics such as interruptions, barge-ins, overlaps, and rapid turn-taking. Personaplex runs in a dual-stream configuration in which listening and speaking occur concurrently. This design allows the model to update its internal state based on the user’s ongoing speech while still producing fluent output audio, supporting highly interactive conversations. Before the conversation begins, Personaplex is conditioned on two prompts: a voice prompt and a text prompt. The voice prompt consists of a sequence of audio tokens that establish the target vocal characteristics and speaking style. The text prompt specifies persona attributes such as role, background, and scenario context. Together, these prompts define the model's conversational identity and guide its linguistic and acoustic behavior throughout the interaction.

- [GitHub - NVIDIA/personaplex: PersonaPlex code.](https://github.com/NVIDIA/personaplex) ⭐ 10.0k
- [nvidia/personaplex-7b-v1 · Hugging Face](https://huggingface.co/nvidia/personaplex-7b-v1)

## Call Transcribing

"Call transcribing" refers to the process of converting a recorded phone conversation into written text, while "quality assurance" in this context means the practice of reviewing those transcribed calls to ensure accuracy and adherence to quality standards, often used to evaluate customer service interactions and agent performance within a company.

Key points about call transcribing and quality assurance:

### Purpose

Companies often record customer service calls for quality assurance, which involves transcribing the conversation to review details like agent responses, issue resolution, and adherence to company policies.

### Benefits

- **Agent training:** Transcripts can be used to identify areas where agents need improvement in communication skills or product knowledge.
- **Customer experience evaluation:** Analyzing transcripts allows companies to assess customer satisfaction and identify potential issues.
- **Compliance checks:** In industries with strict regulations, call transcripts can be used to verify compliance with legal requirements.

### Quality assurance process

- **Sampling:** A representative sample of calls is selected for transcription.
- **Transcription:** The audio is converted into written text, ensuring accuracy and capturing key details like pauses and tone of voice.
- **Review and evaluation:** Quality assurance specialists review the transcripts against established criteria, assessing aspects like agent greetings, problem-solving techniques, and overall professionalism.

## Metrics

### Real-Time Factor (RTF)

The **real-time factor (RTF)** is the ratio of the processing (or transcription) time to the actual duration of the audio. In other words, it measures how fast a system processes audio relative to real time. An RTF less than 1 means the system is faster than real time.

**Example:**

Suppose an AI tool transcribes a 1‑minute (60‑second) call in 1 second. Here, the RTF is:

`RTF = Processing Time / Audio Duration = 1 sec / 60 sec = 1/60`

This indicates that the system is 60 times faster than real time. If you have a call lasting x minutes and the system transcribes it in x seconds, the RTF remains 1/60, meaning it delivers the transcript at 60× real-time speed.

This fast turnaround is particularly valuable in call quality monitoring, where near real‑time feedback can help promptly address issues or monitor performance.

- **Latency:** Measures the delay between a user speaking a word and the system outputting the text. This is a critical metric for real-time captions and voice assistants.

### Word Error Rate (WER)

Word Error Rate (WER) is the standard metric used to evaluate the accuracy of speech-to-text (Automatic Speech Recognition or ASR) models. It measures how many errors a model makes when transcribing audio compared to an exact human reference

### Information and Meaning Metrics

- **Word Information Lost (WIL):** Measures the proportion of information lost between the reference and the hypothesis text. It offers a more stable reflection of overall transmission quality than WER.
- **Word Information Preserved (WIP):** Calculates the inverse of WIL. It directly scores the percentage of contextual data correctly retained by the model.
- **Semantic Error Rate (Ser):** Evaluates whether errors actually change the meaning of the sentence. For example, it penalizes "not good" vs "good" severely, but ignores "hi" vs "hello".

## Tools

- [Amazon Transcribe](cloud/aws/ai/amazon-transcribe.md)
- [AI for Call Center Quality Assurance \| Voxjar](https://voxjar.com/)
	- [app.voxjar.com/dashboard](https://app.voxjar.com/dashboard)
- [Convin: Omnichannel Contact Centers Powered By Conversation Intelligence](https://convin.ai/)
	- [Kicking Off 2024 on a High: Convin Ranked as G2's #1 Speech Analytics Solution](https://convin.ai/news-collection/g2-rank-speech-analytics-category)
	- [Call Center Monitoring Software | Convin](https://convin.ai/products/call-center-monitoring-software)
- [Quality Assurance Software for Contact and Call Centers](https://thelevel.ai/quality-assurance-contact-center/)
- [Call Quality Monitoring Software with 100% AI \| Chatterscore](https://trellissoft.ai/products/chatterscore/)
- [AI-Powered Quality Management and Performance Monitoring in Call Centers 1](https://callcenterstudio.com/blog/ai-powered-quality-management-and-performance-monitoring-in-call-centers/)
- [10 Best Call Monitoring Software in 2024 - Enthu AI](https://enthu.ai/blog/call-center-quality-monitoring-software/)
- [GitHub - jiaaro/pydub: Manipulate audio with a simple and easy high level interface](https://github.com/jiaaro/pydub) ⭐ 9.8k
- [GitHub - KoljaB/RealtimeSTT: A robust, efficient, low-latency speech-to-text library with advanced voice activity detection, wake word activation and instant transcription. · GitHub](https://github.com/KoljaB/RealtimeSTT) ⭐ 9.9k
- [GitHub - Yuan-ManX/ai-audio-datasets: AI Audio Datasets (AI-ADS) 🎵, including Speech, Music, and Sound Effects, which can provide training data for Generative AI, AIGC, AI model training, intelligent audio tool development, and audio applications. · GitHub](https://github.com/Yuan-ManX/ai-audio-datasets) ⭐ 944

### Faster Whisper

[GitHub - SYSTRAN/faster-whisper: Faster Whisper transcription with CTranslate2 · GitHub](https://github.com/SYSTRAN/faster-whisper) ⭐ 24k

```bash
pip install faster-whisper --break-system-package
```

```python title="whisper.py"
from faster_whisper import WhisperModel

model_size = "large-v3"

# Run on GPU with FP16
# model = WhisperModel(model_size, device="cuda", compute_type="float16")

# or run on GPU with INT8
# model = WhisperModel(model_size, device="cuda", compute_type="int8_float16")
# or run on CPU with INT8
model = WhisperModel(model_size, device="cpu", compute_type="int8")

segments, info = model.transcribe("audio.mp3", beam_size=5)

print("Detected language '%s' with probability %f" % (info.language, info.language_probability))

for segment in segments:
    print("[%.2fs -> %.2fs] %s" % (segment.start, segment.end, segment.text))
```

```bash
python whisper.py
```

Dataset - [Acappella](https://ipcv.github.io/Acappella/acappella/)

- _Acappella_ comprises of around **46 hours** of _a cappella_ solo singing videos sourced from YouTube, sampled across different singers and languages. These YouTube videos were all publicly available at the time of the dataset creation. The idea behind _Acappella_ is to provide a large-scale dataset to train audio-visual models for singing voice separation. Each video recording has been manually selected to exclude parts of the videos that do not satisfy any of the following characteristics: single frontal face view without occlusions, minimal background noise, no beatboxing, no snapping fingers, songs with lyrics (e.g. we avoid humming and yodelling). The dataset comprises of **1493** different video samples in total spanning four language categories: **English**, **Spanish**, **Hindi** and **Others**.

## Text to Voice

- [Voicemaker® - Text to Speech Converter](https://voicemaker.in/)
- [Bring Agents and Creative to Life with our AI Voice Generator](https://elevenlabs.io/)

## Voice ChatBot / Voice AI

- [GitHub - KoljaB/RealtimeVoiceChat: Have a natural, spoken conversation with AI!](https://github.com/KoljaB/RealtimeVoiceChat) ⭐ 3.8k
- [GitHub - bigsk1/voice-chat-ai: 🎙️ Speak with AI - Run locally using Ollama, OpenAI, Anthropic or xAI - Speech uses SparkTTS, OpenAI, ElevenLabs or Kokoro](https://github.com/bigsk1/voice-chat-ai) ⭐ 443
- [GitHub - kaymen99/AI-Voice-assistant: AI Voice Assistant: Talk to an AI agent that helps you with event scheduling, contact management, accessing your knowledge base, and web searches using simple voice commands](https://github.com/kaymen99/AI-Voice-assistant) ⭐ 70
- [GitHub - alinaqi/AIVoiceBot: Complete AI Based Voice Bot service for both inbound and outbound calls.](https://github.com/alinaqi/AIVoiceBot) ⭐ 24
- [GitHub - iamaziz/llm-voice-bot: Speak (speech-to-text) to LLMs (Ollama) in any lanaguage - Streamlit app https://deepwiki.com/iamaziz/llm-voice-bot](https://github.com/iamaziz/llm-voice-bot) ⭐ 48

### [GitHub - freddyaboulton/fastrtc: The python library for real-time communication](https://github.com/freddyaboulton/fastrtc) ⭐ 4.6k

Turn any python function into a real-time audio and video stream over WebRTC or WebSockets.

- 🗣️ Automatic Voice Detection and Turn Taking built-in, only worry about the logic for responding to the user.
- 💻 Automatic UI - Use the `.ui.launch()` method to launch the webRTC-enabled built-in Gradio UI.
- 🔌 Automatic WebRTC Support - Use the `.mount(app)` method to mount the stream on a FastAPI app and get a webRTC endpoint for your own frontend!
- ⚡️ Websocket Support - Use the `.mount(app)` method to mount the stream on a FastAPI app and get a websocket endpoint for your own frontend!
- 📞 Automatic Telephone Support - Use the `fastphone()` method of the stream to launch the application and get a free temporary phone number!
- 🤖 Completely customizable backend - A `Stream` can easily be mounted on a FastAPI app so you can easily extend it to fit your production application. See the [Talk To Claude](https://huggingface.co/spaces/fastrtc/talk-to-claude) demo for an example on how to serve a custom JS frontend.

## Links

- [39-ai-powered-call-quality-monitoring](about-deepak-sood/projects/39-ai-powered-call-quality-monitoring.md)
- [Open ASR Leaderboard - a Hugging Face Space by hf-audio](https://huggingface.co/spaces/hf-audio/open_asr_leaderboard)
- https://www.reddit.com/r/LocalLLaMA/comments/1mbny6o/100x_faster_and_100x_cheaper_transcription_with/
- https://www.reddit.com/r/speechtech/comments/1kd9abp/i_benchmarked_12_speechtotext_apis_under_various/
- https://www.reddit.com/r/OpenAI/comments/1eu79ir/looking_for_a_whisper_large_model_for_30x/
