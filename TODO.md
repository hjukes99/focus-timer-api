# TODO (next 24h)

1. [P0] Build minimal HTTP server with `GET /health` and JSON middleware helpers.
2. [P0] Implement `POST /session/start` and `POST /session/stop` with in-memory state.
3. [P0] Implement `GET /session/status` and `GET /sessions` endpoints.
4. [P1] Add robust input validation and consistent error payload shape.
5. [P1] Add unit tests for timer/session state transitions.
6. [P1] Add endpoint-level smoke tests for success + invalid input cases.
7. [P2] Improve README examples with curl requests and expected responses.
8. [P2] Add simple data retention rule (keep last 100 sessions).
9. [P2] Add npm script for quick local dev loop.
