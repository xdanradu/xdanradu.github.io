echo "COPY the build to the root folder xdanradu.github.io"
cd ..
SET PARENT_FOLDER=%cd%
ECHO %PARENT_FOLDER%
set_date.bat
echo %CURRENT_DATE%
del *.* /Q
rmdir "static" /S /Q
cd docusaurus
xcopy /s build %PARENT_FOLDER% /Q
echo "COMMIT all changes and PUSH them to github repo"
cd ..
git add .
git commit -m "Automatic PUSH all changes on: "%CURRENT_DATE%
git push
