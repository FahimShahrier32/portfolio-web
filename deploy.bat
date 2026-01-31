@echo off
echo Syncing changes to GitHub (Triggers Vercel Deployment)...
echo.
set GIT_PATH="C:\Program Files\Git\cmd\git.exe"
%GIT_PATH% add .
set /p commit_msg="Enter commit message (Press Enter for 'Update'): "
if "%commit_msg%"=="" set commit_msg=Update
%GIT_PATH% commit -m "%commit_msg%"
%GIT_PATH% push
echo.
echo Changes pushed! Vercel will deploy automatically.
pause
