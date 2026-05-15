# Counter Logger Pro 🎲

> A dark industrial tally counter with session tracking, VU meter animation, CSV export, and a physical button press effect — built entirely without dependencies.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen)

---

## Overview

Counter Logger is a precision tally tool designed for anyone who needs to count and log occurrences in sessions — inventory counts, attendance tracking, habit monitoring. Each saved entry is timestamped, visualised with a proportional inline bar, and exportable as CSV.

---

## Features

| Feature                      | Details                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| **Increment Counter**        | Large tactile button with physical press animation and ripple effect |
| **Save Entry**               | Saves current count with timestamp to session history                |
| **Delete Last**              | Removes the most recent entry                                        |
| **Session History**          | Entries listed with time, proportional bar, and count value          |
| **Total Chip**               | Running sum of all saved entries displayed in the header             |
| **VU Meter**                 | 20-segment animated bar spikes on every increment                    |
| **Export CSV**               | Downloads all session data as a `.csv` file with filename dated      |
| **Reset All**                | Clears count and history after confirmation                          |
| **Volume Slider**            | (Architecture ready for audio integration)                           |
| **Session Counter**          | Auto-incrementing session number persisted in `localStorage`         |
| **Keyboard Shortcuts**       | `Space` to increment, `Enter` to save                                |
| **localStorage Persistence** | History survives page reloads                                        |

---

## Technical Highlights

- **`e.repeat` guard** on keydown — prevents audio/increment spam when a key is held
- **Ripple effect** spawned at exact click coordinates using `getBoundingClientRect()`
- **Pop animation** on the count number using DOM reflow reset (`void el.offsetWidth`)
- **VU segments** update and decay in 140ms via direct style manipulation — no CSS animation overhead
- **Proportional bars** in history rows computed relative to the session's max value
- **Syne Mono + Syne** — technical monospace + display font pairing for a hardware instrument aesthetic
- **CSS grid texture** pattern baked into the background with `repeating-linear-gradient` — no image required

---

## Project Structure

```
counter-logger.html      ← Complete app: HTML + embedded CSS + embedded JS
```

---

## Design Decisions

- **Deep charcoal + amber accent** (`#E8C84A`) — evokes a physical LED counter display
- **Physical button press** — `translateY(3px)` + reduced box-shadow simulates a real button being pushed
- **CRT scan-line overlay** — subtle `repeating-linear-gradient` gives the UI a tactile, hardware feel
- **Inline bar chart** in history — lets users instantly see their peak sessions without navigating away

---

## Run Locally

```bash
open counter-logger.html
```

---

## What This Demonstrates

- Creating engaging micro-interactions (ripple, press, VU meter) in pure CSS/JS
- Keyboard accessibility as a first-class UX concern
- Designing a tool UI that looks purpose-built, not generic
- `localStorage` patterns for lightweight cross-session state
