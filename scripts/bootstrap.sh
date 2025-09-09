#!/usr/bin/env bash

set -euo pipefail
npm config set ignore-scripts true
corepack enable || true
yarn set version stable
yarn config set nodeLinker node-modules
yarn install
echo "OK: bootstrap complete"
