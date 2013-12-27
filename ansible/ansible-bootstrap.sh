OLDPWD=`pwd`
REPOS="$HOME/repos"
mkdir -p $REPOS
cd $REPOS
git clone git://github.com/ansible/ansible.git
source ansible/hacking/env-setup
cd $OLDPWD
