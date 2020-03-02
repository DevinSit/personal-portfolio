# Personal Portfolio

> My personal portfolio site, hosted at [devinsit.com](https://devinsit.com).

![Screenshot](docs/images/Portfolio.png?raw=true)

This is the repo containing the code for my personal site, built using **Preact**. It shows off things like my skills, some of my projects, and how to get in contact with me. Check it out!

## Repo Structure

```
├── app.yaml                    # App Engine configuration
├── cloudbuild.master.yaml      # Cloud Build pipeline for the 'master' branch; handles deploying to prod
├── cloudbuild.yaml             # Cloud Build pipeline for the non-master branches; handles linting
├── docs/                       # Miscellaneous docs and images
├── Makefile                    # Useful commands for local development
├── package.json                # NPM dependencies
├── package-lock.json           # NPM dependencies lock file
├── preact.config.js            # Webpack configuration for preact-cli
├── scripts/                    # Useful scripts for local development/build pipeline
└── src/                        # The code for the actual site
```

## Tech Stack

- **Language**: JavaScript
- **Framework**: Preact
- **Hosting**: App Engine on Google Cloud
- **CI/CD**: Cloud Build on Google Cloud

### Why did I choose Preact?

Normally I'd be using **React** since I am, after all, most experienced with that framework. However, since this is more of a web _site_ than a web _app_ (i.e. there is less interactivity and more static content), it made more sense to go with the lightweight **Preact** to try and get the page size and load times as low as possible.

Obviously, even using something like **Preact** is overkill for a mostly static site like this, but since it's the paradigm for building websites that I'm most comfortable with, I can build things out a lot faster than writing straight up HTML markup and DOM manipulation by hand.

### CI/CD Pipeline 

There are two pipelines for this repo: one for the `master` branch and one for every non-master branch.

The regular, non-master pipeline just handles running the linter (**ESLint**) to make sure my stringent code style rules are kept in check.

The `master` pipeline handles linting just like the non-master pipeline, however it also handles deploying to the production **App Engine** environment to make everything available at [devinsit.com](https://devinsit.com).

## Local Development

The following is a guide on how to bring up the site locally for development purposes.

### Prerequisites

Since this site isn't Dockerized, you'll need the following installed:

- Node + NPM (latest version is fine)
- `make`

### Bringing up the Site

First, we need to install the NPM dependencies:

```
npm ci
```

Then, we can start the site:

```
make start

or

npm run start
```

Once the site has finished starting, it will be available on [localhost:3000](http://localhost:3000).

## Contributing

Since this is my personal site, it's not exactly open to contributions. But if you like the theme and style, hey, it's open source, so feel free to fork it and make it your own! 

## Authors

- **Devin Sit**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.
