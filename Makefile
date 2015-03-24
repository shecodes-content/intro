BIN:=$(shell npm bin)
REPOURL:=$(shell git remote show origin -n|grep Push|cut -d " " -f 6)

all: build/index.js

build:
	mkdir -p build
	cd build && git init && git remote add pages $(REPOURL)
	cd build && git checkout --orphan gh-pages

build/index.js: build index.js readme.md package.json
	$(BIN)/browserify -t markdownify -t brfs index.js > build/index.js

.PHONY: publish

publish:
	cd build && git add . && git ci -am"publish" && git push pages gh-pages --force


