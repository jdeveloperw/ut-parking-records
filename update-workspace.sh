#sudo pip install -r pip-requirements.txt
./git-config.sh
ansible-playbook -i ./ansible/ansible-hosts.txt ansible/playbook.yml -K
