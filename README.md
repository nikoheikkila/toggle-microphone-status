# Toggle Microphone Status

A simple Raycast extension to control your microphone during voice calls.

## Features

- Toggle the microphone _on_ or _off_.
- Display the current microphone status using Raycast's HUD.

## Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Build the project:
   ```sh
   npm run build
   ```

## Usage

1. Open Raycast.
2. Bind command "Toggle Microphone Status" to a keyboard shortcut:
3. Press the hotkey

## Development

### Prerequisites

- Node.js
- npm

### Running Locally

1. Clone the repository and install dependencies as described in the Installation section.
2. Run the extension locally:
   ```sh
   npm run dev
   ```

### Project Structure

- `src/script.ts`: Contains the `OSAScriptClient` class to run AppleScript commands.
- `src/microphone.ts`: Contains the `Microphone` class to manage microphone volume.
- `src/toggle-microphone-status.ts`: Main script to toggle the microphone status.
- `README.md`: Project documentation.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License, blah blah.
