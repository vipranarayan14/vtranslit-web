#!/bin/bash

webpack --env.target=inliner;
inliner ./inliner.html > ./dist/vtranslit.html;
rimraf ./inliner.html;
