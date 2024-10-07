# Commands

## Final Commands

1. Change value of reporting location
2. Create inventory file
3. ansible-playbook pull_add_restart.yml -i inventory/iiitd -e "host=IIITD" --check
4. ansible-playbook pull_add_restart.yml -i inventory/iiitd -e "host=IIITD" --limit @pull_add_restart.retry

### Add hosts to files

```bash
- sudo cat /etc/openvpn/openvpn-status.log| grep IIITD
- sudo vim /etc/ansible/hosts
- IIITD-01 controller=IIITD-01 ansible_host=10.8.42.156 ansible_port=1234 ansible_ssh_pass='xitanez123!@#' ansible_ssh_user=pi
- '{0} controller={0} ansible_host={1} ansible_port=1234 ansible_ssh_pass='password' ansible_ssh_user=pi'.format(client.name, client.address)
```

### Create a playbook (yml file)

## Create Inventory File

- Location - /home/ubuntu/ansible_playbooks/find_client_ips
- Command - python find_vpn_static_ip.py -c IIITD

## Commands

### run commands directly

```bash
#run any command and get results to multiple controllers, deploy to all controllers inside the IIITD group
ansible iiitd -m shell -a "pip freeze | grep kafka"

#restart command to only IIITD-06
ansible IIITD-06 -m shell -a "sudo /home/pi/log_files/twistd_reset.sh -r"

ansible iiitd -m shell -a "uname -a"
ansible kafka -m shell -a "uname -a"

#exclude a host from ansible play
ansible kafka --limit 'all:!IIITD-01' -m shell -a "uname -a"

ansible Trent -i inventory/Trent -m shell -a "sudo cat /home/pi/conf/electric_meter.conf | grep ReportDeliveryLocation"
```

### run ansible playbooks

```bash
ansible-playbook add_ini.yml

ansible-playbook install.yml

ansible-playbook add_ini.yml --check #run playbook in dry-run mode. See what Ansible might do, but without actually changing anything

ansible-playbook add_and_restart.yml --check --limit "Dominos-11,Dominos-12,Dominos-13,Dominos-14,Dominos-15,Dominos-16,Dominos-17,Dominos-18,Dominos-19,Dominos-20" #limit the number of hosts to run on in a group of hosts

ansible-playbook add_and_restart.yml --check -e "host=dominos" --limit "Dominos-01,Dominos-02,Dominos-03,Dominos-04,Dominos-05,Dominos-06,Dominos-07,Dominos-08,Dominos-09,Dominos-10" #limit the number of hosts to run on in a group of hosts

# using envionment variable

ansible-playbook pull.yml --check -e "host=iiitd"
```

### retry offline devices

```bash
ansible-playbook <ansible_playbook>.yml --limit @<ansible_playbook>.retry
```

### Major Commands

```bash
ansible-playbook timesync_dns.yml -i inventory/motherdairy --extra-vars "variable_host=MotherDairy_2" >> logs/motherdairy_timesync_dns.log &

ansible-playbook timesync_dns.yml -i inventory/dominos --extra-vars "variable_host=Dominos" --limit @timesync_dns.retry >> logs/dominos_timesync_dns.retry.log &
```

## Command

```bash
/home/ubuntu/ssh - all clients to ssh

/home/ubuntu/ansible_playbooks - all the playbooks for ansible

/etc/ansible/hosts - stores all hosts for ansible

./home/ubuntu/ssh/example-01 - ssh to example-01
```

## Example yml files

```yml
install.yml
    -
        hosts: {{ host }}
        gather_facts: no
        vars:
            ansible_ssh_user: pi
            ansible_port: 1234
            ansible_ssh_pass: 'xitanez123!@#'
        tasks:
            -
                name: 'install kafka-python'
                become: yes
                pip: {name: kafka-python}

add_ini.yml
    -
        hosts: iiitd
        tasks:
            -
                name: 'install reporting location'
                become: yes
                ini_file:
                    path: /home/pi/conf/electric_meter.conf
                    section: report 1
                    option: ReportDeliveryLocation
                    value: kafka://kafka.abc.com:9092/iot_data
                    backup: yes

iiitd_pull_playbook.yml
    -
        hosts: iiitd
        tasks:
            -
            name: 'pull'
```
