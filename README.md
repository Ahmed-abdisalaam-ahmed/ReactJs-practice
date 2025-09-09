ndows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows

PS C:\Users\Administrator> $ ls -al ~/.ssh
$ : The term '$' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the
spelling of the name, or if a path was included, verify that the path is correct and try again.
At line:1 char:1
+ $ ls -al ~/.ssh
+ ~
    + CategoryInfo          : ObjectNotFound: ($:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

PS C:\Users\Administrator> dir ~/.ssh


    Directory: C:\Users\Administrator\.ssh


Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a----          9/8/2025   6:39 PM            419 id_ed25519
-a----          9/8/2025   6:39 PM            106 id_ed25519.pub


PS C:\Users\Administrator> Start-Service ssh-agent
Start-Service : Service 'OpenSSH Authentication Agent (ssh-agent)' cannot be started due to the following error:
Cannot start service ssh-agent on computer '.'.
At line:1 char:1
+ Start-Service ssh-agent
+ ~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : OpenError: (System.ServiceProcess.ServiceController:ServiceController) [Start-Service],
   ServiceCommandException
    + FullyQualifiedErrorId : CouldNotStartService,Microsoft.PowerShell.Commands.StartServiceCommand

PS C:\Users\Administrator> ssh-add $env:USERPROFILE\.ssh\id_ed25519
Error connecting to agent: No such file or directory
PS C:\Users\Administrator> Get-Service ssh-agent | Set-Service -StartupType Automatic
PS C:\Users\Administrator> Start-Service ssh-agent
PS C:\Users\Administrator> ssh-add $env:USERPROFILE\.ssh\id_ed25519
Identity added: C:\Users\Administrator\.ssh\id_ed25519 (shihabeldin70@gmail.com)
PS C:\Users\Administrator> ssh -T git@github.com
The authenticity of host 'github.com (140.82.121.4)' can't be established.
ECDSA key fingerprint is SHA256:p2QAMXNIC1TJYWeIOttrVc98/R1BUFWu3/LiyKgUfQM.
Are you sure you want to continue connecting (yes/no/[fingerprint])? n
Please type 'yes', 'no' or the fingerprint: no
Host key verification failed.
PS C:\Users\Administrator> ssh -T git@github.com
The authenticity of host 'github.com (140.82.121.4)' can't be established.
ECDSA key fingerprint is SHA256:p2QAMXNIC1TJYWeIOttrVc98/R1BUFWu3/LiyKgUfQM.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'github.com,140.82.121.4' (ECDSA) to the list of known hosts.
git@github.com: Permission denied (publickey).
PS C:\Users\Administrator> Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIM0P1hGlobC47P7R6iMWWFFVMIMzw8RA5lpQ6yMRXpmR shihabeldin70@gmail.com
PS C:\Users\Administrator> ssh -T git@github.com
Warning: Permanently added the ECDSA host key for IP address '140.82.121.3' to the list of known hosts.
Hi Ahmed-abdisalaam-ahmed! You've successfully authenticated, but GitHub does not provide shell access.
