#!/bin/bash

COMMIT_MSG="update resume"

rm img/resume.pdf
cp ~/Google\ Drive/Resume/Stanley\ Kwong\ Resume.pdf img/
mv img/Stanley\ Kwong\ Resume.pdf img/resume.pdf
git add img/resume.pdf
git commit -m "$COMMIT_MSG"
git push origin master
