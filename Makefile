
install:
	@npm install

build:
	@./node_modules/.bin/webpack

open: build
	@open index.html

