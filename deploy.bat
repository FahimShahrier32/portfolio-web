@echo off
echo Starting Production Deployment...
echo.
call npx vercel --prod --yes
echo.
echo Deployment Complete!
pause
