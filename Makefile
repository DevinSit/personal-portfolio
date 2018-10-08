.PHONY: start build deploy

start:
	npm start

build:
	npm run build

deploy:
	bash ./scripts/deploy.sh
