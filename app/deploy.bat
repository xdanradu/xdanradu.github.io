echo "> DEPLOY to xdanradu.github.io"
cd ..
SET PARENT_FOLDER=%cd%
ECHO %PARENT_FOLDER%
del *.* /Q
rmdir "static" /S /Q
cd app
xcopy /s build %PARENT_FOLDER% /Q
echo "> GIT"
cd ..
git add .
git commit -m "push the build to github"
git push

