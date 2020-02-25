.PHONY: start build deploy lint

start:
	npm start

build:
	npm run build

deploy:
	bash ./scripts/deploy.sh

lint:
	npm run lint
