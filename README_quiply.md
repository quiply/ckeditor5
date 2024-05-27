Custom build: https://ckeditor.com/docs/ckeditor5/latest/builds/guides/development/custom-builds.html
Super build: https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/advanced-setup.html#scenario-3-using-two-different-editors


Update git:
===

1) cd packages/ckeditor5-build-classic
2) git fetch upstream
3) "git merge upstream/stable" (or "git rebase upstream/stable")
4) -> use intellij to resolve conflicts: ignore conflicts in build directory (build/ckeditor.js and build/translations/*)
5) -> ckeditor5-build-classic/package.json: 
   1) update versions
   2) "@ckeditor/ckeditor5-core" must be in "dependencies" and not "devDependencies"  
6) cd ../.. && rm yarn.lock && rm -rf node_modules && yarn install && cd packages/ckeditor5-build-classic && rm -rf node_modules && yarn install
7) cd ../.. && git commit -a (the eslint check in Intellij does not work correctly)
    
Build new ckeditor version:
===

1) cd packages/ckeditor5-build-classic
2) yarn run build

-> check new build, open sample/index.html
-> copy packages/ckeditor5-build-classic/build/ckeditor.js, ckeditor.js.map and translations (de.js etc.) in Quiply project

Error
===

remove node_modules and build again
                       

Customized or added
===

- Changes in ckeditor5-mention
- Added ckeditor5-emojis (originally from here https://github.com/harrisonlucaswork/ckeditor5-emojis/tree/master)
