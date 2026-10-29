# webserialapi
Send codes to trigger

[live demo ](https://raw.githack.com/bcbergmanuu/webserialapi/master/index.html)

Send codes to 8 bit triggerbox, it behaves like serial over usb to printer parallel port. 

Only chromium and internet expolorer are supported.

For ubuntu users that installed chromium using Snap:

    sudo snap connect chromium:serial-port my-snap:serial-port
    sudo snap connect chromium:serial-port serial-port
    sudo snap connect chromium:raw-usb
    sudo snap connect chromium:hardware-observe

For all linux users:

    sudo usermod -aG dialout $USER
