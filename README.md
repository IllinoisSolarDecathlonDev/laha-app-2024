# laha-app-2024
ISD Build app for home automation.

# Project Setup Guide

This guide will walk you through setting up your machine for running the project. Follow the steps below depending on your operating system (macOS or Windows).

## Prerequisites

- **VS Code** installed (already assumed)
- **Git** for version control (will be installed if not already available)
- **Node.js** and **npm** (will be installed)
- **Expo CLI** for React Native development
- **Xcode** (macOS only) or **Android Studio** (Windows/macOS) for running emulators

---

## macOS Setup (Intel and M1 Macs)

### 1. Install Homebrew (Package Manager)

If you don’t have Homebrew, install it by running:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After installation, make sure you add Homebrew to your path (for M1 Macs):
```![image](https://github.com/user-attachments/assets/1ded226e-eac9-4a7a-b7d9-bd8e7ce6f540)
![image](https://github.com/user-attachments/assets/c21d3562-e572-43bf-9eeb-17b88ffed444)

echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### 2. Install Homebrew (Package Manager)
```
brew install git
```

Verify the installation:
```
git --version
```

### 3. Install Node.js and npm
```
brew install node
```

Verify Node.js and npm:
```
node -v
npm -v
```

### 4. Install EXPO CLI
```
npm install -g expo-cli
```

### 5. Install Watchman (for React Native development)
```
brew install watchman
```

### 6. Install Xcode (for iOS development)
Download and install Xcode from the Mac App Store. After installation, open Xcode and install any additional components it asks for.

Set Xcode command line tools:
```
sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
```

### 7. Install CocoaPods (iOS dependency manager)
```
sudo gem install cocoapods
```

## Windows Setup

### 1. Install Git
Download and install Git from the official website: Git for Windows.

Verify the installation:
```
git --version
```

### 2. Install Node.js and npm
Download and install Node.js from the official website: Node.js.

Verify Node.js and npm:
```
node -v
npm -v
```

### 3. Install Expo CLI
```
npm install -g expo-cli
```

### 4. Install Chocolatey (Package Manager)
Install Chocolatey by running the following in PowerShell as an administrator:

```
Set-ExecutionPolicy Bypass -Scope Process -Force; `
[System.Net.ServicePointManager]::SecurityProtocol = `
    [System.Net.ServicePointManager]::SecurityProtocol `
    -bor 3072; `
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

### 5. Install Android Studio (for Android emulator)
- Download and install Android Studio from here.
- Open Android Studio and follow the installation prompts.
- Go to Configure -> SDK Manager -> SDK Tools tab and make sure the following are checked:
- Android SDK Build-Tools
- Android Emulator
- Android SDK Platform-Tools
- Add Android SDK to your path:
```
$env:Path += ";C:\Users\<Your Username>\AppData\Local\Android\Sdk\platform-tools"
```

## Common Setup for Both macOS and Windows

### 1. Clone the Project Repository
```
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Project Dependencies
Make sure you're in the project folder, then run:
```
npm install
```
### 3. Start the Project (Development Mode)
```
expo start
```
This will start the Expo development server and open Expo DevTools in your browser. You can scan the QR code with the Expo Go app on your phone, or run the app in an iOS/Android simulator/emulator.
- For macOS, you can press i in the terminal to launch the iOS Simulator (Xcode required).
- For Windows, you can press a to launch an Android Emulator (Android Studio required).

## Troubleshooting
### Common Errors
1. Metro Bundler not starting: Try restarting the bundler with:
```
expo start -c
```

2. Emulator not working (Android): Ensure that Android SDK and Emulator are properly set up in Android Studio. Open Android Studio, then go to Configure -> AVD Manager and create a virtual device.
3. App crashing on iOS emulator: Ensure that you have installed all Xcode dependencies and run:
```
cd ios && pod install
```
For more details on setup, refer to the Expo Documentation.
