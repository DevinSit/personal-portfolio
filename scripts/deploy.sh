#!/bin/sh

set -e

gcloud app deploy -q --version=production
