\# 🏎️ F1 Racer



> A full-stack Formula 1 platform for live race information, schedules,

> standings, teams, news, videos and AI-powered F1 assistance.



F1 Racer started from a simple idea:



\*\*"Why isn't there a Cricbuzz-like experience for Formula 1?"\*\*



Instead of switching between multiple websites for race timing, standings,

schedules, teams, news and videos, F1 Racer aims to bring everything into

one clean and intelligent platform.



\---

## Architecture

<img width="698" height="505" alt="Architecture_interface" src="https://github.com/user-attachments/assets/218bf47a-3840-4540-b28f-66140a57d2f2" />


-------


\## 🚀 Features



\### 🏁 Race



\- Live race scoreboard

\- Driver positions

\- Lap information

\- Race progress

\- Tyre information

\- Pit-stop information

\- Driver gaps



\### 📅 Schedule



\- Upcoming races

\- Race weekends

\- Practice sessions

\- Qualifying

\- Race

\- Circuit information



\### 🏆 Standings



\- Driver championship standings

\- Constructor standings

\- Points

\- Wins

\- Podiums

\- Championship position



\### 🏎️ Teams



\- Current F1 teams

\- Team information

\- Team branding

\- Driver information

\- Team-specific pages



\### 📰 News



\- Latest Formula 1 news

\- News cards

\- External news API integration

\- Backend-controlled API access



\### 🎥 Videos



\- F1 highlights

\- Race videos

\- Interviews

\- Motorsport content



\### 🤖 AI Assistant



Planned AI service for:



\- F1 questions

\- Race explanations

\- Driver comparisons

\- Team comparisons

\- Historical F1 questions

\- Natural-language search



\---


## Project Tech Stack Details
<img width="685" height="948" alt="Application_flow" src="https://github.com/user-attachments/assets/38ef8df6-0a3f-4411-be2b-3365604a68ae" />

-----
\# 🏗️ Architecture



```text

&#x20;                        ┌─────────────────────────┐

&#x20;                        │       USER / WEB        │

&#x20;                        └────────────┬────────────┘

&#x20;                                     │

&#x20;                                     ▼

&#x20;                   ┌────────────────────────────────┐

&#x20;                   │       React Frontend           │

&#x20;                   │                                │

&#x20;                   │ React + TypeScript + Tailwind  │

&#x20;                   │                                │

&#x20;                   │ Live | Schedule | Results      │

&#x20;                   │ Standings | News | Teams       │

&#x20;                   │ Videos | Profile | AI          │

&#x20;                   └───────────────┬────────────────┘

&#x20;                                   │

&#x20;                             REST API

&#x20;                                   │

&#x20;                                   ▼

&#x20;                   ┌────────────────────────────────┐

&#x20;                   │       Node.js Backend           │

&#x20;                   │           Express               │

&#x20;                   │                                │

&#x20;                   │ Routes                         │

&#x20;                   │ Controllers                    │

&#x20;                   │ Services                       │

&#x20;                   │ Middleware                     │

&#x20;                   │ Authentication                 │

&#x20;                   └───────┬───────────┬────────────┘

&#x20;                           │           │

&#x20;               ┌───────────┘           └──────────────┐

&#x20;               ▼                                        ▼

&#x20;      ┌─────────────────┐                    ┌─────────────────┐

&#x20;      │    MongoDB      │                    │   Python AI     │

&#x20;      │                 │                    │    Service      │

&#x20;      │ Users           │                    │                 │

&#x20;      │ Races           │                    │ FastAPI         │

&#x20;      │ Teams           │                    │ AI/RAG          │

&#x20;      │ Standings       │                    │ Embeddings      │

&#x20;      │ News            │                    │ LLM             │

&#x20;      └─────────────────┘                    └────────┬────────┘

&#x20;                                                       │

&#x20;                                                       ▼

&#x20;                                               ┌──────────────┐

&#x20;                                               │ LLM / AI API │

&#x20;                                               └──────────────┘



&#x20;                   External Data Sources

&#x20;                             │

&#x20;             ┌───────────────┼────────────────┐

&#x20;             ▼               ▼                ▼

&#x20;         F1 Data API       News API       Video API

