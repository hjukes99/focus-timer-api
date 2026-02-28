# Focus Timer API — SPEC

## Idea
A tiny local API for managing focus sessions (start, stop, status, and history) so users can build a Pomodoro-like workflow without a full app.

## User Story
As a solo builder, I want a dead-simple focus timer API I can run locally so I can track active focus sessions and recent history from scripts or lightweight UIs.

## MVP Features
1. Start a focus session with optional label and duration minutes.
2. Stop the active focus session and return elapsed time.
3. Get current status (active/inactive + remaining/elapsed).
4. List recent sessions (in-memory for MVP).
5. Basic validation + deterministic JSON responses.

## Non-Goals (today)
- Authentication
- Database persistence
- Multi-user support
- Deployment/cloud infra
