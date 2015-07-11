# browserify-livescript

browserify-livescript is an npm module that allows
[livescript](https://github.com/gkz/LiveScript) files to be seemlessly
integrated into a project through
[browserify](https://github.com/substack/node-browserify.git). If you are not
familiar with [browserify](https://github.com/substack/node-browserify.git), I
strongly encourage you to read up. 

## Basic usage

To use browserify-livescript in a project, include it as a dev-dependency in
your package.json file. Then pass it as a transform to
[browserify](https://github.com/substack/node-browserify.git). at the command
line (or in a makefile or through [grunt](https://github.com/gruntjs/grunt.git),
etc.).

```
browserify -t browserify-livescript file.ls > output.js
```

## Source Maps

browserify-livescript supports sourcemaps "out of the box" the only thing the
user needs to do is to instruct browserify to use the source maps by including
the '-d' flag. 

```
browserify -d -t browserify-livescript file.ls > output.js
```
