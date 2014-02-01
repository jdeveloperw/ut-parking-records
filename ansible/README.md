This directory includes Ansible scripts for deploying the staging/production servers
- AngularJS Frontend
- (Coming soon) API
- (Coming soon) Database

<pre>
greg_project/ansible/
├── ansible-env-setup.sh
    Use this to clone the ansible repo locally and setup your environment to use ansible
├── hosts.txt
    List of staging/production servers and their roles
├── nginx-greg_project.conf
    Staging/production configuration of NGINX to serve AngularJS resources (NGINX replaces apache)
├── playbook.yml
    Contains the steps necessary to deploy a production/staging server, given that bootstraping is complete.
├── README.md
    This file
└── ssh-config
    SSH configuration for production/staging servers managed by ansible
</pre>
