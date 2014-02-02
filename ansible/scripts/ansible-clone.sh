#!/bin/zsh

REPOS="$HOME/repos"
ANSIBLE="$REPOS/ansible"

# If ansible repo does not exist, clone it
if [ ! -d $ANSIBLE ]; then
  mkdir -p $REPOS
  cd $REPOS
  git clone git://github.com/ansible/ansible.git $ANSIBLE
fi
