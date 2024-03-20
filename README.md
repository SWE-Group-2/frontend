# Software Engineering Project Frontend

## Mega Cool Badge Zone

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=SWE-Group-2_frontend&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=SWE-Group-2_frontend)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=SWE-Group-2_frontend&metric=bugs)](https://sonarcloud.io/summary/new_code?id=SWE-Group-2_frontend)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=SWE-Group-2_frontend&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=SWE-Group-2_frontend)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=SWE-Group-2_frontend&metric=coverage)](https://sonarcloud.io/summary/new_code?id=SWE-Group-2_frontend)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=SWE-Group-2_frontend&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=SWE-Group-2_frontend)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=SWE-Group-2_frontend&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=SWE-Group-2_frontend)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=SWE-Group-2_frontend&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=SWE-Group-2_frontend)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=SWE-Group-2_frontend&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=SWE-Group-2_frontend)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=SWE-Group-2_frontend&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=SWE-Group-2_frontend)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=SWE-Group-2_frontend&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=SWE-Group-2_frontend)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=SWE-Group-2_frontend&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=SWE-Group-2_frontend)

## Local Setup

First install the dependencies

```bash
npm install
```

Then setup Husky (Git Hooks for frontend / linting before commit)

```bash
npm run prepare
```

Then you can run frontend like

```bash
npm run dev
```

## Docker Setup

After setting up the project structure as follows

```shell
- project/
  - docker-compose.yaml
  - backend/
  - frontend/
```

To run the project using docker, you can run

```shell
docker compose up -d --build
```

where `-d` means detached (running the background). To bring the containers down, you can run

```shell
docker compose down
```

After making changes while the containers are running, you can rebuild using

```shell
docker compose down; docker compose up -d --build
```

Note that the first time you build it will likely be quite slow but afterward it should be speedy the build will be cached (unless any changes are made to the Dockerfile). If something is not working, you can check running containers by running

```shell
docker ps -a
```

and see logs using

```shell
docker logs <container_id>
```

## Before Committing

Before committing, make sure to run the linter

```bash
npm run lint
```

and also the formatter

```bash
npm run format
```
