;= @echo off
;= rem Call DOSKEY and use this file as the macrofile
;= %SystemRoot%\system32\doskey /listsize=1000 /macrofile=%0%
;= rem In batch mode, jump to the end of the file
;= goto:eof
;= Add aliases below here
e.=explorer .
gl=git log --oneline --all --graph --decorate  $*
ls=ls --show-control-chars -F --color $*
http=browser-sync start --server --files "**/*.css,**/*.js,**/*.html"

gs=git status
ga=git add .
gp=git push origin master


gwd=cd /jzmwork/html5/jzm-im/jzm-im-project
gtwd=cd /test-jzmwork/html5/jzm-im/jzm-im-project
gwl=cd /gitFile/learnfe

ci=cnpm install
ni=npm install
nrd=npm run dev
nrb=npm run build

pwd=cd
clear=cls
history=cat %CMDER_ROOT%\config\.history
unalias=alias /d $1
vi=vim $*
cmderr=cd /d "%CMDER_ROOT%"
