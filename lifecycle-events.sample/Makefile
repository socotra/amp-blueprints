SHELL := bash
.ONESHELL:
.SHELLFLAGS := -eu -o pipefail -c
.PHONY: start-js start-ts sta-upload dev-upload

.DEFAULT_GOAL := start-ts

IMAGE_NAME = lifecycle-tester

start: build
	node ./dist/server.js

ts-start:
	npm run start-ts

build-ts:
	tsc

build-docker: build-ts
	@docker build . -t $(IMAGE_NAME)
	@docker image inspect $(IMAGE_NAME):latest | jq

dr-start: dr-stop
	(docker rm $(IMAGE_NAME) || echo "Nothing to cleanup")
	docker run --rm -d --name "$(IMAGE_NAME)" --publish 127.0.0.1:10111:10111 $(IMAGE_NAME):latest
	docker ps

dr-stop:
	(docker stop "$(IMAGE_NAME)" || echo "nothing to stop")

logs:
	docker logs $(IMAGE_NAME)

dev-upload:
	@socotra-app version patch
	export SMP_PUBLISH_API=https://api.marketplace.smp-dev.com
	@socotra-app publish docker $(IMAGE_NAME):latest


sta-upload:
	@socotra-app version patch
	export SMP_PUBLISH_API=https://api.marketplace.smp-sta.com
	@socotra-app publish docker $(IMAGE_NAME):latest
