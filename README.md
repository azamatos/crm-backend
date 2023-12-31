# Description

CRM application backend for SG.SADA by [Azamat](https://hh.ru/resume/a324b865ff0b19399c0039ed1f705371455743)

# Installation

## Linux

```bash
$ sudo apt-get update
$ sudo apt-get install ./docker-desktop-<version>-<arch>.deb
```

## Mac OS

[Download Docker Destop for MacOS](https://desktop.docker.com/mac/main/amd64/Docker.dmg?utm_source=docker&utm_medium=webreferral&utm_campaign=docs-driven-download-mac-amd64)

After downloading Docker.dmg, run the following commands in a terminal to install Docker Desktop in the Applications folder:

```bash
$ sudo hdiutil attach Docker.dmg
$ sudo /Volumes/Docker/Docker.app/Contents/MacOS/install
$ sudo hdiutil detach /Volumes/Docker
```

## Windows

[Download Docker Destop for Windows](https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe)

After downloading Docker Desktop Installer.exe, run the following command in a terminal to install Docker Desktop:

```bash
$ "Docker Desktop Installer.exe" install
```

# Running the app

Before starting container dont forget to rename .env-example => .env

```bash
# watch mode
$ docker-compose up -d
```

# Run

## DEV MODE

```
npm run start:dev
```

## PRODUCTION MODE

```
npm run start:prod

```

# Contacts

## Contact me for further questions:

- Email - 15457akdepe@gmail.com
- Telegram - @eldzhernone
- Phone number - +79167154520
