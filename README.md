#NestJS Project
## Https
[Docs|https://docs.nestjs.com/faq/multiple-servers#https]

## [openssl生成pem公私钥|(https://blog.csdn.net/Solyutian/article/details/84033765)]
https://www.cnblogs.com/littleatp/p/5878763.html
### 1
openssl genrsa -out ./secrets/rsa_private.key 2048
openssl rsa -in ./secrets/rsa_private.key -pubout -out ./secrets/rsa_public.key

### 2
openssl req -new -x509 -days 365 -key ./secrets/rsa_private.key -out ./secrets/cert.crt


### 3
openssl x509 -in ./secrets/cert.crt -inform CRT -outform PEM -out ./secrets/cert.pem

