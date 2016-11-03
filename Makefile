
default:
	@echo ""
	@echo "Available Targets:"
	@echo ""
	@echo "   make install"
	@echo "   make start"
	@echo "   make compile"
	@echo "   make clean"
	@echo "   make test"
	@echo ""

install: clean node_modules

compile: prepare-compile gulp-compile-watch

publish: prepare-compile gulp-compile npm-publish

start: prepare-compile gulp-compile start-express

start-express:
	node index.js

node_modules:
	npm install

jspm_packages:
	$(jspm) install

gulp-compile:
	$(gulp) compile;

gulp-compile-watch:
	$(gulp) compile-watch;

test:
	$(karma) start

clean:
	make clean-dist; rm -rf node_modules jspm_packages

clean-dist:
	rm -rf dist

prepare-compile:
	rm -rf dist; mkdir dist; cd dist; \
	ln -s ../jspm_packages jspm_packages; \
	ln -s ../node_modules node_modules; \
	cd ..; \
	cp jspm.config.js index.html dist; \

npm-publish:
	rm -rf lib; mkdir lib; \
	cp -r dist/src/ lib; \
	npm publish . &&  \
	rm -rf lib;

jspm  = ./node_modules/.bin/jspm
karma = ./node_modules/.bin/karma
gulp  = ./node_modules/.bin/gulp

.PHONY: install test clean node_modules jspm_packages compile test;
MAKEFLAGS = -s
