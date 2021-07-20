#NestJS Project
## Https
[Docs|https://docs.nestjs.com/faq/multiple-servers#https]

## [openssl生成pem公私钥|(https://blog.csdn.net/Solyutian/article/details/84033765)]
https://www.cnblogs.com/littleatp/p/5878763.html
### 1
openssl genrsa -out ./secrets/private.key 2048

### 2
openssl req -new -x509 -days 365 -key ./secrets/private.key -out ./secrets/cert.pem


