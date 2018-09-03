.PHONY: deploy

deploy:
	gcloud app deploy --stop-previous-version --version=$$(git rev-parse --short HEAD)
