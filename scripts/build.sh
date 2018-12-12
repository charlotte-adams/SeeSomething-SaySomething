# js transform
babel --presets react,es2015 js/source/ -d js/build
# js package
browserify js/build/app.js -o public/bundle.js
# css package
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > public/bundle.css
# done
date; echo;

