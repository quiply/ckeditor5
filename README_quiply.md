Custom build: https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html
Super build: https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html#scenario-3-using-two-different-editors


Update git:
===

1) cd packages/ckeditor5-build-classic
2) git fetch upstream
3) "git merge upstream/stable" or "git rebase upstream/stable"
4) -> conflicts: ignore conflicts in build directory (build/ckeditor.js and build/translations/*)
5) -> update versions in ckeditor5-build-classic/package.json and(!) in ckeditor5-emojis/package.json  

6) recommend: rm -rf node_modules && yarn install
           
Build:
===

first time:
1) cd packages/ckeditor5-build-classic
2) yarn install
3) yarn add --dev @ckeditor/ckeditor5-editor-inline
4) yarn run build
                                                                                          
-> check new build, open sample/index.html
-> copy packages/ckeditor5-build-classic/build/ckeditor.js, ckeditor.js.map and translations (de.js etc.) in Quiply project

if has already run once:         
1) cd packages/ckeditor5-build-classic
2) yarn run build

Error
===

remove node_modules and build again
                       

Customized or added
===

- Changes in ckeditor5-mention
- Added ckeditor5-emojis (originally from here https://github.com/harrisonlucaswork/ckeditor5-emojis/tree/master)
