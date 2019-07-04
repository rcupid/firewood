### nginx
```bash
# 查看
nginx -h

# Options:
#   -?,-h         : this help
#   -v            : show version and exit
#   -V            : show version and configure options then exit
#   -t            : test configuration and exit
#   -T            : test configuration, dump it and exit
#   -q            : suppress non-error messages during configuration testing
#   -s signal     : send signal to a master process: stop, quit, reopen, reload
#   -p prefix     : set prefix path (default: /usr/share/nginx/)
#   -c filename   : set configuration file (default: /etc/nginx/nginx.conf)
#   -g directives : set global directives out of configuration file

# 打开目录
cd /etc/nginx/
# nginx.conf是默认的，不能更改，需要更改conf.d文件夹

nginx -t 
# nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
# nginx: configuration file /etc/nginx/nginx.conf test is successful

nginx -s reload
```