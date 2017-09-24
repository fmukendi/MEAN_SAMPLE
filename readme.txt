
HTTPS 
…or create a new repository on the command line

echo "# MEAN" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/fmukendi/MEAN.git
git push -u origin master
…or push an existing repository from the command line

git remote add origin https://github.com/fmukendi/MEAN.git
git push -u origin master


SSH
…or create a new repository on the command line

echo "# MEAN" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:fmukendi/MEAN.git
git push -u origin master
…or push an existing repository from the command line

git remote add origin git@github.com:fmukendi/MEAN.git
git push -u origin master


//// NOTES ////

git remote set-url origin git@github.com:fmukendi/MukeAPPS_NODE_READY.git

git remote set-url origin https://github.com/fmukendi/MukeAPPS_NODE_READY.git

git remote show origin