# Amazon Web Services

* Welcome! In this guide, we will show you how to launch a virtual server in Amazon's Elastic Compute Cloud (EC2). This EC2 instance (virtual server) will be used for running application on the Amazon Web Services (AWS) infrastructure. Amazon provides a **Free Tier Eligible** trial that will allow you to use certain AWS systems at no cost during the trial period.

## Landing Page

* Let's get started by visiting the **Free Tier Eligible** website:

  * [AWS](https://aws.amazon.com/free/)

![alt text][aws_free_tier]

* Select the **Create a Free Account** button to get started


## Sign Up

* Follow the instructions to create a new account

![alt text][aws_create_account]

## Add Payment Information

* Add Credit Card or Prepaid card here (We will only use free services for this course)

![alt text][aws_payment_information]

## Verify Identification

* Complete the identity verification steps and enter a PIN to verify identification

![alt text][aws_identity_verification]

## Identity Verified

* You should see green check marks once you have successfully completed identity verification

* Select **Continue to select your Support Plan**

![alt text][aws_identity_verified]


## Support Plan

* Choose the Basic Support Plan

![alt text][aws_support_plan]

## Complete Signup

* Select the **Complete Signup** button

![alt text][aws_complete_signup]

* This brings you to the AWS Services Landing Page

![alt text][aws_services_landing_page]

## AWS Services

* Click the **services** menu at the top-left of the screen

* and select the **EC2** Instance Option under **Compute**

![alt text][aws_services]

## AWS EC2 Landing Page

* Under **Create Instance**, select the **Launch Instance** button

  * This will open a wizard dialog that will walk you through setting up an EC2 Instance.

![alt text][aws_ec2_landing_page]

## AWS EC2 Create Instance Wizard Dialog

### Choose EC2 Image

* Select the **Free Tier Eligible** Amazon Linux AMI (64-bit)

![alt text][aws_choose_machine_image]


### Choose Instance Type

* Select the **Free Tier Eligible**, `t2.micro` option

![alt text][aws_instance_type]

### Configure Instance

* Select the **Next: Configure instance detals** button

* You can leave the defaults for this menu.

* Select the **Next: Add storage** button

![alt text][aws_configure_instance]

### Add Storage

* Add **30GiB** of storage (check Amazon prices to see what the max amount of free storage is. This should be displayed on this menu)

* Select the **Next: Add Tags** button

![alt text][aws_add_storage]

### Add Tags

* Select the **Next: Configure security group** button

![alt text][aws_add_tags]

### Configure Security Group

* Select **Create a new security group**

* Add a second rule for **HTTP** as shown in the image below. Make sure tha the **SSH** and **HTTP** rules match the settings show in the image.

* Select **Review and Launch**

![alt text][aws_configure_security_group]

## Review Summary

* Select the **launch** button to launch your instance

![alt text][aws_instance_review]

### Create a new key pair

* Select **Create a new key pair** and enter **aws** for the key pair name.

* Select the **Download Key Pair** button to download the `pem` file

![alt text][aws_create_new_key_pair]

### AWS Credentials

* We need to make a directory called `.aws_credentials` in your home directory.

* Open a terminal (console) window and run the command `mkdir ~/.aws_credentials`

  * Windows users will do this with **git-bash** as the console window

![alt text][aws_mkdir_credentials]

* Next, move the `pem` file from the **Downloads** location to the new `.aws_credentials` folder. Note that you may need to edit this command if your `pem` file is not in **Downloads**

  * `mv ~/Downloads/aws.pem ~/.aws_credentials`

![alt text][aws_move_pem_file]

* Finally, set the permissions of the `aws.pem` file to `400` which is read only for the user.

  * `chmod 400 ~/.aws_credentials/aws.pem`

![alt text][aws_set_permissions]

* You can now close your terminal window and return to the AWS webpage.

### Launch Status

* You should now see a page with **Your instances are now launching**

* Click the instance name just to the left of **view launch log**

  * This instance name is an alphanumeric key that should look something like:  **i-a0151456320f26ff2**

* This will take you to the EC2 dashboard

![alt text][aws_launch_status]

### EC2 Dashboard

* You should now see the EC2 dashboard page with details of your running instance. We will need to copy the **Public DNS (IPv4)** value to a text file.

![alt text][aws_ec2_dashboard]

### Public DNS (IPv4)

* Copy this value to a text file

![alt text][aws_public_dns]

### Connect to the EC2 Instance

* You will now connect to your running EC2 instance from your local machine.

* Open a terminal window (git-bash for Windows users)

* You will run the following command, except that you need to replace everything after the `@` symbol with the **Public DNS (IPv4)** string that you saved earlier.

* `ssh -i ~/.aws_credentials/aws.pem ec2-user@ec2-13-58-196-198.us-east-2.compute.amazonaws.com`

  * Replace `ec2-13-58-196-198.us-east-2.compute.amazonaws.com` with the Public DNS string that you saved to a text file earler.

![alt text][aws_connect_to_ec2]

* You may get a warning about the authenticity of the host. You can type `yes` and hit the enter key to continue

![alt text][aws_authenticity]

* You should now see welcome text. This indicates that you are connected to the EC2 instance!

![alt text][aws_successful_login]

### Updating and Testing Docker

* We will next need to update the **yum** package manager to grab any new updates.

![alt text][aws_update_yum]

* Next, we will install docker

![alt text][aws_install_docker]

* We will need to start the docker service

![alt text][aws_docker_start]

* Finally, we will run docker hello-world

```sudo docker run hello-world```

* You should see an output that looks something like this:

![alt text][aws_docker_hello_world_success]

### Finished!

* Congratulations! You have successfully launched a Docker container in the cloud! We will cover more of this in detail during the course.

* One final note, AWS charges for many of their services. With the Free Tier Elibile service, you are provided (Check Amazon pricing to verify this) 750 hours per month for 12 months. This allows you to run the free tier EC2 instance 24/7 for a year. After the one year trial, you will be charged for any running services. Consult Amazon's documentation for additional details on this. You may want to terminate the EC2 instance at the end of your 1 year trial period to avoid additional costs. You can do this by visiting the EC2 dashboard and selecting the **terminate** action. Please ask your Instructor or TAs if you have any additional questions about this.

![alt text][aws_terminate_ec2]

- - -

### Copyright

Coding Boot Camp © 2017. All Rights Reserved.


[comment]: <> (Image Links)

[aws_free_tier]: ./Images/aws_free_tier.png "Amazon Web Services (AWS) Free Tier"
[aws_create_account]: ./Images/aws_create_account.png "Create New Account"
[aws_payment_information]: ./Images/aws_payment_information.png "Add Payment Information"
[aws_identity_verification]: ./Images/aws_identity_verification.png "Identity Verification"
[aws_identity_verified]: ./Images/aws_identity_verified.png "Identity Verified"
[aws_support_plan]: ./Images/aws_support_plan.png "aws_support_plan"
[aws_complete_signup]: ./Images/aws_complete_signup.png "aws_complete_signup"
[aws_services_landing_page]: ./Images/aws_services_landing_page.png "aws_services_landing_page"
[aws_services]: ./Images/aws_services.png "aws_services"
[aws_ec2_landing_page]: ./Images/aws_ec2_landing_page.png "aws_ec2_landing_page"
[aws_choose_machine_image]: ./Images/aws_choose_machine_image.png "aws_choose_machine_image"
[aws_instance_type]: ./Images/aws_instance_type.png "aws_instance_type"
[aws_configure_instance]: ./Images/aws_configure_instance.png "aws_configure_instance"
[aws_add_storage]: ./Images/aws_add_storage.png "aws_add_storage"
[aws_add_tags]: ./Images/aws_add_tags.png "aws_add_tags"
[aws_configure_security_group]: ./Images/aws_configure_security_group.png "aws_configure_security_group"
[aws_instance_review]: ./Images/aws_instance_review.png "aws_instance_review"
[aws_create_new_key_pair]: ./Images/aws_create_new_key_pair.png "aws_create_new_key_pair"
[aws_launch_status]: ./Images/aws_launch_status.png "aws_launch_status"
[aws_ec2_dashboard]: ./Images/aws_ec2_dashboard.png "aws_ec2_dashboard"
[aws_public_dns]: ./Images/aws_public_dns.png "aws_public_dns"
[aws_mkdir_credentials]: ./Images/aws_mkdir_credentials.png "aws_mkdir_credentials"
[aws_move_pem_file]: ./Images/aws_move_pem_file.png "aws_move_pem_file"
[aws_set_permissions]: ./Images/aws_set_permissions.png "aws_set_permissions"
[aws_connect_to_ec2]: ./Images/aws_connect_to_ec2.png "aws_connect_to_ec2"
[aws_authenticity]: ./Images/aws_authenticity.png "aws_authenticity"
[aws_successful_login]: ./Images/aws_successful_login.png "aws_successful_login"
[aws_update_yum]: ./Images/aws_update_yum.png "aws_update_yum"
[aws_install_docker]: ./Images/aws_install_docker.png "aws_install_docker"
[aws_docker_start]: ./Images/aws_docker_start.png "aws_docker_start"
[aws_docker_hello_world_success]: ./Images/aws_docker_hello_world_success.png "aws_docker_hello_world_success"
[aws_terminate_ec2]: ./Images/aws_terminate_ec2.png "aws_terminate_ec2"
