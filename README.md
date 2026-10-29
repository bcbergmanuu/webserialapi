# webserialapi
Send codes to trigger

[go to ](https://rawcdn.githack.com/bcbergmanuu/webserialapi/e1304f3c79d82bd8ab6f2964e5840ba13cb6cdc9/index.html)live demo

Send codes to 8 bit triggerbox, it behaves like serial over usb to printer parallel port. 

Only chromium and internet expolorer are supported.

For ubuntu users that installed chromium using Snap:

    sudo snap connect chromium:serial-port my-snap:serial-port
    sudo snap connect chromium:serial-port serial-port
    sudo snap connect chromium:raw-usb
    sudo snap connect chromium:hardware-observe

For all linux users:

    sudo usermod -aG dialout $USER
