# Overview

This directory includes Ansible scripts for deploying the staging/production servers

- AngularJS Frontend
- (Coming soon) API
- (Coming soon) Database

<pre>
greg_project/ansible/
├── README.md
    This file
├── hosts.txt
    List of staging/production servers and their roles
├── nginx-greg_project.conf
    Staging/production configuration of NGINX to serve AngularJS resources (NGINX replaces apache)
├── playbook.yml
    Contains the steps necessary to deploy a production/staging server, given that bootstraping is complete.
├── scripts
└── ssh-config
    SSH configuration for production/staging servers managed by ansible
</pre>

## Getting Started

So you want to deploy a server with the latest AngularJS Frontend.

- controller = your local computer
- controllee = the server managed by ansible

### Setup your laptop
- You first need to clone the ansible repo on the contoller:

        ./scripts/ansible-clone.sh

- And then setup your environment on the controller:
     
        source ./scripts/ansible-env-setup.sh

- Setup the controllee using [ansible-bootstrap](https://github.com/jdeveloperw/ansible-bootstrap)

- On the controller edit `hosts.txt`; comment out other servers and add your own:

        [webservers]
        #107.170.245.161 ansible_ssh_private_key_file=/Users/jdwhite/.ssh/ansible
        #198.199.115.16  ansible_ssh_private_key_file=/Users/jdwhite/.ssh/ansible
        MY-SERVER-IP ansible_ssh_private_key_file=~/.ssh/ansible

- On the controller, run ansible; it will fail because we do not have permission to clone greg_project.

        ansible-playbook -i hosts.txt playbook.yml

- On the controllee, there is a newly created public key file in `/root/.ssh/github.pub`.
  Add this ssh key to github -- see [Add your SSH key to GitHub](https://help.github.com/articles/generating-ssh-keys)

- Run ansible again; this time it should work.

        ansible-playbook -i hosts.txt playbook.yml
