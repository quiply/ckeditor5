Custom build: https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html
Super build: https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html#scenario-3-using-two-different-editors


Update git:
===

cd packages/ckeditor5-build-classic
git fetch upstream
git merge upstream/stable

recommend: rm -rf node_modules && yarn install
           
Build:
===

cd packages/ckeditor5-build-classic
yarn install
yarn add --dev @ckeditor/ckeditor5-editor-inline
yarn run build
                                                                                          
-> check new build, open sample/index.html
-> copy packages/ckeditor5-build-classic/ckeditor.js and ckeditor.js.map in Quiply project

Error
===

remove node_modules and build again
