@echo off
echo "-------Begin-------"
set /p msg=请输入提交注释:
git add .
git commit -m %msg%
git push origin
echo 推送成功：【%msg%】
echo "--------End!--------"
pause