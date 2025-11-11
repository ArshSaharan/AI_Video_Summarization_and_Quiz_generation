# 🎥 AI Video Summarization & Quiz Generation

An **end-to-end AI-powered web application** that processes videos to create intelligent summaries and generate interactive quizzes for enhanced learning.

## 🚀 Features

- 🎬 **Video Input Options** — YouTube URL or direct file upload
- 🎧 **Audio Extraction** — FFmpeg-powered audio processing
- 🗣 **Speech-to-Text** — OpenAI Whisper with GPU acceleration (RTX 4050 optimized)
- 📃 **AI Summarization** — Intelligent text summarization via OpenRouter API
- ❓ **Quiz Generation** — Auto-generated multiple-choice questions from transcript
- 🌐 **Full-Stack Solution** — Angular 20 frontend + FastAPI backend
- ⚡ **GPU Acceleration** — CUDA-enabled Whisper for faster transcription

## 🛠 Tech Stack

**Backend**
- **FastAPI** — Modern Python web framework
- **uv** — Fast Python package and environment manager
- **pytubefix** — YouTube video downloading
- **ffmpeg-python** — Audio extraction from video
- **OpenAI Whisper** — Speech-to-text transcription
- **PyTorch (CUDA)** — GPU-accelerated ML processing
- **OpenRouter API** — AI model access for summarization and quiz generation

**Frontend**
- **Angular 20** — Modern web framework with standalone components
- **TypeScript** — Type-safe JavaScript
- **RxJS** — Reactive programming with Observables
- **HttpClient** — API communication


## 🚀 Getting Started & Installation

### Prerequisites

Before installing, ensure you have:

- **[uv](https://docs.astral.sh/uv/getting-started/installation/)** — Python environment & dependency manager
- **Node.js** 18+ and **Angular CLI** ^20
- **FFmpeg** installed and available in your PATH (`ffmpeg -version` should work)
- **NVIDIA GPU + CUDA** *(optional)* for faster Whisper transcription
- **OpenRouter API key** *(optional but recommended)* for AI features

### 1. Clone the Repository

- `git clone https://github.com/vik05h/AI_Video_Summarization_and_Quiz_generation.git`
- cd AI_Video_Summarization_and_Quiz_generation


### 2. Backend Setup (FastAPI + Python)

#### Install Python dependencies
- Using uv (recommended)
- Sync the project's dependencies with the environment: ```uv sync```

# Alternative using pip
#### On Mac `source .venv/bin/activate` 
#### On Windows: `.venv\Scripts\activate`
```pip install -r requirement.txt```

#### Set environment variables
Create a `.venv` file in the root directory:

#### Install FFmpeg (Required)
- **Windows**: Download FFmpeg and add to PATH
- **macOS**: `brew install ffmpeg`
- **Linux**: `sudo apt install ffmpeg`

Verify installation: `ffmpeg -version`

#### Enable GPU acceleration (Optional - RTX 4050)
- ````uv pip uninstall torch````   
- ````uv pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118````   

#### Run the FastAPI server
uv run uvicorn main:app --reload

Backend available at [**http://127.0.0.1:8000**](http://127.0.0.1:8000)

### 3. Frontend Setup (Angular 20)

#### Install Node.js dependencies

#### Run the Angular development server
- To run the Server: `ng s`


## 🚀 Future Enhancements

- [ ] Multiple language support
- [ ] Advanced quiz types (short answer, true/false)
- [ ] User authentication and progress tracking
- [ ] Batch video processing
- [ ] Export functionality (PDF, DOCX)
- [ ] Integration with learning management systems

## 📄 License

This project is licensed under the MIT License - see the [License](License) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨💻 Author

- GitHub: Arsh 

***

⭐ **Star this repository if you found it helpful!**


