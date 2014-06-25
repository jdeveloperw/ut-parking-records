# Overview

This directory includes Ansible scripts for deploying the staging/production servers

- AngularJS Frontend
- (Coming soon) API
- (Coming soon) Database

<pre>
ut-parking-records/ansible/
├── README.md
    This file
├── jd-hosts.txt
    JD's staging/production servers and their roles
├── nginx-greg_project.conf
    Staging/production configuration of NGINX to serve AngularJS resources (NGINX replaces apache)
├── playbook.yml
    Contains the steps necessary to deploy a production/staging server, given that bootstraping is complete.
├── scripts
└── sshd-config
    SSH configuration for production/staging servers managed by ansible
</pre>

(file tree generated with `tree -F -L 1`)

## Getting Started

So you want to deploy a server with the latest AngularJS Frontend.

### Definitions

- controller := your local computer
- controllee := the server managed by ansible

### Procedure
- Controllee: Setup using [ansible-bootstrap](https://github.com/jdeveloperw/ansible-bootstrap)
- Controller: Clone the ansible repo on the contoller.
  You only need to run this once.

        ./scripts/ansible-clone.sh

- Controller: Setup your environment on the controller.
  Run this any time you open a new shell and want to run `ansible-playbook`.
     
        source ./scripts/ansible-env-setup.sh


- Controller: Edit `$MY_HOSTS_FILE` (mine is `jd-hosts.txt`):

        [webservers]
        MY-SERVER-IP ansible_ssh_private_key_file=~/.ssh/ansible

- Controller: Run ansible.
  it will fail because we do not have permission to clone greg_project.

        ansible-playbook -i $MY_HOSTS_FILE playbook.yml

- Controllee: There is a newly created public key file in `/root/.ssh/github.pub`.
  [Add this SSH key to GitHub.](https://help.github.com/articles/generating-ssh-keys)

- Controller: Run ansible again; this time it should work.

        ansible-playbook -i $MY_HOSTS_FILE playbook.yml
